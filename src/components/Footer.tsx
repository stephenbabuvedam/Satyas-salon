import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <span className="text-2xl font-display font-bold text-gradient-gold">SATYA'S</span>
            <p className="text-[10px] uppercase tracking-[.4em] text-white/40 mt-1">Saloon & Tattoo Studio</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="font-montserrat text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors">Safety</a>
            <a href="#" className="font-montserrat text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="font-montserrat text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-white/30 border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Satya’s Saloon & Tattoo Hair Fix Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-light">Crafted for Excellence in Nayudupeta.</p>
        </div>
      </div>
    </footer>
  );
}
