import React from 'react';
import { ArrowRight, Instagram, Linkedin, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onExplore: () => void;
  onRequest: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExplore,
  onRequest,
  onNavigate,
}) => {
  return (
    <footer className="bg-[#0B0F14] text-white border-t border-white/10">
      {/* Large Pre-Footer CTA Section */}
      <div className="py-24 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#151A21] to-[#0B0F14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-4">
            <span>Mobility · Access · Protection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 text-balance">
            Wherever You're Going, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              Move With Confidence.
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you need and we'll help arrange the right mobility solution across executive sedans, armored convoys, chartered yachts, and corporate coaches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs py-3.5 px-8 rounded-sm transition-all shadow-lg active:scale-[0.98]"
            >
              <span>Explore Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequest}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs py-3.5 px-8 rounded-sm transition-all active:scale-[0.98]"
            >
              <span>Request a Vehicle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (Span 2 on large) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-display font-extrabold tracking-widest text-white flex items-center gap-1.5">
              <span>VAYRO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Premium Mobility. Without Limits.
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Coordinating executive ground transportation, bespoke corporate leasing, maritime yacht charters, and tactical security convoy movements across primary economic centers.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('fleet')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Cars & Sedans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fleet')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Luxury SUVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('yachts')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Yacht Charters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('buses')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Executive Buses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fleet')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Executive Vans
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('rentals')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Rentals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leasing')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Corporate Leasing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('executive')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Chauffeur Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Security Mobility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Convoy Formations
                </button>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  About VAYRO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('corporate')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Contact & Dispatch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('corporate')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Enterprise Accounts
                </button>
              </li>
              <li>
                <span className="text-neutral-400 cursor-default">
                  Terms of Carriage
                </span>
              </li>
              <li>
                <span className="text-neutral-400 cursor-default">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 VAYRO. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Lagos · Abuja · Port Harcourt</span>
            <span>·</span>
            <span>Mobility. Access. Protection.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
