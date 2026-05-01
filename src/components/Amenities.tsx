import React from 'react';
import { motion } from 'motion/react';
import { AMENITIES } from '../constants';

export default function Amenities() {
  return (
    <section className="py-24 px-6 bg-dark border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <h3 className="text-2xl font-display font-medium text-white/80">Studio Comforts</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {AMENITIES.map((item, i) => {
             const Icon = item.icon;
             return (
               <motion.div
                 key={item.name}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col items-center text-center group"
               >
                 <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-4 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                   <Icon className="w-8 h-8 text-white/30 group-hover:text-gold transition-colors" />
                 </div>
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-white transition-colors">
                   {item.name}
                 </span>
               </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
