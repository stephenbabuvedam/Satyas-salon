import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-4 font-montserrat">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium mb-12">Visit the Studio</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 border-white/5">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-white/40 mb-2">Location</h4>
                  <p className="text-xl font-light">Opposite Pedda Darga, Nayudupeta,<br />Nellore, Andhra Pradesh - India</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 border-white/5">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-white/40 mb-2">Contact</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-light block hover:text-gold transition-colors">{PHONE_NUMBER}</a>
                  <a href={WHATSAPP_LINK} className="text-gold text-sm font-semibold mt-1 block">Live WhatsApp Support Available</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 border-white/5">
                  <Clock className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-white/40 mb-2">Hours</h4>
                  <p className="text-xl font-light text-white/80">Mon – Sun: 08:00 AM – 09:00 PM</p>
                  <p className="text-xs text-shorter text-white/40 mt-1 uppercase tracking-widest leading-relaxed">Appointments highly recommended for tattoos & makeup.</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 mt-12 pt-12 border-t border-white/5">
              <a href="#" className="p-3 glass rounded-xl hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 glass rounded-xl hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 glass rounded-xl hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-[500px] rounded-3xl overflow-hidden glass border-white/5 shadow-2xl relative"
          >
            {/* Embedded Google Maps with cinematic dark overlay */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61895.845427958226!2d79.88243167107775!3d13.9118742813137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf025f187af51%3A0xe6719db1070281ba!2sNayudupeta%2C%20Andhra%20Pradesh%20524126!5e0!3m2!1sen!2sin!4v1714546442657!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[12px] border-dark/60" />
            <div className="absolute bottom-6 right-6 p-4 glass rounded-2xl shadow-xl pointer-events-auto">
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 className="flex items-center text-xs font-bold uppercase tracking-widest text-gold"
               >
                 Get Directions <MapPin className="ml-2 w-4 h-4" />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
