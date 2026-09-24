import React from 'react';
import { Anchor, Users, Compass, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { MOCK_YACHTS, IMAGES } from '../data/mockData';
import { Vehicle } from '../types';

interface YachtSectionProps {
  onViewYacht: (yacht: Vehicle) => void;
  onRequestYacht: (yacht: Vehicle) => void;
}

export const YachtSection: React.FC<YachtSectionProps> = ({
  onViewYacht,
  onRequestYacht,
}) => {
  return (
    <section id="yachts" className="py-24 bg-[#0B0F14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold mb-2">
              <Anchor className="w-4 h-4 text-[#C9A227]" />
              <span>Marine & Maritime Mobility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Beyond the Road.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 max-w-xl leading-relaxed">
              Private yacht experiences for leisure, events, celebrations and executive occasions across Lagos waterways and coastal waters.
            </p>
          </div>

          <div className="text-xs text-neutral-400 border border-white/10 p-3 rounded-sm bg-[#151A21] max-w-xs">
            <span className="text-[#C9A227] font-semibold block mb-0.5">Maritime Advisory:</span>
            All charters include licensed Master Captain, professional crew, safety life-gear, and marine fuel.
          </div>
        </div>

        {/* Yacht Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MOCK_YACHTS.map((yacht) => (
            <div
              key={yacht.id}
              className="bg-[#151A21] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-xl"
            >
              {/* Yacht Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={yacht.images[0]}
                  alt={yacht.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-xs text-white">
                  <span>{yacht.location}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-xs text-[#C9A227] font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Up to {yacht.seats} Guests</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                      {yacht.model}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      Captain & Crew Included
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                    {yacht.name}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {yacht.description}
                  </p>

                  {/* Amenities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {yacht.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                      Charter Pricing
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-white tabular-nums tracking-tight">
                        From ₦{yacht.pricePerDay.toLocaleString()}
                      </span>
                      <span className="text-neutral-400 text-xs ml-1">/ day</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onViewYacht(yacht)}
                      className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-medium text-white transition-colors focus:outline-none"
                    >
                      View Yacht
                    </button>
                    <button
                      onClick={() => onRequestYacht(yacht)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs rounded-sm transition-all shadow-md active:scale-[0.98]"
                    >
                      <span>Request Charter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
