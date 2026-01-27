import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import socialData from '../../data/social.json';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex space-x-6 mb-8">
                    <a href={socialData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <Linkedin size={24} />
                    </a>


                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
}
