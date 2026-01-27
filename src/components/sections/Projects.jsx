import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';
import ProjectModal from '../common/ProjectModal';
import { ArrowUpRight, BarChart } from 'lucide-react';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <section id="projects" className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Analysis</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                        A breakdown of my data science projects, visualizations, and case studies.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 pt-4 px-4"
                >
                    {projectsData.map((project) => (
                        <motion.div key={project.id} variants={item} className="w-full">
                            <div
                                className="w-full aspect-square relative rounded-xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                    <div className="flex justify-between items-end gap-3">
                                        <h3 className="text-xl font-bold text-white leading-tight line-clamp-3 mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight size={30} className="text-primary flex-shrink-0 mb-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" />
                                    </div>
                                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 mt-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section >
    );
}
