import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <MessageCircle size={32} className="text-white relative z-10" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-60 pointer-events-none" />
    </motion.a>
  );
}
