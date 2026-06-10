import { motion } from 'motion/react';
import { Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[100px] rounded-bl-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to kickstart your tech career through our internship programs? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="tel:+919182047829" className="flex items-center gap-4 text-slate-300 hover:text-white group">
                <div className="w-12 h-12 bg-black rounded-xl border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone Number</p>
                  <p className="text-lg font-semibold tracking-wide">+91 9182047829</p>
                </div>
              </a>

              <a href="https://mad-tech-internship.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white group">
                <div className="w-12 h-12 bg-black rounded-xl border border-white/5 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Website</p>
                  <p className="text-lg font-semibold">mad-tech-internship.vercel.app</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-black rounded-xl border border-white/5 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-lg font-semibold">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-fuchsia-600 rounded-3xl p-8 pt-10 shadow-[0_0_30px_rgba(192,38,211,0.3)]"
          >
            <div className="text-black">
              <div className="text-[10px] font-bold uppercase mb-1 opacity-70">Inquiries & Registration</div>
              <div className="text-3xl font-black mb-4">MAD TECH Support</div>
              <p className="font-medium leading-relaxed mb-8 opacity-90 text-sm">
                We look forward to solving complex challenges with you. We value rapid response times and will get back to your inquiry within 24 hours. Contact our enrollment desk straight via phone to fast-track your internship application.
              </p>
            </div>
            <a
              href="https://wa.me/919182047829?text=Hello%20MAD%20TECH%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform"
            >
              Message on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
