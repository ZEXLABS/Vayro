import React from 'react';
import { Users, Bus, ArrowRight, Eye, Wifi, Shield, Coffee } from 'lucide-react';
import { MOCK_BUSES, IMAGES } from '../data/mockData';
import { Vehicle } from '../types';

interface BusSectionProps {
  onViewBus: (bus: Vehicle) => void;
  onRequestBus: (bus: Vehicle) => void;
}

export const BusSection: React.FC<BusSectionProps> = ({
  onViewBus,
  onRequestBus,
}) => {
  return (
    <section id="buses" className="py-24 bg-[#0B0F14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold mb-2">
              <Bus className="w-4 h-4 text-[#C9A227]" />
              <span>Group & Delegation Transport</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Move More People.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 max-w-xl leading-relaxed">
              Executive buses, corporate coaches, event transportation, and group transportation with uncompromising comfort and logistics precision.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400 border border-white/10 p-4 rounded-sm bg-[#151A21]">
            <div>
              <span className="text-white font-semibold block">Corporate Events</span>
              <span>AGMs, summits & retreats</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-white font-semibold block">Full Coordination</span>
              <span>Luggage bays & route clearance</span>
            </div>
          </div>
        </div>

        {/* Bus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_BUSES.map((bus) => (
            <div
              key={bus.id}
              className="bg-[#151A21] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={bus.images[0]}
                  alt={bus.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 text-xs text-white">
                  <span>{bus.location}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 text-xs text-[#C9A227] font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>{bus.seats} Seats</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-neutral-400 font-medium mb-1">
                    {bus.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                    {bus.name}
                  </h3>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {bus.description}
                  </p>

                  <div className="space-y-1.5 mb-4 py-2 border-y border-white/5">
                    {bus.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                        Charter Rate
                      </span>
                      <span className="text-xl font-semibold text-white tabular-nums tracking-tight">
                        ₦{bus.pricePerDay.toLocaleString()}
                      </span>
                      <span className="text-neutral-400 text-xs ml-1">/ day</span>
                    </div>
                    <span className="text-xs text-neutral-400">Driver included</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={() => onViewBus(bus)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-medium text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    <button
                      onClick={() => onRequestBus(bus)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-3 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs rounded-sm transition-all shadow-sm active:scale-[0.98]"
                    >
                      <span>Request</span>
                      <ArrowRight className="w-3 h-3" />
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
