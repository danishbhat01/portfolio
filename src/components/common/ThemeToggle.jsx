import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
        p-2 rounded-lg transition-colors border relative overflow-hidden
        ${theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700'
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}
      `}
            aria-label="Toggle Theme"
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
        </button>
    );
}
