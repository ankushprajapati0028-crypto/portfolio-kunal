import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-16 py-4 flex items-center justify-between ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="text-white font-bold tracking-widest text-xl">
        KUNAL <span className="text-[#d4af37]">PRAJAPATI</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300 tracking-wider">
        <a href="#about" className="hover:text-white transition">ABOUT</a>
        <a href="#experience" className="hover:text-white transition">EXPERIENCE</a>
        <a href="#skills" className="hover:text-white transition">SKILLS</a>
        <a href="#contact" className="hover:text-white transition">CONTACT</a>
      </div>
      <div>
        <a href="#contact" className="border border-white/20 px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition duration-300">
          Let's Connect
        </a>
      </div>
    </nav>
  );
};
