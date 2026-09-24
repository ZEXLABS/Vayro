import React from 'react';
import { Briefcase, Plane, Building2, CalendarDays, ShieldCheck, ArrowRight } from 'lucide-react';

interface CorporateSectionProps {
  onContactBusiness: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({
  onContactBusiness,
}) => {
  const corporateServices = [
    {
      icon: Plane,
      title: 'Airport Transfers & VIP Protocol',
      desc: 'Seamless air-to-ground synchronization with direct tarmac access and flight monitoring.',
    },
    {
      icon: Building2,
      title: 'Executive Board Travel',
      desc: 'Dedicated discrete luxury sedans and SUVs reserved for C-suite and visiting international partners.',
    },
    {
      icon: CalendarDays,
      title: 'Event & Summit Logistics',
      desc: 'Coordinated transportation networks for AGMs, investor days, international summits, and galas.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Fleet Leasing',
      desc: 'Structured long-term vehicle leasing with dedicated maintenance and continuous uptime management.',
    },
    {
      icon: ShieldCheck,
      title: 'Delegation Convoy Support',
      desc: 'Lead and escort vehicle configurations for visiting foreign dignitaries and critical delegations.',
    },
  ];

  return (
    <section id="corporate" className="py-24 bg-[#0B0F14] border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151A21] border border-white/10 rounded-sm p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Col */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-3">
                Enterprise & Diplomatic Accounts
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-5">
                Mobility Built for Business.
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                From sovereign wealth delegations to multinational corporations and private equity firms, VAYRO delivers single-point accountability for mission-critical transportation logistics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onContactBusiness}
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-6 py-3.5 rounded-sm transition-all shadow-md active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Talk to VAYRO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Corporate account managers available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Col: Service Matrix */}
            <div className="lg:col-span-6 space-y-4">
              {corporateServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#0B0F14] border border-white/5 hover:border-white/15 rounded-sm transition-colors flex items-start gap-4"
                  >
                    <div className="p-2.5 bg-white/5 rounded-sm text-[#C9A227] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white mb-1">
                        {service.title}
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
