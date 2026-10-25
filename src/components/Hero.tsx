import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  const [logoError, setLogoError] = React.useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden bg-slate-50">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2b4c9b]/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl border-4 border-white/20 overflow-hidden">
            {!logoError ? (
              <img 
                src="/logo.svg" 
                alt="Iqra School Logo" 
                className="w-full h-full object-contain p-2"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-4xl font-extrabold text-blue-900">Iqra</span>
            )}
          </div>

          <span className="inline-block py-1 px-3 rounded-full bg-[#ea580c] text-white font-bold tracking-wider text-[10px] mb-6 uppercase">
            Welcome to
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            The Iqra English <br className="hidden md:block"/> Medium School
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering students with knowledge, character, and skills for the future in the heart of Chadotar, Palanpur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#about" className="px-6 py-2 rounded-lg bg-white text-[#2b4c9b] font-bold text-sm shadow-lg hover:bg-slate-100 transition-all w-full sm:w-auto uppercase">
              Discover More
            </a>
            <a href="#contact" className="px-6 py-2 rounded-lg bg-transparent border border-white/50 text-white font-semibold text-sm transition-all hover:bg-white/10 w-full sm:w-auto uppercase">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
