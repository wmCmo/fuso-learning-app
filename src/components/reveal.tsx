import useInView from '@/hooks/use-in-view';
import type React from 'react';

const Reveal = ({ children }: { children: React.ReactNode; }) => {
    const [ref, isInview] = useInView<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-1000 ease-in-out ${isInview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
            {children}
        </div>
    );
};

export default Reveal;
