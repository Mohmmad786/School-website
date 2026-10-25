import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b4c9b] mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#ea580c] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            We welcome you to visit our campus or contact us for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#2b4c9b] mb-8 border-b border-slate-100 pb-4">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#1c5c2d]/10 text-[#1c5c2d] rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Address</h4>
                  <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                    NH-27, Chadotar, Palanpur,<br />
                    Gujarat - 385001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#1c5c2d]/10 text-[#1c5c2d] rounded-lg flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Phone</h4>
                  <p className="text-slate-600 mt-1 text-sm">+91 7778919327</p>
                  <p className="text-slate-600 text-sm">08487872326</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#1c5c2d]/10 text-[#1c5c2d] rounded-lg flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Email</h4>
                  <p className="text-slate-600 mt-1 text-sm">iqrachadotar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#1c5c2d]/10 text-[#1c5c2d] rounded-lg flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Office Hours</h4>
                  <p className="text-slate-600 mt-1 text-sm">Monday to Friday: 11:00am to 5:00pm</p>
                  <p className="text-slate-600 text-sm">Saturday: 08:00 to 11:00am</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 h-[500px]">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14660.15545281488!2d72.41724555!3d24.1685325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce6eb9798eebd%3A0xcb1b51b2a95c9a1d!2sChadotar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709734123456!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               className="rounded-lg"
               style={{ border: 0 }} 
               allowFullScreen={false} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="School Location Map"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
