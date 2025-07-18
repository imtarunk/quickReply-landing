'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
    targetRef: React.RefObject<HTMLElement|null>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ targetRef }) => {
    const [progress, setProgress] = useState(0);
    const maxHeight = 467; // Your original fixed height

    useEffect(() => {
        const handleScroll = () => {
            if (!targetRef.current) return;

            const rect = targetRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;
            
            // Calculate scroll progress (0 when section appears, 1 when fully scrolled)
            const scrollProgress = Math.min(
                Math.max(
                    (-rect.top) / (-sectionHeight + windowHeight),
                    0
                ),
                1
            );
            
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialize on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, [targetRef]);

    return (
        <div className="hidden mt-20 lg:flex flex-col items-center justify-center w-[20px] h-full">
            <div className="relative w-2.5 h-[400px] bg-[#dddddd] rounded-[10px] overflow-hidden">
                {/* Gray background track (full height) */}
                <div className="absolute inset-0 w-2.5 bg-[#dddddd] rounded-[10px]"></div>
                
                {/* Blue progress bar (grows from top to bottom) */}
                <motion.div
                    className="absolute top-0 left-0 w-2.5 bg-[#4ebff7] rounded-[10px]"
                    style={{ 
                        height: `${progress * maxHeight}px`,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </div>
        </div>
    );
};