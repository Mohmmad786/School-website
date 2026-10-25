/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col text-slate-900 scroll-smooth">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIChatbot />
    </div>
  );
}
