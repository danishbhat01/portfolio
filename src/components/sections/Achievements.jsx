import React, { useState } from 'react';
import achievementsData from '../../data/achievements.json';
import { Award, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Achievements() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="achievements" className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Click on an achievement to view details</p>
                </div>

                {/* Horizontal Line Background - hidden on mobile for cleaner look */}
                <div className="absolute top-[32px] left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-12 pt-4 px-4">
                    {achievementsData.map((item, index) => (
                        <div key={index} className="w-full">
                            <div
                                className="relative flex flex-col items-center group cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Timeline Node */}
                                <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 
                                        ${selectedItem === item
                                        ? 'bg-primary border-primary text-white scale-110 shadow-primary/40'
                                        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary group-hover:border-primary'
                                    }`}>
                                    <Award size={32} />
                                </div>

                                {/* Basic Info */}
                                <div className="mt-6 text-center w-full px-2">
                                    <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                                        <Calendar size={12} className="mr-1" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.organization}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Verification Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/80"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Header (if exists) */}
                            {selectedItem.image && (
                                <div className="h-48 sm:h-64 w-full bg-slate-100 dark:bg-slate-800 relative">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-6 text-white">
                                        <div className="flex items-center gap-2 mb-2 text-sm font-medium opacity-90">
                                            <Calendar size={14} />
                                            {selectedItem.date}
                                        </div>
                                        <h3 className="text-2xl font-bold leading-tight">{selectedItem.title}</h3>
                                    </div>
                                </div>
                            )}

                            {/* Content Body */}
                            <div className="p-6 sm:p-8 overflow-y-auto">
                                {!selectedItem.image && (
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                                            <Calendar size={14} />
                                            {selectedItem.date}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{selectedItem.title}</h3>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Organization</div>
                                        <div className="text-lg font-semibold text-slate-900 dark:text-white">{selectedItem.organization}</div>
                                    </div>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <h4 className="text-sm uppercase tracking-wide text-slate-500 font-bold mb-3">About this Achievement</h4>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                        {selectedItem.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="btn-primary"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section >
    );
}
