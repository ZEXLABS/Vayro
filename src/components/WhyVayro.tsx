import React from 'react';
import { Shield, Sparkles, Clock, Compass } from 'lucide-react';

export const WhyVayro: React.FC = () => {
  const pillars = [
    {
      title: 'Curated Vehicles',
      tag: 'Pillar 01',
      description: 'Quality-focused vehicle selection. Every automobile, yacht, and coach in the VAYRO fleet is rigorously inspected, detailed, and maintained to manufacturer benchmark conditions.',
    },
    {
      title: 'Flexible Mobility',
      tag: 'Pillar 02',
      description: 'Rent, lease or request transportation based on your needs. From single-airport VIP arrivals to annual corporate fleet deployments without the friction of capital ownership.',
    },
    {
      title: 'Executive Service',
      tag: 'Pillar 03',
      description: 'Designed for professional and high-profile movements. Discreet chauffeurs trained in diplomatic etiquette, privacy preservation, and schedule punctuality.',
    },
    {
      title: 'Security Mobility',
      tag: 'Pillar 04',
      description: 'Vehicle solutions for coordinated and secure transportation requirements. Lead vehicles, convoy formation architecture, and synchronized transit management.',
    },
  ];

  return (
    <section className="py-24 bg-[#0B0F14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-2">
            The VAYRO Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            More Than a Rental.
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            We operate at the intersection of private aviation precision, corporate logistics, and discrete executive protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#151A21] border border-white/10 rounded-sm p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                <span className="text-xs text-[#C9A227] font-semibold tracking-wider uppercase block mb-3">
                  {pillar.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span>Verified Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
