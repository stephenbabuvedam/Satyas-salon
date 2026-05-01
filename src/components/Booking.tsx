import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { SERVICE_CATEGORIES, WHATSAPP_LINK } from '../constants';
import { MessageSquare, Calendar, User, Phone, ClipboardList } from 'lucide-react';

export default function Booking() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const selectedCategory = watch('category');

  const onSubmit = (data: any) => {
    // Construct WhatsApp message from form data
    const text = `Hi, I want to book a service:
    Name: ${data.name}
    Category: ${data.category}
    Service: ${data.service}
    Date: ${data.date}
    Time: ${data.time}
    Message: ${data.message || 'No additional message'}`;
    
    window.open(`https://wa.me/917702778984?text=${encodeURIComponent(text)}`, '_blank');
  };

  const currentCategoryData = SERVICE_CATEGORIES.find(c => c.name === selectedCategory);

  return (
    <section id="booking" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-4 font-montserrat">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium mb-8">Ready for a Transformation?</h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            Fill out the form below or jump straight to WhatsApp to secure your slot. 
            Our expert team is ready to redefine your look.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 glass rounded-2xl bg-white/5">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <MessageSquare />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Instant Response</h4>
                <p className="text-white/50 text-xs text-shorter">Bookings via WhatsApp are typically confirmed within 15 minutes.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl border-white/5 shadow-2xl relative z-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    {...register('name', { required: true })}
                    placeholder="Enter full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    {...register('phone', { required: true })}
                    placeholder="e.g. 7702778984"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Service Category</label>
              <div className="relative">
                <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <select 
                  {...register('category', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="" className="bg-dark text-white">Select a category</option>
                  {SERVICE_CATEGORIES.map(c => (
                    <option key={c.id} value={c.name} className="bg-dark text-white">{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Specific Service</label>
              <div className="relative">
                <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <select 
                  {...register('service', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                  disabled={!selectedCategory}
                >
                  <option value="" className="bg-dark text-white">Select service type</option>
                  {currentCategoryData?.services.map(s => (
                    <option key={s.name} value={s.name} className="bg-dark text-white">{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 text-shorter" />
                  <input 
                    type="date"
                    {...register('date', { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-2">Time Slot</label>
                <input 
                  type="time"
                  {...register('time', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark font-bold uppercase tracking-[0.2em] py-4 rounded-xl transition-all shadow-xl shadow-gold/10"
            >
              Request Appointment
            </button>
            <p className="text-[9px] text-center text-white/30 uppercase tracking-widest">
              By clicking, you will be redirected to WhatsApp to confirm.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Scissors(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><circle cx="6" cy="18" r="3" /><path d="M8.12 15.88 12 12" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" />
    </svg>
  );
}
