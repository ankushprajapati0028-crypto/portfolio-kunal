import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero3DViewer: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    const img = imageRef.current;

    if (el && img) {
      gsap.to(img, {
        scale: 1.05,
        rotationY: 15,
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 lg:p-16 pointer-events-none">
        <div className="max-w-xl">
          <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-2">Computer Science Engineering Student</p>
          <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
            CREATIVE DEVELOPER & TECHNOLOGIST
          </h1>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-gray-400 text-sm max-w-sm pointer-events-auto">
            Based in Bareilly, U.P. Focused on building robust software solutions, customer support systems, and modern digital applications.
          </p>
          <div className="hidden lg:block text-xs uppercase tracking-widest text-gray-500 animate-bounce">
            Scroll to Explore ↓
          </div>
        </div>
      </div>

      <div className="relative z-0 h-[75vh] w-[85vw] lg:w-[35vw] flex items-center justify-center">
        <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
          alt="Kunal Prajapati"
          className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-700 shadow-2xl rounded-md"
        />
      </div>
    </div>
  );
};
