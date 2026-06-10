import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">M</div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              MAD<span className="text-cyan-400">TECH</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
             <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
             <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
             <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
             <a href="#internships" className="hover:text-cyan-400 transition-colors">Internships</a>
             <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <p>
            Copyright &copy; {currentYear !== 2026 && currentYear > 2026 ? `2026-${currentYear}` : "2026"} MAD TECH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
