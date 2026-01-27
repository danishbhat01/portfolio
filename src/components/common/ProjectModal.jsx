import React from 'react';
import { X, Github, ExternalLink, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80"
                ></motion.div>

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    <div className="relative h-64 sm:h-80">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none space-y-6">
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">Overview</h4>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.problem && (
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">The Problem</h4>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        {project.problem}
                                    </p>
                                </div>
                            )}

                            {project.approach && project.approach.length > 0 && (
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">My Approach</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                                        {project.approach.map((step, idx) => (
                                            <li key={idx}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.outcome && (
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">The Outcome</h4>
                                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                                        {project.outcome}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
