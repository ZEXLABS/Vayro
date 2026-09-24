import React from 'react';
import { Check, ArrowRight, ShieldCheck, Wrench, RefreshCw, Layers } from 'lucide-react';

interface LeasingSectionProps {
  onOpenLeasingInquiry: (planTitle: string) => void;
}

export const LeasingSection: React.FC<LeasingSectionProps> = ({
  onOpenLeasingInquiry,
}) => {
  const leaseTiers = [
    {
      title: 'Short-Term Lease',
      subtitle: 'Flexible periods for dynamic requirements',
      term: '1 to 6 Months',
      bestFor: 'Visiting expatriates, temporary projects, interim executive appointments',
      benefits: [
        'No long-term capital lockup',
        'Zero depreciation exposure',
        'Full manufacturer warranty maintenance included',
        'Direct vehicle swap options',
        'Dedicated 24/7 client liaison'
      ]
    },
    {
      title: 'Long-Term Lease',
      subtitle: 'Extended vehicle access with complete peace of mind',
      term: '12 to 24 Months',
      bestFor: 'Resident executives, diplomatic personnel, and private principals',
      popular: true,
      benefits: [
        'Custom vehicle specification & color choice',
        'Scheduled routine servicing and tire replacements',
        'Comprehensive motor insurance coverage included',
        'Chauffeur service addition optional',
        'Discreet security vehicle upgrade capability'
      ]
    },
    {
      title: 'Corporate Fleet',
      subtitle: 'Dedicated fleet architecture for organizations',
      term: 'Custom Multi-Vehicle Agreement',
      bestFor: 'Multinational corporations, financial institutions, and government liaisons',
      benefits: [
        'Fleet synergy (Sedans, SUVs, and Executive Vans)',
        'Unified monthly operational invoicing',
        'Dedicated standby replacement vehicles on call',
        'Trained professional chauffeurs on payroll',
        'Fleet management telemetry & protocol dispatch'
      ]
    }
  ];

  return (
    <section id="leasing" className="py-24 bg-[#0B0F14] border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-2">
              Capital-Efficient Fleet Access
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Drive Longer. Commit Smarter.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 max-w-xl leading-relaxed">
              VAYRO provides bespoke vehicle leasing solutions for businesses, executives, and organizations looking for premium automotive assets without administrative strain.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400 border border-white/10 p-4 rounded-sm bg-[#151A21]">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#C9A227]" />
              <span>Full Maintenance</span>
            </div>
            <span className="text-neutral-600">·</span>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#C9A227]" />
              <span>Immediate Replacement</span>
            </div>
          </div>
        </div>

        {/* 3 Lease Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaseTiers.map((tier) => (
            <div
              key={tier.title}
              className={`bg-[#151A21] rounded-sm p-8 flex flex-col justify-between transition-all duration-200 relative ${
                tier.popular
                  ? 'border-2 border-[#C9A227] shadow-xl shadow-[#C9A227]/5'
                  : 'border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 right-6 bg-[#C9A227] text-[#0B0F14] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-sm">
                  Most Requested
                </div>
              )}

              <div>
                <div className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider mb-2">
                  {tier.term}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {tier.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  {tier.subtitle}
                </p>

                <div className="bg-[#0B0F14] border border-white/10 p-3 rounded-sm mb-6 text-xs text-neutral-300">
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Ideal For:</span>
                  <span>{tier.bestFor}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenLeasingInquiry(tier.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm text-xs font-semibold transition-all duration-150 focus:outline-none ${
                    tier.popular
                      ? 'bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] shadow-md'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  <span>Explore Leasing Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
