/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="relative overflow-x-hidden custom-scrollbar">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="relative z-10 -mt-16 md:-mt-24 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="pointer-events-auto glass backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-14 shadow-3xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
               <div className="flex flex-col">
                  <span className="text-gold text-[9px] md:text-[10px] font-montserrat font-black tracking-[0.3em] uppercase mb-2 md:mb-4 opacity-80">Location</span>
                  <p className="text-lg md:text-xl font-display text-white/90 italic">Nayudupeta, Opp. Pedda Darga</p>
               </div>
               <div className="flex flex-col border-y md:border-y-0 md:border-x border-white/5 py-6 md:py-0 md:px-12">
                  <span className="text-gold text-[9px] md:text-[10px] font-montserrat font-black tracking-[0.3em] uppercase mb-2 md:mb-4 opacity-80">Legacy</span>
                  <p className="text-lg md:text-xl font-display text-white/90 italic">14+ Years of Master Artistry</p>
               </div>
               <div className="flex flex-col">
                  <span className="text-gold text-[9px] md:text-[10px] font-montserrat font-black tracking-[0.3em] uppercase mb-2 md:mb-4 opacity-80">Inquiries</span>
                  <p className="text-lg md:text-xl font-display text-white/90 italic">+91 7702778984</p>
               </div>
            </div>
          </div>
        </section>

        <About />
        <Amenities />
        <Services />
        <Gallery />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
