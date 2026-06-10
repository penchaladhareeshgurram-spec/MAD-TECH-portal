import { motion } from 'motion/react';
import { Terminal, Database, Shield, Smartphone, Globe, PenTool, MessageCircle } from 'lucide-react';

const programs = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Master React, Node.js, HTML, CSS, and modern web architectures.",
    duration: "3-6 Months"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App Development",
    description: "Build robust cross-platform mobile apps using Flutter and React Native.",
    duration: "3-6 Months"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Learn wireframing, prototyping, user research, and Figma mastery.",
    duration: "3 Months"
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Python Development",
    description: "Deep dive into Python, automation scripts, Django, and APIs.",
    duration: "3-6 Months"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Science",
    description: "Harness data with Pandas, machine learning models, and visualization.",
    duration: "6 Months"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cyber Security",
    description: "Ethical hacking, network security, testing, and threat mitigation.",
    duration: "3-6 Months"
  }
];

export default function Internships() {
  const WHATSAPP_NUMBER = "919182047829";

  return (
    <section id="internships" className="py-24 relative">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent top-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-tighter mb-6">
            Now Hiring Candidates
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Internship</span> Programs
          </h2>
          <p className="text-slate-400 text-lg">
            Kickstart your career with hands-on, real-world project portfolios guided by industry experts. Apply for our highly sought-after internships below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const messageText = `Hello MAD TECH, I am interested in the ${program.title} internship program.`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-black/30 border border-white/5 rounded-3xl p-6 hover:bg-black/60 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{program.title}</h3>
                    <span className="text-green-400 uppercase font-bold px-1.5 py-0.5 rounded bg-green-500/20 text-[10px] block w-max mt-1">
                      {program.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 flex-grow">
                  {program.description}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 text-white text-xs font-bold rounded-xl hover:bg-fuchsia-500 hover:text-white uppercase tracking-wider transition-colors group-hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enroll via WhatsApp
                </a>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
