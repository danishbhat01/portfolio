import React from 'react';
import aboutData from '../../data/about.json';


export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bio & Skills */}
                    <div>
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold mb-6">Who I am</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                                {aboutData.bio}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                            <div className="space-y-6">
                                {aboutData.skills.map((skillGroup, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
                            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 relative">
                                {aboutData.timeline.map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary"></div>
                                        <span className="text-sm text-primary font-bold tracking-wider">{item.year}</span>
                                        <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                                        <div className="text-slate-500 mb-2">{item.company}</div>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
