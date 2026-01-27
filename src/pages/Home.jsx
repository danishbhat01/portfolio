import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import heroData from '../data/hero.json';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{heroData.name} - {heroData.role}</title>
                <meta name="description" content={heroData.tagline} />
            </Helmet>

            <div className="bg-white dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Achievements />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
