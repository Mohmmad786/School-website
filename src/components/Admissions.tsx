import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Admissions() {
  const steps = [
    {
      title: "Submit Application",
      description: "Fill out the online application form or visit the school office to collect a physical copy."
    },
    {
      title: "Entrance Interaction",
      description: "A brief interaction session for primary students, and an entrance test for higher grades."
    },
    {
      title: "Document Verification",
      description: "Submit previous academic records, birth certificate, and necessary ID proofs."
    },
    {
      title: "Fee Payment",
      description: "Secure the admission by paying the initial admission and term fees."
    }
  ];

  return (
    <section id="admissions" className="py-24 bg-blue-900 text-white relative overflow-hidden shadow-xl">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full flex items-center justify-center opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
         <div className="w-48 h-48 rounded-full bg-blue-400/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-500 text-[10px] font-bold uppercase py-1 px-3 rounded-full w-fit mb-4 tracking-wider inline-block">
              Admissions 2024
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Join the Iqra Family</h2>
            <p className="text-blue-100 text-sm mb-8 leading-relaxed max-w-lg">
              Admissions are currently open for the upcoming academic year. We seek students who are curious, motivated, and eager to make a positive impact in the world.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-blue-300" size={20} />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-blue-100 text-xs mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-slate-100 transition-all uppercase">
                Download Brochure
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-slate-900"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-900 border-b border-slate-100 pb-4">Admission Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Parent's Name</label>
                <input type="text" className="w-full px-4 py-2 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Email Address</label>
                <input type="email" className="w-full px-4 py-2 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1 uppercase">Student's Grade</label>
                <select className="w-full px-4 py-2 rounded border border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm">
                  <option>Select Grade</option>
                  <option>Pre-Primary</option>
                  <option>Grade 1 to 5</option>
                  <option>Grade 6 to 8</option>
                  <option>Grade 9 to 10</option>
                </select>
              </div>
              <button type="button" className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 text-sm uppercase">
                <FileText size={18} />
                <span>Submit Inquiry</span>
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Our admissions team will contact you within 24-48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
