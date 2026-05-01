import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_CATEGORIES, getWhatsAppLink } from '../constants';
import { cn } from '../lib/utils';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CreditCard,
  Banknote,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Services() {
  const [step, setStep] = useState(1); // 1: Category, 2: Service, 3: Details
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [payment, setPayment] = useState('Cash');

  const handleCategorySelect = (cat: any) => {
    setSelectedCategory(cat);
    setStep(2);
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleConfirm = () => {
    const link = getWhatsAppLink(selectedService.name, date, time, payment);
    window.open(link, '_blank');
  };

  return (
    <section id="services" className="py-32 px-6 bg-dark-surface relative overflow-hidden">
      {/* Vintage Background Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C5A059 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-montserrat text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold mb-4 block"
          >
            The Collection
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-display font-medium text-gradient-gold leading-tight">
            Bespoke Services
          </h2>
        </div>

        <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border-white/5 min-h-[450px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-12 border-b border-white/5 pb-6 gap-4">
            <div className="flex items-center space-x-4">
              {step > 1 && (
                <button onClick={handleBack} className="p-2 hover:bg-white/5 rounded-full text-gold transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <h3 className="text-lg md:text-xl font-display text-white/90">
                {step === 1 && "Select a Category"}
                {step === 2 && `Services in ${selectedCategory?.name}`}
                {step === 3 && "Finalize Your Session"}
              </h3>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-500",
                    step >= s ? "bg-gold w-6" : "bg-white/10"
                  )} 
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {SERVICE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat)}
                      className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/[0.03] transition-all text-left flex flex-col items-center"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-center text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-gold transition-colors">
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {selectedCategory?.services.map((service: any) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceSelect(service)}
                    className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 flex items-center justify-between text-left transition-all"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-white group-hover:text-gold transition-colors">{service.name}</h4>
                      <span className="text-[10px] uppercase tracking-widest text-white/30">{service.price} Session</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold/30 group-hover:text-gold transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-xl mx-auto w-full space-y-8"
              >
                <div className="p-6 bg-gold/5 border border-gold/10 rounded-[2rem] flex items-center space-x-6">
                   <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center text-dark shrink-0">
                      <Sparkles size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-display font-bold text-gold">{selectedService?.name}</h4>
                      <p className="text-xs uppercase tracking-widest text-white/40">Luxury Experience Selection</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/60 ml-2">
                      <Calendar className="w-3 h-3 mr-2" /> Prefered Date
                    </label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/60 ml-2">
                       <Clock className="w-3 h-3 mr-2" /> Time Slot
                    </label>
                    <input 
                      type="time" 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/60 ml-2">
                    Payment Preference
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPayment('Cash')}
                      className={cn(
                        "flex items-center justify-center space-x-2 p-5 rounded-2xl border transition-all",
                        payment === 'Cash' ? "bg-gold border-gold text-dark" : "bg-white/5 border-white/10 text-white/50"
                      )}
                    >
                      <Banknote size={20} />
                      <span className="font-bold uppercase tracking-widest text-xs">Cash</span>
                    </button>
                    <button 
                      onClick={() => setPayment('UPI')}
                      className={cn(
                        "flex items-center justify-center space-x-2 p-5 rounded-2xl border transition-all",
                        payment === 'UPI' ? "bg-gold border-gold text-dark" : "bg-white/5 border-white/10 text-white/50"
                      )}
                    >
                      <CreditCard size={20} />
                      <span className="font-bold uppercase tracking-widest text-xs">UPI/Digital</span>
                    </button>
                  </div>
                  <p className="text-[9px] text-center text-white/30 uppercase tracking-[0.2em] px-4">
                    * If you select UPI, the owner will send a QR code via WhatsApp.
                  </p>
                </div>

                <button 
                  onClick={handleConfirm}
                  disabled={!date || !time}
                  className="w-full p-6 bg-gradient-gold text-dark font-black uppercase tracking-[0.3em] rounded-3xl shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Confirm on WhatsApp
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
