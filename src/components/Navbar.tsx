import React, { useState, useEffect } from 'react';
import { Menu, X, Bookmark, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
  onOpenSaved: () => void;
  savedCount: number;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSaved,
  savedCount,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Rentals', target: 'rentals' },
    { label: 'Leasing', target: 'leasing' },
    { label: 'Executive', target: 'executive' },
    { label: 'Security', target: 'security' },
    { label: 'Yachts', target: 'yachts' },
    { label: 'Buses', target: 'buses' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F14]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#0B0F14]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single clean wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-2xl font-display font-extrabold tracking-tight text-white hover:text-white/90 transition-colors flex items-center gap-1.5 focus:outline-none"
        >
          <span className="tracking-widest">VAYRO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] inline-block mb-1"></span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.target)}
              className="text-neutral-300 hover:text-white transition-colors py-1 relative group whitespace-nowrap focus:outline-none"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A227] transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('fleet')}
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors px-2 py-1.5 whitespace-nowrap"
          >
            Explore
          </button>
          
          <button
            onClick={() => handleLinkClick('corporate')}
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors px-2 py-1.5 whitespace-nowrap"
          >
            Contact
          </button>

          {/* Saved vehicles trigger */}
          <button
            onClick={onOpenSaved}
            className="relative p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Saved vehicles"
            aria-label="View saved vehicles"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A227] text-[#0B0F14] text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {savedCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-4 py-2.5 rounded-sm transition-all duration-150 shadow-sm hover:shadow-md whitespace-nowrap active:scale-[0.98]"
          >
            Request a Vehicle
          </button>
        </div>

        {/* Mobile menu and bookmark trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSaved}
            className="relative p-2 text-neutral-300 hover:text-white"
            aria-label="View saved vehicles"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute 0 top-0 right-0 w-4 h-4 bg-[#C9A227] text-[#0B0F14] text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F14] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.target)}
                className="text-left px-3 py-2.5 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 px-1 py-1">
              <span>Mobility · Access · Protection</span>
              <span className="flex items-center gap-1 text-[#C9A227]">
                <ShieldCheck className="w-3.5 h-3.5" /> Coordinated
              </span>
            </div>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#C9A227] text-[#0B0F14] font-semibold text-sm py-3 rounded-sm text-center shadow-md active:scale-[0.98]"
            >
              Request a Vehicle
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
