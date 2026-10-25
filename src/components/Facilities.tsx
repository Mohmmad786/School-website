import React from 'react';
import { motion } from 'motion/react';

export function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Air-conditioned rooms equipped with digital boards and ergonomic seating."
    },
    {
      title: "Science Laboratories",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Well-equipped Physics, Chemistry, and Biology labs for hands-on learning."
    },
    {
      title: "Computer Lab",
      image: "https://images.unsplash.com/photo-1571260899304-425070114f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern computer lab with high-speed internet to foster technical skills."
    },
    {
      title: "Library",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Extensive collection of books, journals, and digital resources."
    },
    {
      title: "Sports Ground",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spacious playground for cricket, football, athletics, and physical education."
    },
    {
      title: "Transport",
      image: "https://images.unsplash.com/photo-1557223562-6c77ef161f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Safe and secure transport facility covering Palanpur and nearby areas."
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">World-Class Facilities</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide a conducive environment that supports academic learning and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
