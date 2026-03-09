"use client";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "", label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
                {count}{suffix}
            </div>
            <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};

export default AnimatedCounter;
