import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageSquare, ArrowRight, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Gradients and high-impact image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Studio Ambiance"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark/40 via-transparent to-dark z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="text-gold font-montserrat text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                Nayudupeta’s Definitive Studio
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-medium leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter text-white">
              LEGACY &<br />
              <span className="text-gradient-gold italic">ARTISTRY.</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-2xl max-w-xl mb-12 font-light leading-relaxed">
              Premium Salon & Tattoo Studio. <br />
              <span className="text-gold/80 font-medium">Where Tradition Meets the Avant-Garde.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-gold text-dark px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center transition-all shadow-xl shadow-gold/20"
              >
                Explore Services
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto flex items-center justify-center text-white/40 hover:text-gold uppercase tracking-widest text-sm font-bold group"
              >
                <span>Book Direct via WhatsApp</span>
                <div className="ml-3 w-10 h-px bg-white/10 group-hover:bg-gold group-hover:w-16 transition-all" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative side element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block lg:col-span-4 relative"
        >
          <div className="absolute -inset-10 bg-gold/10 blur-[100px] rounded-full" />
          <div className="relative glass aspect-square rounded-[4rem] border-white/5 flex items-center justify-center overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=600&h=600" 
               className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] hover:scale-110 transition-transform duration-700"
               alt="Grooming Mastery Tools"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-linear-to-t from-dark/90 to-transparent" />
             <div className="absolute bottom-10 left-10 text-left">
                <span className="text-gold text-4xl font-display font-medium">Est. 2010</span>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">A Decade of Excellence</p>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 cursor-pointer"
        onClick={() => {
           document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={40} className="text-gold" />
      </motion.div>
    </section>
  );
}
