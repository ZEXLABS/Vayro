import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose',
      description: 'Find the vehicle or service that matches your needs from our curated fleet of sedans, SUVs, yachts, and coaches.',
    },
    {
      step: '02',
      title: 'Request',
      description: 'Select your dates, location and requirements. Specify chauffeur, convoy coordination, or bespoke dispatch criteria.',
    },
    {
      step: '03',
      title: 'Move',
      description: 'Confirm your reservation, receive verified booking credentials, and execute your movement with absolute confidence.',
    },
  ];

  return (
    <section className="py-20 bg-[#0B0F14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-2">
            Seamless Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            A frictionless, direct mobility protocol engineered for immediate execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#151A21] border border-white/10 rounded-sm p-8 relative flex flex-col justify-between hover:border-white/20 transition-all duration-200"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#C9A227] block mb-4 tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                <span>Verified protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
