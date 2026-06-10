import { motion } from 'motion/react';
import { Smartphone, Globe, PenTool, Braces, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive results.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "Responsive, lightning-fast web applications built on modern frameworks.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-400"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces that elevate your brand and user experience.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom algorithms and software tailored to solve complex business logic.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Digital Solutions",
    description: "End-to-end cloud and digital transformation strategies for modernization.",
    gradient: "from-fuchsia-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Services</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Comprehensive digital suites crafted with precision, speed, and modern architectures to help your business dominate the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black/40 border border-white/5 rounded-3xl p-6 hover:bg-black/60 transition-colors overflow-hidden"
            >
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-xl bg-zinc-900/40 flex items-center justify-center border border-white/5 mb-6 ${service.iconColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
