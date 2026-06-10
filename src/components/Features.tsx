import { motion } from 'motion/react';
import { UserCheck, Briefcase, Award, Compass, Layers } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Expert Mentors",
    description: "Learn directly from seasoned professionals with years of high-level industry background."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Real Projects",
    description: "Don't just watch tutorials. Build real-world applications that solve actual problems."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Industry Experience",
    description: "Get exposed to professional workflows, agile methodologies, and live production environments."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Internship Certificate",
    description: "Receive a verified certificate of completion recognizing your technical contributions."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Career Guidance",
    description: "Job placement assistance, resume building, and mock interviews to prepare you for tech roles."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-cyan-900/10 to-fuchsia-900/10 hidden lg:block overflow-hidden border-y border-white/5">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Choose Us?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              We stand apart by offering an immersive, high-growth environment focused on functional outcomes, not just academic theory. Discover what makes an internship at MAD TECH unmatched.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-black/40 flex items-center justify-center text-cyan-400 border border-cyan-400/20 rounded-xl">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feat.title}</h4>
                    <p className="text-sm text-slate-400">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-slate-700/50 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-fuchsia-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="bg-black border border-white/10 p-8 rounded-full z-10 shadow-[0_0_30px_rgba(192,38,211,0.1)] text-center w-64 h-64 flex flex-col justify-center items-center">
                <span className="font-display text-4xl font-bold text-white mb-2">100%</span>
                <span className="text-fuchsia-400 font-bold uppercase text-sm tracking-widest">Growth Oriented</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
