import ForceGraph2D, { type ForceGraphMethods, type LinkObject, type NodeObject } from 'react-force-graph-2d';
import { forceX, forceY } from 'd3-force';
import courseTags from '@/assets/json/courseTags';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import courses from '@/assets/json/courses';
// import { CoolButton } from '@/pages/landing';


type IdLike = LinkObject | string | number | undefined;

type GraphData = {
    nodes: NodeObject[];
    links: LinkObject[];
};

interface LinkCount {
    [key: string]: number;
}
interface NeighborMap {
    [key: string]: Set<string>;
}

export default function LPGraph() {
    const refGraph = useRef<ForceGraphMethods | undefined>(undefined);
    const zoomTarget = useRef<number>(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isAnimating = useRef(false);

    const [hoverNode, setHoverNode] = useState<NodeObject | null>(null);
    // const [selectedNode, setSelectedNode] = useState<NodeObject | null>(null);

    const rawCourseTags = useMemo<GraphData>(() => {
        const nodes = courseTags.map(tag => ({ ...tag, value: 10, type: 'tags' }));
        const links = courseTags.flatMap(courseTag => (courseTag.targets || []).map(tag => ({ source: courseTag, target: tag })));
        return { nodes, links };
    }, []);

    const rawCourses = useMemo<GraphData>(() => {
        const tags = [...new Set(courses.map(course => course.tag))];
        const nodes = tags
            .map(tag => ({ id: tag, name: tag, value: 0.5, type: "tags" }))
            .concat(courses.map(course => ({ id: `${course.name}-${course.source}`, name: course.name, value: 1, type: "courses" })));
        const links = courses.map(course => ({ source: `${course.name}-${course.source}`, target: course.tag }));
        return { nodes, links };
    }, []);

    const [rawNodes, setRawNodes] = useState<GraphData>(rawCourseTags);
    const getId = (n: IdLike): string => {
        if (n == null) return '';
        return typeof n === 'object' ? String(n.id) : String(n);
    };
    const feedData = useMemo(() => {
        const { nodes, links } = rawNodes;

        const normalizedLinks = links.map(link => ({
            ...link,
            source: getId(link.source),
            target: getId(link.target)
        }));

        const linkCount: LinkCount = {};
        const neighborMap: NeighborMap = {};

        normalizedLinks.forEach(link => {
            const sourceId = link.source;
            const targetId = link.target;
            linkCount[sourceId] = (linkCount[sourceId] || 0) + 1;
            linkCount[targetId] = (linkCount[targetId] || 0) + 1;

            if (!neighborMap[sourceId]) neighborMap[sourceId] = new Set();
            if (!neighborMap[targetId]) neighborMap[targetId] = new Set();

            neighborMap[sourceId].add(targetId);
            neighborMap[targetId].add(sourceId);
        });

        const sizedNodes = nodes.map((node: NodeObject) => {
            const nodeId = getId(node);
            return {
                ...node,
                id: nodeId,
                val: 0.5 + (linkCount[nodeId] ?? 0),
                neighbors: neighborMap[nodeId] ?? new Set<string>()
            };
        });

        return { nodes: sizedNodes, links: normalizedLinks };
    }, [rawNodes]);

    useEffect(() => {
        refGraph.current?.d3Force('x', forceX(0).strength(0.2));
        refGraph.current?.d3Force('y', forceY(0).strength(0.2));
        refGraph.current?.d3Force('charge')?.strength(-100);

        zoomTarget.current = refGraph.current?.zoom() ?? 1;
    }, [feedData]);

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        if (!refGraph.current) return;

        const currentZoom = refGraph.current.zoom();

        if (Math.abs(zoomTarget.current - currentZoom) > 0.5 && !isAnimating.current) {
            zoomTarget.current = currentZoom;
        }

        const zoomFactor = e.deltaY > 0 ? 0.85 : 1.15;
        zoomTarget.current *= zoomFactor;

        const clampedZoom = Math.max(0.1, Math.min(zoomTarget.current, 8));

        isAnimating.current = true;
        refGraph.current.zoom(clampedZoom, 200);

        setTimeout(() => {
            isAnimating.current = false;
        }, 400);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel]);

    return (
        <section className='flex items-center gap-32 mt-32'>
            <div ref={containerRef} className='overflow-hidden rounded-[128px] shadow-neutral-200 shadow-2xl relative'>
                <ForceGraph2D
                    height={500}
                    width={500}
                    ref={refGraph}
                    onNodeHover={node => setHoverNode(node || null)}
                    graphData={feedData}
                    onNodeClick={(_, event) => {
                        // setSelectedNode(node);
                        if (rawNodes === rawCourses) return;
                        setRawNodes(rawCourses);
                        const rect = containerRef.current?.getBoundingClientRect();
                        const x = event.clientX - (rect?.left || 0) - 16;
                        const y = event.clientY - (rect?.top || 0) - 16;
                        const circle = document.createElement('div');
                        circle.style.left = `${x}px`;
                        circle.style.top = `${y}px`;
                        containerRef.current?.appendChild(circle);
                        circle.className = 'ripple-circle';
                        circle.addEventListener('animationend', () => circle.remove());
                    }}
                    backgroundColor='#fff'
                    cooldownTicks={100}
                    nodeLabel={node => {
                        const currentZoom = refGraph.current ? refGraph.current.zoom() : 1;
                        if (currentZoom < 1.3) return node.name;
                        return "";
                    }}
                    linkColor={link => {
                        if (!hoverNode) return "#aaa";

                        const hoverId = getId(hoverNode);
                        const sourceId = getId(link.source);
                        const targetId = getId(link.target);
                        const isConnected = sourceId === hoverId || targetId === hoverId;

                        return isConnected ? "#666" : "#eee";

                    }}
                    linkWidth={1}
                    nodeColor={node => {
                        const nodeType = (node as any).type;
                        const defaultColor = nodeType === 'tags' ? "#38BDF8" : "#7AB8DA";

                        if (!hoverNode) return defaultColor;

                        const nodeId = getId(node);
                        const isNeighbor = (hoverNode as any)?.neighbors?.has?.(nodeId) ?? false;
                        const isHovered = nodeId === getId(hoverNode);

                        if (isHovered || isNeighbor) return defaultColor;
                        return "#eee";
                    }}
                    nodeCanvasObjectMode={() => "after"}
                    nodeCanvasObject={(node, ctx, globalScale) => {
                        const fontSize = 12 / globalScale;

                        if (globalScale < 1.3) return;

                        ctx.font = `${fontSize}px Sans-Serif`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = 'rgba(0,0,0, 0.7)';

                        const nodeSize = (node as any).val || 1;
                        const nodeId = getId(node);
                        const hoverId = hoverNode ? getId(hoverNode) : null;
                        const isHovered = hoverId !== null && nodeId === hoverId;
                        const isNeighbor = (hoverNode as any)?.neighbors?.has?.(nodeId) ?? false;

                        ctx.globalAlpha = hoverNode && !isHovered && !isNeighbor ? 0.2 : 1;

                        ctx.fillText(String((node as any).name ?? nodeId), node.x ?? 0, (node.y ?? 0) + 8 + (nodeSize * 0.8));
                        ctx.globalAlpha = 1;
                    }}
                    enableZoomInteraction={false}
                    enablePanInteraction={true}
                />
            </div>
            <div className='text-foreground space-y-4'>
                <h1 className='font-bold text-5xl'>Explore our courses</h1>
                <p className='text-foreground/60'>Dive in using this node graph</p>
                {rawNodes === rawCourses && < button onClick={() => setRawNodes(rawCourseTags)} className='hover:cursor-pointer inline-flex w-fit text-white bg-foreground px-4 py-2 rounded-sm drop-shadow-foreground shadow-xl hover:-translate-y-1 transition-transform duration-200 ease-in-out font-bold'>Reset</button>}
            </div>
        </section >
    );
}
