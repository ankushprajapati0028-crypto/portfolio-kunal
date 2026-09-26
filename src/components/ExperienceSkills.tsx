import React from 'react';

export const ExperienceSkills: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 lg:px-16 bg-[#0e0e0e] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#d4af37] text-xs uppercase tracking-widest">02 / EXPERTISE & WORK</span>
        <h2 className="text-3xl lg:text-5xl font-serif mt-3 mb-16">Professional Background</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="border-l border-[#d4af37] pl-6 space-y-6">
            <h3 className="text-2xl font-medium">Professional Experience</h3>
            <div className="space-y-6">
              <div className="bg-[#141414] p-6 border border-white/10">
                <span className="text-xs text-[#d4af37] tracking-widest uppercase">Operations</span>
                <h4 className="text-lg font-bold mt-1">CSC Operator & Assistant</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Handled customer support, managed government and private digital services, and ensured seamless digital record management.
                </p>
              </div>
              <div className="bg-[#141414] p-6 border border-white/10">
                <span className="text-xs text-[#d4af37] tracking-widest uppercase">Data Management</span>
                <h4 className="text-lg font-bold mt-1">Data Entry Operator</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Accurate database processing, digital document handling, and structured documentation workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Technical Stack & Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#141414] p-6 border border-white/10">
                <h5 className="font-bold text-[#d4af37] mb-2">Computer & Tech</h5>
                <p className="text-sm text-gray-300">Core Computer Science, Hardware & Software Troubleshooting</p>
              </div>
              <div className="bg-[#141414] p-6 border border-white/10">
                <h5 className="font-bold text-[#d4af37] mb-2">Customer Support</h5>
                <p className="text-sm text-gray-300">Client Communication, Problem Solving, Public Dealing</p>
              </div>
              <div className="bg-[#141414] p-6 border border-white/10 col-span-2">
                <h5 className="font-bold text-[#d4af37] mb-2">Office Productivity</h5>
                <p className="text-sm text-gray-300">MS Office Basics (Word, Excel, PowerPoint)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
