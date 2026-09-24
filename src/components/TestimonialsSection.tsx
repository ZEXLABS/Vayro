import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DEMO } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-1">
              Sample Feedback · Demo Perspective
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              What Clients Could Say
            </h2>
          </div>
          <div className="text-xs text-neutral-400">
            Illustrative executive experiences across commercial and summit deployments.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DEMO.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151A21] border border-white/10 rounded-sm p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C9A227] opacity-60 mb-4" />
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="font-semibold text-white text-sm">{item.author}</div>
                <div className="text-xs text-neutral-400">{item.role}</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {item.organization} · {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
