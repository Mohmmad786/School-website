import React from 'react';
import { Target, Award, Building, Book, Monitor, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const facilities = [
    { name: "Classrooms", value: "11", icon: <Building size={20} className="text-blue-800" /> },
    { name: "Library Books", value: "150+", icon: <Book size={20} className="text-blue-800" /> },
    { name: "Computers", value: "10", icon: <Monitor size={20} className="text-blue-800" /> },
    { name: "Pass Result", value: "100%", sub: "2019-2026", icon: <Award size={20} className="text-blue-800" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b4c9b] mb-4">About IQRA English Medium School</h2>
          <div className="w-20 h-1 bg-[#ea580c] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            A Legacy of Excellence in Chadotar, Palanpur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Our History & Overview</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              IQRA School, Chadotar was established in 2006 and it is managed by the Pvt. Unaided. It is located in Rural area in PALANPUR block of BANAS KANTHA district of Gujarat. The school is Co-educational and offers a comprehensive educational journey for its students.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              English is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. The school is N/A in nature and is not using school building as a shift-school.
            </p>
            
            <div className="mt-6">
              <h4 className="font-bold text-slate-900 mb-3">Learning Grades</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2b4c9b]/10 text-[#2b4c9b] text-xs font-bold px-3 py-1.5 rounded-full border border-[#2b4c9b]/20">Nursery</span>
                <span className="bg-[#2b4c9b]/10 text-[#2b4c9b] text-xs font-bold px-3 py-1.5 rounded-full border border-[#2b4c9b]/20">LKG</span>
                <span className="bg-[#2b4c9b]/10 text-[#2b4c9b] text-xs font-bold px-3 py-1.5 rounded-full border border-[#2b4c9b]/20">UKG</span>
                <span className="bg-[#2b4c9b]/10 text-[#2b4c9b] text-xs font-bold px-3 py-1.5 rounded-full border border-[#2b4c9b]/20">Grades 1 to 10 (Primary & Secondary)</span>
              </div>
            </div>

            <div className="bg-[#1c5c2d]/5 p-6 rounded-xl border border-[#1c5c2d]/10 flex items-start gap-4">
              <Award size={32} className="text-[#1c5c2d] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#1c5c2d] text-lg">7 Years 100% Pass Result</h4>
                <p className="text-[#1c5c2d]/80 text-sm mt-1">Consistently achieving perfect pass rates from 2019 to 2026.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Infrastructure & Facilities</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              The school has a Private building. It has got 11 classrooms for instructional purposes, all in good condition. It has 2 other rooms for non-teaching activities and a separate room for the Head master/Teacher. The school has a Pucca boundary wall and electric connection.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              The source of Drinking Water is Tap Water and it is functional. The school has 1 boys toilet and 1 girls toilet, both functional. We have a playground, a library with 150 books, and 10 computers for teaching and learning purposes in a computer-aided learning lab.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-md">
                    {fac.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-none">{fac.value}</div>
                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">{fac.name}</div>
                    {fac.sub && <div className="text-[10px] text-slate-400 mt-0.5">{fac.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
