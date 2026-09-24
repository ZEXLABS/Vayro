import React from 'react';
import { ShieldCheck, ArrowRight, Radio, Compass, Users, CheckCircle } from 'lucide-react';
import { IMAGES, SECURITY_CONFIGURATIONS } from '../data/mockData';

interface SecurityMobilitySectionProps {
  onRequestSecurity: () => void;
  onOpenConvoyBuilder: () => void;
}

export const SecurityMobilitySection: React.FC<SecurityMobilitySectionProps> = ({
  onRequestSecurity,
  onOpenConvoyBuilder,
}) => {
  return (
    <section id="security" className="py-24 bg-[#0B0F14] border-b border-white/5 relative overflow-hidden">
      {/* Subtle background ambient highlight */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>Tactical Vehicle Coordination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-5">
            Protection Starts With Movement.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            VAYRO provides vehicle solutions for secure transportation, convoy movements, executive travel and coordinated security operations.
          </p>
        </div>

        {/* Featured Convoy Showcase Card */}
        <div className="bg-[#151A21] border border-white/10 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Cinematic Image Side */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[460px] overflow-hidden">
              <img
                src={IMAGES.convoy}
                alt="Executive Convoy Formation"
                className="w-full h-full object-cover brightness-95 contrast-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#151A21]" />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-xs text-neutral-300">
                <span>Synchronized Convoy Formation</span>
                <span className="mx-2 text-neutral-600">·</span>
                <span className="text-[#C9A227]">Lagos – Abuja Transit</span>
              </div>
            </div>

            {/* Content & Convoy Flow Side */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold block mb-2">
                  Tactical Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                  Your Movement. Coordinated.
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Request the vehicles you need. VAYRO coordinates the mobility setup around your movement.
                </p>

                {/* Convoy Visual Flow: Lead Vehicle -> Executive Vehicle -> Support Vehicle */}
                <div className="bg-[#0B0F14] border border-white/10 p-4 rounded-sm mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    Standard Formation Architecture
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    {/* Lead */}
                    <div className="flex-1 bg-[#151A21] p-2.5 rounded-sm border border-white/10 w-full">
                      <div className="text-[#C9A227] font-semibold mb-0.5">Lead Vehicle</div>
                      <div className="text-neutral-300 text-[11px]">Route clearance & scout</div>
                    </div>

                    <div className="hidden sm:block text-neutral-500 font-bold">→</div>

                    {/* Principal */}
                    <div className="flex-1 bg-[#151A21] p-2.5 rounded-sm border border-[#C9A227]/40 w-full">
                      <div className="text-white font-semibold mb-0.5 flex items-center justify-between">
                        <span>Executive Vehicle</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                      </div>
                      <div className="text-neutral-300 text-[11px]">Principal VIP carrier</div>
                    </div>

                    <div className="hidden sm:block text-neutral-500 font-bold">→</div>

                    {/* Support */}
                    <div className="flex-1 bg-[#151A21] p-2.5 rounded-sm border border-white/10 w-full">
                      <div className="text-neutral-300 font-semibold mb-0.5">Support Vehicle</div>
                      <div className="text-neutral-400 text-[11px]">Escort & luggage chase</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-neutral-400 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Synchronized inter-vehicle communications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Defensive-driving certified professional drivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Airport tarmac & terminal clearance coordination</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenConvoyBuilder}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs py-3 px-4 rounded-sm transition-all shadow-md focus:outline-none active:scale-[0.98]"
                >
                  <span>Build a Convoy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onRequestSecurity}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-medium text-white transition-colors focus:outline-none"
                >
                  <span>Request Security Mobility</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Security Configurations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_CONFIGURATIONS.map((config, index) => (
            <div
              key={config.title}
              className="bg-[#151A21] border border-white/10 rounded-sm p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider mb-2">
                  0{index + 1} · {config.tagline}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {config.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {config.description}
                </p>

                <div className="space-y-2 py-3 border-t border-white/5 text-[11px] text-neutral-400">
                  <div>
                    <span className="text-neutral-300 font-medium block">Fleet Selection:</span>
                    <span>{config.vehicles}</span>
                  </div>
                  <div>
                    <span className="text-neutral-300 font-medium block">Operations:</span>
                    <span>{config.personnel}</span>
                  </div>
                  <div>
                    <span className="text-neutral-300 font-medium block">Key Applications:</span>
                    <span>{config.useCases}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 mt-2">
                <button
                  onClick={onRequestSecurity}
                  className="w-full text-left inline-flex items-center justify-between text-xs font-medium text-[#C9A227] hover:text-[#D9B338] transition-colors group focus:outline-none"
                >
                  <span>Request Configuration</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Brand Transparency Note (strictly enforcing compliance) */}
        <div className="mt-8 p-4 bg-[#151A21]/50 border border-white/5 rounded-sm text-xs text-neutral-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-neutral-300">Mobility Scope Notice: </span>
            VAYRO provides vehicle assets, convoy mobility coordination, and defensive-mobility drivers. We do not provide armed private security or paramilitary guard services directly, but seamlessly integrate with your existing security detail or authorized institutional protection units.
          </div>
        </div>
      </div>
    </section>
  );
};
