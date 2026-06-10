import { motion } from 'motion/react';
import { Target, Rocket, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">MAD TECH</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              We are a forward-thinking technology company rooted in innovation and digital excellence. At MAD TECH, our core expertise spans across mobile applications, captivating websites, and robust software solutions specifically engineered to scale with your business.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Beyond development, we are committed to nurturing the next generation of tech talent through our highly sought-after internship programs. We bridge the gap between academic theory and industry reality.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                <Target className="w-10 h-10 text-cyan-400" />
                <div>
                  <h3 className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-tighter">Our Mission</h3>
                  <p className="text-xs text-slate-400 leading-relaxed italic font-serif">To deliver high-impact digital solutions and empower incoming talent.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-fuchsia-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-8 rounded-3xl">
              <Rocket className="w-12 h-12 text-fuchsia-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                To be the global pioneer in software development and technical mentorship, setting the highest standards for performance, design, and education within the tech ecosystem. 
              </p>
              <ul className="space-y-3">
                {[
                  "Pioneering digital architecture",
                  "Fostering continuous learning",
                  "Transforming concepts into viable models"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
