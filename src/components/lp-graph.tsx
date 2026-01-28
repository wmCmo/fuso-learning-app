import ForceGraph2D from 'react-force-graph-2d';
import courses from '@/assets/json/courses';
import courseTags from '@/assets/json/courseTags';
import { useMemo, useState } from 'react';


type IdLike = { id: string | number; } | string | number | null | undefined;
interface LinkCount {
    [key: string]: number;
}
interface NeighborMap {
    [key: string]: Set<string>;
}

export default function LPGraph() {
    const rawCourseTags = useMemo(() => {
        const nodes = courseTags.map(tag => ({ ...tag, value: 10 }));
        const links = courseTags.flatMap(courseTag => (courseTag.targets || []).map(tag => ({ source: courseTag, target: tag })));
        return { nodes, links };
    }, []);

    const rawCourses = useMemo(() => {
        const tags = [...new Set(courses.map(course => course.tag))];
        const nodes = tags.map(tag => ({ id: tag, name: tag, value: 0.5, types: "tags" })).concat(courses.map(course => ({ id: `${course.name}-${course.source}`, name: course.name, value: 1, types: "courses" })));
        const links = courses.map(course => ({ source: `${course.name}-${course.source}`, target: course.tag }));
        return { nodes, links };
    }, []);

    const [rawNodes, setRawNodes] = useState(rawCourseTags);
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

        const sizedNodes = nodes.map(node => ({
            ...node,
            val: 0.5 + (linkCount[node.id] || 0),
            neighbors: neighborMap[node.id] || new Set()
        }));

        return { nodes: sizedNodes, links: normalizedLinks };
    }, [rawNodes]);
    return (
        <div>LPGraph</div>
    );
}
