import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { SERVICE_CATEGORIES, getWhatsAppLink } from '../constants';
import { User, Phone, Calendar, Clock, CreditCard, Banknote, ClipboardList, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface BookingFields {
  name: string;
  phone: string;
  category: string;
  service: string;
  date: string;
  time: string;
  payment: string;
}

export default function BookingForm() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookingFields>({
    defaultValues: {
      payment: 'Cash',
      category: '',
      service: ''
    }
  });
  
  const selectedCategoryName = watch('category');
  const currentCategory = SERVICE_CATEGORIES.find(c => c.name === selectedCategoryName);
  const selectedPayment = watch('payment');

  const onSubmit = (data: BookingFields) => {
    const link = getWhatsAppLink(data.service, data.date, data.time, data.payment);
    window.open(link, '_blank');
  };

  return (
    <section id="booking-form" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-gold font-black mb-4">Quick Reservation</h2>
          <h3 className="text-4xl font-display text-white">Classic Booking Form</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/5"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    {...register('name', { required: true })}
                    placeholder="Enter name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-14 py-4 focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    {...register('phone', { required: true })}
                    placeholder="e.g. 7702778984"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-14 py-4 focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Category</label>
                <div className="relative">
                  <ClipboardList className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <select 
                    {...register('category', { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 focus:outline-none focus:border-gold transition-all appearance-none text-white"
                  >
                    <option value="" className="bg-dark">Choose Category</option>
                    {SERVICE_CATEGORIES.map(c => <option key={c.id} value={c.name} className="bg-dark">{c.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Service</label>
                <div className="relative">
                  <Sparkles className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <select 
                    {...register('service', { required: true })}
                    disabled={!currentCategory}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 focus:outline-none focus:border-gold transition-all appearance-none disabled:opacity-30 text-white"
                  >
                    <option value="" className="bg-dark">Choose Service</option>
                    {currentCategory?.services.map(s => <option key={s.name} value={s.name} className="bg-dark">{s.name}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Date</label>
                <input 
                  type="date"
                  {...register('date', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold text-white"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Time</label>
                <input 
                  type="time"
                  {...register('time', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold text-white"
                />
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <label className="text-[10px] uppercase font-black tracking-widest text-gold/60 ml-2">Payment</label>
                <div className="flex bg-white/5 rounded-xl md:rounded-2xl p-1 border border-white/10">
                  <button 
                    type="button" 
                    onClick={() => setValue('payment', 'Cash')}
                    className={cn(
                      "flex-1 py-3 rounded-lg md:rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedPayment === 'Cash' ? "bg-gold text-dark" : "text-white/40"
                    )}
                  >
                    Cash
                  </button>
                  <button 
                    type="button"
                    onClick={() => setValue('payment', 'UPI')}
                    className={cn(
                      "flex-1 py-3 rounded-lg md:rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                      selectedPayment === 'UPI' ? "bg-gold text-dark" : "text-white/40"
                    )}
                  >
                    UPI
                  </button>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 md:py-6 bg-gradient-gold text-dark font-black uppercase tracking-[0.2em] md:tracking-[0.4em] rounded-2xl md:rounded-[2rem] shadow-2xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base"
            >
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
