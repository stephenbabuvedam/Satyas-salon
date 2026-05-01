import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800", title: "The Modern Barber", category: "Barber" },
    { url: "https://images.unsplash.com/photo-1598300046647-5f77b997fe5b?auto=format&fit=crop&q=80&w=800", title: "Ink Mastery", category: "Tattoo Art" },
    { url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", title: "Bridal Suite", category: "Makeup" },
    { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800", title: "Studio Tools", category: "Studio" },
    { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800", title: "Organic Polish", category: "Skin Care" },
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", title: "Precision Cuts", category: "Grooming" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-4 font-montserrat">Craftsmanship</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium">Inspiration Gallery</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-gold text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{img.category}</span>
                <h4 className="text-xl font-display font-medium">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
