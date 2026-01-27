import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, BarChart2 } from 'lucide-react';
import heroData from '../../data/hero.json';


export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-primary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for new projects
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white"
                        >
                            From concept to prototype: <span className="text-primary">Building practical AI systems.</span>
                        </motion.h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                            Hi, I'm {heroData.name}. {heroData.tagline} I specialize in Ai&ML, Data Science, Analytics and building interactive applications and dashboards.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                        >
                            <a href="#projects" className="cursor-pointer btn-primary">
                                View Projects
                            </a>
                            <a href={heroData.resumeLink} download className="btn-outline">
                                <FileText size={18} /> Download Resume
                            </a>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative flex justify-center w-full max-w-md mx-auto">
                        <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <img
                                src={heroData.image}
                                alt={heroData.name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
                <ArrowDown size={24} />
            </div>
        </section>
    );
}
