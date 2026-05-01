import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Award, text: "14+ Years Legacy" },
    { icon: ShieldCheck, text: "Sterilized Tools" },
    { icon: Zap, text: "Elite Artists" },
    { icon: CheckCircle2, text: "Hygienic Space" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-dark overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Creative floating images layout */}
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Elite Barber at work" 
              className="rounded-[3rem] shadow-3xl w-full object-cover aspect-[4/5] relative z-10 grayscale-[0.4] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -inset-4 border-2 border-gold/10 rounded-[3.5rem] -z-10" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -bottom-10 -right-4 md:-bottom-12 md:-right-12 glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] z-20 shadow-2xl border-white/5"
          >
            <span className="text-4xl md:text-6xl font-display font-medium text-gradient-gold">14+</span>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mt-1 md:mt-2">Years of Legacy</p>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-gold font-montserrat text-xs tracking-[0.5em] uppercase font-black mb-6 block">The Heritage</span>
          <h3 className="text-4xl md:text-7xl font-display font-medium mb-8 md:mb-10 leading-tight">
            Curating the <span className="text-gradient-gold italic">Exceptional.</span>
          </h3>
          <p className="text-white/50 text-base md:text-xl mb-10 md:mb-12 leading-relaxed font-light">
            Located in the soul of Nayudupeta, Satya’s Saloon & Tattoo Hair Fix Studio is where precision meets elevated artistry. 
            We specialize in transformational grooming and high-detail ink that defines your story.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center space-x-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-gold/10">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                    <Icon className="w-6 h-6 text-gold group-hover:text-dark transition-colors" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-gold transition-colors">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="p-10 border-l-4 border-gold bg-gold/5 rounded-r-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-white/70 italic text-xl font-light leading-relaxed relative z-10">
              "We don't merely provide services; we craft personal landmarks of identity."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
