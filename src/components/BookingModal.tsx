import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Copy, Check, Shield, Calendar, MapPin, Phone, Mail, User, Car } from 'lucide-react';
import { ServiceType, Vehicle } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: Vehicle | null;
  initialService?: ServiceType;
  onSubmitSuccess?: (ref: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedVehicle,
  initialService = 'rental',
  onSubmitSuccess,
}) => {
  const [serviceType, setServiceType] = useState<ServiceType>(initialService);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState(selectedVehicle?.location || 'Lagos');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('2026-10-01');
  const [endDate, setEndDate] = useState('2026-10-04');
  const [passengers, setPassengers] = useState('1-2');
  const [vehicleCount, setVehicleCount] = useState('1');
  const [chauffeurRequired, setChauffeurRequired] = useState(true);
  const [requirements, setRequirements] = useState('');

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      if (selectedVehicle.vehicleType === 'yacht') {
        setServiceType('yacht');
      } else if (selectedVehicle.vehicleType === 'bus') {
        setServiceType('bus');
      } else {
        setServiceType('rental');
      }
      setPickupLocation(selectedVehicle.location);
    } else if (initialService) {
      setServiceType(initialService);
    }
  }, [selectedVehicle, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = `VYR-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(reference);
    if (onSubmitSuccess) {
      onSubmitSuccess(reference);
    }
  };

  const handleCopy = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#151A21] border border-white/10 rounded-sm shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F14]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
            <h3 className="text-lg font-display font-bold text-white">
              Request Your Vehicle
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRef ? (
          /* Confirmation State */
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center mx-auto mb-5 border border-[#C9A227]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold mb-1">
              Request Received
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-2">
              Your Request Has Been Received
            </h4>
            <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
              Our mobility operations team is reviewing vehicle allocation and chauffeur scheduling. You will receive an official confirmation shortly.
            </p>

            {/* Reference Box */}
            <div className="bg-[#0B0F14] border border-white/10 p-5 rounded-sm max-w-sm mx-auto mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block tracking-wider">
                  Reference Code
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

            {/* Summary */}
            <div className="bg-white/5 p-4 rounded-sm max-w-md mx-auto text-left text-xs text-neutral-300 space-y-1 mb-8">
              <div><strong className="text-neutral-400">Client:</strong> {fullName} ({phone})</div>
              <div><strong className="text-neutral-400">Service:</strong> {serviceType.toUpperCase()} {selectedVehicle ? `— ${selectedVehicle.name}` : ''}</div>
              <div><strong className="text-neutral-400">Pickup:</strong> {pickupLocation}</div>
              <div><strong className="text-neutral-400">Dates:</strong> {startDate} to {endDate}</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-8 py-3 rounded-sm transition-colors"
            >
              Close & Return
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Selected Vehicle Banner if applicable */}
            {selectedVehicle ? (
              <div className="bg-[#0B0F14] border border-white/10 p-3 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedVehicle.images[0]}
                    alt={selectedVehicle.name}
                    className="w-12 h-9 object-cover rounded-sm"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {selectedVehicle.name}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {selectedVehicle.category} · {selectedVehicle.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#C9A227] tabular-nums">
                  ₦{selectedVehicle.pricePerDay.toLocaleString()} / day
                </span>
              </div>
            ) : (
              /* Service Selector if vehicle not pre-selected */
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Select Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'rental', label: 'Rental' },
                    { id: 'lease', label: 'Lease' },
                    { id: 'executive', label: 'Executive' },
                    { id: 'security', label: 'Security' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id as any)}
                      className={`py-2 text-xs font-medium rounded-sm border transition-colors ${
                        serviceType === s.id
                          ? 'bg-[#C9A227] text-[#0B0F14] border-[#C9A227] font-semibold'
                          : 'bg-[#0B0F14] text-neutral-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adebayo Adeleke"
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Lagos MM Airport / Hotel"
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Destination / Route
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Victoria Island / Abuja Central"
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  End Date
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white pl-8 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Specific Security / Convoy Fields */}
            {serviceType === 'security' && (
              <div className="p-3.5 bg-[#0B0F14] border border-[#C9A227]/30 rounded-sm space-y-3">
                <div className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
                  Security Mobility Parameters
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">
                      Convoy Vehicle Count
                    </label>
                    <select
                      value={vehicleCount}
                      onChange={(e) => setVehicleCount(e.target.value)}
                      className="w-full bg-[#151A21] border border-white/10 rounded-sm text-xs text-white p-2 focus:outline-none"
                    >
                      <option value="1">1 Principal Security Vehicle</option>
                      <option value="2">2 Vehicles (Tandem Convoy)</option>
                      <option value="3">3 Vehicles (Lead + Principal + Escort)</option>
                      <option value="4+">4+ Full Delegation Formation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">
                      Passenger / Principal Count
                    </label>
                    <input
                      type="text"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      placeholder="e.g. 1 VIP + 2 Aides"
                      className="w-full bg-[#151A21] border border-white/10 rounded-sm text-xs text-white p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Requirements & Chauffeur Option */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Additional Directives or Specific Requests
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="e.g. Chauffeur required with English / French fluency, flight number arrival LOS BA075, child safety seat..."
                rows={2}
                className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-xs text-white p-2.5 focus:border-[#C9A227] focus:outline-none placeholder:text-neutral-600"
              />
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">
                Demo booking confirmation · Direct dispatcher review
              </span>
              <button
                type="submit"
                className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-xs px-6 py-2.5 rounded-sm transition-all shadow-md active:scale-[0.98]"
              >
                Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
