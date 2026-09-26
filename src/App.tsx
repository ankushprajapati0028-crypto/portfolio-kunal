import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DViewer } from './components/Hero3DViewer';
import { About } from './components/About';
import { ExperienceSkills } from './components/ExperienceSkills';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <Hero3DViewer />
      <About />
      <ExperienceSkills />
      <Contact />
    </div>
  );
}

export default App;
