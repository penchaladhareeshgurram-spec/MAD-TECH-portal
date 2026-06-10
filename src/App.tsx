/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Internships from './components/Internships';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed inset-0 z-[-1] bg-[#050505]">
        <div className="absolute top-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#050505] to-transparent"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Internships />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
