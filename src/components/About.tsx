import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-16 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#d4af37] text-xs uppercase tracking-widest">01 / BACKGROUND</span>
          <h2 className="text-3xl lg:text-5xl font-serif mt-3 mb-6">More than a student. Driven by purpose.</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            A dedicated and goal-oriented Computer Science Engineering student from Mind Power University. Eager to learn, solve real-world problems, and contribute effectively while building a solid technical foundation.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h4 className="text-[#d4af37] text-2xl font-bold">2026</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Intermediate (UP Board)</p>
            </div>
            <div>
              <h4 className="text-[#d4af37] text-2xl font-bold">CSE</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Diploma (Pursuing)</p>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] p-8 border border-white/10 rounded-lg">
          <h3 className="text-xl font-medium mb-6 border-b border-white/10 pb-4">Personal Credentials</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex justify-between">
              <span className="text-gray-500">Father's Name</span>
              <span className="font-medium text-white">Mr. Dharam Pal</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-500">Date of Birth</span>
              <span className="font-medium text-white">01 / JAN / 2006</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-500">Location</span>
              <span className="font-medium text-white">Bareilly (U.P.)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-500">Languages</span>
              <span className="font-medium text-white">Hindi, English</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
