import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 px-6 lg:px-16 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#d4af37] text-xs uppercase tracking-widest">03 / GET IN TOUCH</span>
        <h2 className="text-4xl lg:text-6xl font-serif mt-3 mb-6">Have an opportunity? Let's connect.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Whether you're looking for a dedicated developer, technical assistant, or collaboration on a new digital product.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <a href="mailto:prajapatikunal942@gmail.com" className="border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            prajapatikunal942@gmail.com
          </a>
          <a href="tel:+917454066704" className="border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            +91 7454066704
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Kunal Prajapati. All rights reserved.</p>
          <p>Built with precision & code in Bareilly, U.P.</p>
        </div>
      </div>
    </section>
  );
};
