import React from 'react';
import { ArrowRight, Shield, Compass, Calendar, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/mockData';

interface HeroProps {
  onExplore: () => void;
  onRequest: (service?: string) => void;
  onSelectServiceMode: (service: 'rental' | 'lease' | 'executive' | 'security') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onRequest,
  onSelectServiceMode,
}) => {
  const serviceSelectors: Array<{
    id: 'rental' | 'lease' | 'executive' | 'security';
    label: string;
  }> = [
    { id: 'rental', label: 'Rent' },
    { id: 'lease', label: 'Lease' },
    { id: 'executive', label: 'Executive' },
    { id: 'security', label: 'Security' },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0F14]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroCar}
          alt="VAYRO Executive Fleet Sedan at Dusk"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Gradients to guarantee 4.5:1 text contrast and smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/50 to-[#0B0F14]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/90 via-[#0B0F14]/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="max-w-3xl">
          {/* Brand Promise Subtitle kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-5">
            <span>Mobility</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
            <span>Access</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A227]"></span>
            <span>Protection</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-balance">
            Move With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              Confidence.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-9">
            Premium vehicles, executive transportation and security mobility — available when you need them.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-sm px-7 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-[#C9A227]/10 active:scale-[0.98] whitespace-nowrap group"
            >
              <span>Explore Vehicles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onRequest()}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-medium text-sm px-6 py-3.5 rounded-sm transition-all duration-200 backdrop-blur-sm active:scale-[0.98] whitespace-nowrap"
            >
              <span>Request a Vehicle</span>
            </button>
          </div>

          {/* Subtle Service Selector */}
          <div className="pt-6 border-t border-white/10 max-w-xl">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-3">
              Select a service to configure:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              {serviceSelectors.map((service, index) => (
                <React.Fragment key={service.id}>
                  <button
                    onClick={() => onSelectServiceMode(service.id)}
                    className="text-neutral-300 hover:text-white font-medium hover:underline underline-offset-4 decoration-[#C9A227] transition-colors py-1 focus:outline-none"
                  >
                    {service.label}
                  </button>
                  {index < serviceSelectors.length - 1 && (
                    <span className="text-neutral-600 select-none" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
