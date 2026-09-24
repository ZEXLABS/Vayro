import React from 'react';
import { ArrowRight, ShieldCheck, KeyRound, Briefcase, Car } from 'lucide-react';
import { IMAGES } from '../data/mockData';

interface ServiceCategoriesProps {
  onSelectCategory: (category: 'rentals' | 'leasing' | 'executive' | 'security') => void;
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="services" className="py-24 bg-[#0B0F14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-2">
              Capabilities & Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Mobility for Every Mission
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
            From single-day executive sedans to structured multi-year corporate fleets and synchronized convoy security operations.
          </p>
        </div>

        {/* 4 Major Service Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1. RENTALS (col-span-6) */}
          <div className="lg:col-span-6 bg-[#151A21] border border-white/10 rounded-sm overflow-hidden group flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="relative h-60 overflow-hidden">
              <img
                src={IMAGES.heroCar}
                alt="VAYRO Rentals Fleet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 text-xs font-semibold text-neutral-200 tracking-wider uppercase">
                01 · Rentals
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Cars, SUVs and premium vehicles
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Flexible vehicle rentals for personal travel, business trips and special occasions. Hand-selected fleet maintained to exacting standards.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  <span>Self-drive</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Chauffeur option</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Daily rate</span>
                </div>
                <button
                  onClick={() => onSelectCategory('rentals')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C9A227] hover:text-[#D9B338] transition-colors focus:outline-none group/btn"
                >
                  <span>Explore Rentals</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. LEASING (col-span-6) */}
          <div className="lg:col-span-6 bg-[#151A21] border border-white/10 rounded-sm overflow-hidden group flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="relative h-60 overflow-hidden">
              <img
                src={IMAGES.coach}
                alt="VAYRO Fleet Leasing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 text-xs font-semibold text-neutral-200 tracking-wider uppercase">
                02 · Leasing
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Vehicles for the long run
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Flexible vehicle leasing options for individuals, executives and businesses. Avoid capital lockup while retaining modern, pristine mobility assets.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  <span>3 to 24 months</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Maintenance managed</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Fleet replacement</span>
                </div>
                <button
                  onClick={() => onSelectCategory('leasing')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C9A227] hover:text-[#D9B338] transition-colors focus:outline-none group/btn"
                >
                  <span>Explore Leasing</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. EXECUTIVE (col-span-6) */}
          <div className="lg:col-span-6 bg-[#151A21] border border-white/10 rounded-sm overflow-hidden group flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-3">
                  03 · Executive
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Travel at another level
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Chauffeur-driven transportation for executives, corporate events, airport transfers and private movements. Vetted drivers with professional protocol.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  <span>Airport meet-and-greet</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Board meetings</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Discrete tinted privacy</span>
                </div>
                <button
                  onClick={() => onSelectCategory('executive')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C9A227] hover:text-[#D9B338] transition-colors focus:outline-none group/btn"
                >
                  <span>Book Executive</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. SECURITY (col-span-6) */}
          <div className="lg:col-span-6 bg-[#151A21] border border-[#C9A227]/30 rounded-sm overflow-hidden group flex flex-col justify-between hover:border-[#C9A227]/60 transition-all duration-300 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/5 rounded-bl-full pointer-events-none" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#C9A227] tracking-wider uppercase">
                    04 · Security Mobility
                  </span>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                    Tactical Transport Setup
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Mobility with protection in mind
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Vehicle solutions for secure transportation, convoy movements and high-profile travel requirements. Coordinated logistics without the typical friction.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  <span>Lead & support vehicles</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Coordinated comms</span>
                  <span className="mx-2 text-neutral-600">·</span>
                  <span>Defensive mobility</span>
                </div>
                <button
                  onClick={() => onSelectCategory('security')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C9A227] hover:text-[#D9B338] transition-colors focus:outline-none group/btn"
                >
                  <span>Explore Security</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
