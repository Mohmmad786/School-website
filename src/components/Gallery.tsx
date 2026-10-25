import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Gallery() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' }
  ];

  const items = [
    { id: 1, category: 'campus', type: 'image', src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'events', type: 'image', src: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'sports', type: 'image', src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'campus', type: 'image', src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'events', type: 'image', src: 'https://images.unsplash.com/photo-1523580494112-071dcb851aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'sports', type: 'image', src: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Life at Iqra</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            A glimpse into the vibrant campus life, celebrations, and achievements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                filter === cat.id 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 cursor-pointer shadow-sm border border-slate-200"
            >
              <img 
                src={item.src} 
                alt="Gallery item" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="ml-1" size={24} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
