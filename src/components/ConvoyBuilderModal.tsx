import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Copy, Check, Car, MapPin, Calendar, Clock, Users } from 'lucide-react';

interface ConvoyBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (refNumber: string) => void;
}

export const ConvoyBuilderModal: React.FC<ConvoyBuilderModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [vehicleCount, setVehicleCount] = useState<number>(3);
  const [formationType, setFormationType] = useState('Lead SUV + Principal S-Class + Rear Support SUV');
  const [location, setLocation] = useState('Lagos (Airport to Victoria Island)');
  const [date, setDate] = useState('2026-10-05');
  const [duration, setDuration] = useState('2 Days');
  const [principalVehicle, setPrincipalVehicle] = useState('Mercedes-Benz S-Class');
  const [escortVehicles, setEscortVehicles] = useState('Toyota Land Cruiser 300 (x2)');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `VYR-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(randomRef);
    onSubmitSuccess(randomRef);
  };

  const handleCopy = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#151A21] border border-white/10 rounded-sm shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F14]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
            <h3 className="text-lg font-display font-bold text-white">
              Build a Convoy Formation
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submittedRef ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center mx-auto mb-5 border border-[#C9A227]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold mb-1">
              Request Received
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-2">
              Convoy Movement Initiated
            </h4>
            <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
              Your convoy mobility dispatch profile has been compiled. Our operations supervisor will verify route clearance and contact you within 60 minutes.
            </p>

            {/* Reference Card */}
            <div className="bg-[#0B0F14] border border-white/10 p-5 rounded-sm max-w-sm mx-auto mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block tracking-wider">
                  Booking Reference
                </span>
                <span className="text-xl font-mono font-bold text-white tabular-nums tracking-wider">
                  {submittedRef}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-[#C9A227] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-sm border border-white/10 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-white/5 p-4 rounded-sm max-w-md mx-auto text-left text-xs text-neutral-300 space-y-1 mb-8">
              <div><strong className="text-neutral-400">Formation:</strong> {vehicleCount} Vehicles ({formationType})</div>
              <div><strong className="text-neutral-400">Operation Location:</strong> {location}</div>
              <div><strong className="text-neutral-400">Date & Duration:</strong> {date} ({duration})</div>
            </div>

            <button
              onClick={resetAndClose}
              className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-8 py-3 rounded-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Visual Formation Preview Bar */}
            <div className="bg-[#0B0F14] border border-white/10 p-3.5 rounded-sm">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-2 font-medium">
                Live Formation Architecture: {vehicleCount} Vehicles
              </span>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                <span className="text-xs bg-[#151A21] border border-white/10 px-3 py-1.5 rounded-sm text-neutral-300">
                  1. Lead Escort SUV
                </span>
                <span className="text-neutral-500 text-xs">→</span>
                <span className="text-xs bg-[#151A21] border border-[#C9A227]/40 px-3 py-1.5 rounded-sm text-white font-medium">
                  2. Principal Executive ({principalVehicle})
                </span>
                {vehicleCount >= 3 && (
                  <>
                    <span className="text-neutral-500 text-xs">→</span>
                    <span className="text-xs bg-[#151A21] border border-white/10 px-3 py-1.5 rounded-sm text-neutral-300">
                      3. Support Chase SUV
                    </span>
                  </>
                )}
                {vehicleCount >= 4 && (
                  <>
                    <span className="text-neutral-500 text-xs">→</span>
                    <span className="text-xs bg-[#151A21] border border-white/10 px-3 py-1.5 rounded-sm text-neutral-300">
                      4. Rear Guard / Luggage Van
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Vehicle Count & Formation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Number of Vehicles
                </label>
                <div className="flex items-center gap-2">
                  {[2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setVehicleCount(count)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                        vehicleCount === count
                          ? 'bg-[#C9A227] text-[#0B0F14] border-[#C9A227]'
                          : 'bg-[#0B0F14] text-neutral-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {count} Vehicles
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Principal Executive Vehicle
                </label>
                <select
                  value={principalVehicle}
                  onChange={(e) => setPrincipalVehicle(e.target.value)}
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                >
                  <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class (Sedan)</option>
                  <option value="Toyota Land Cruiser 300">Toyota Land Cruiser 300 (SUV)</option>
                  <option value="Range Rover Autobiography">Range Rover Autobiography (SUV)</option>
                  <option value="Mercedes-Benz V-Class">Mercedes-Benz V-Class (Van)</option>
                </select>
              </div>
            </div>

            {/* Location & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Location / Route
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lagos MM Airport to VI"
                  required
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Movement Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Operation Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                >
                  <option value="Single Transit">Single Transit / Half Day</option>
                  <option value="Full Day (12h)">Full Day (12h Standby)</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3-5 Days">3–5 Days Multi-Day</option>
                  <option value="Weekly (7 Days)">Weekly (7 Days)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-2 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Full Name / Office
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Chief Protocol Officer"
                  required
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Official Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Direct Phone Number
                </label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+234 800 000 0000"
                  required
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none"
                />
              </div>
            </div>

            {/* Additional requirements */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                Special Directives / Requirements
              </label>
              <textarea
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="e.g. Dedicated luggage chase vehicle required, airport tarmac meet protocol, inter-city speed limit requirement..."
                rows={2}
                className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none placeholder:text-neutral-600"
              />
            </div>

            {/* Submit */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">
                Coordinated mobility dispatch · Instant reference issuance
              </span>
              <button
                type="submit"
                className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-6 py-2.5 rounded-sm transition-all shadow-md active:scale-[0.98]"
              >
                Submit Convoy Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
