import React from 'react';

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-300">
            {/* Static Gradient Orb 1 */}
            <div
                className="absolute -top-[10%] -left-[10%] w-[50vh] h-[50vh] rounded-full bg-purple-300/40 dark:bg-indigo-600/30 opacity-80"
            />

            {/* Static Gradient Orb 2 */}
            <div
                className="absolute top-[20%] right-[0%] w-[60vh] h-[60vh] rounded-full bg-blue-300/40 dark:bg-blue-600/30 opacity-80"
            />

            {/* Static Gradient Orb 3 */}
            <div
                className="absolute -bottom-[20%] left-[20%] w-[70vh] h-[70vh] rounded-full bg-cyan-300/40 dark:bg-cyan-600/30 opacity-80"
            />

            {/* Grid Overlay for Texture */}
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
        </div>
    );
}
