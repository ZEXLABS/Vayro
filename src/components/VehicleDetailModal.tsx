import React, { useState } from 'react';
import { X, Users, Gauge, Fuel, MapPin, Shield, Check, ArrowRight, Bookmark, AlertCircle, Sparkles } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestVehicle: (vehicle: Vehicle) => void;
  isSaved: boolean;
  onToggleSave: (vehicleId: string) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onRequestVehicle,
  isSaved,
  onToggleSave,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !vehicle) return null;

  const isAvailable = vehicle.availability === 'available';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#151A21] border border-white/10 rounded-sm shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F14]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
              {vehicle.category}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#C9A227]" />
              {vehicle.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(vehicle.id)}
              className={`p-2 rounded-sm text-xs transition-colors flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-[#C9A227] text-[#0B0F14]'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save to shortlist'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Shortlist'}</span>
            </button>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
              aria-label="Close vehicle modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-7 p-6 bg-[#0B0F14]/60 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              {/* Main Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-neutral-900 border border-white/10 mb-3">
                <img
                  src={vehicle.images[activeImageIndex] || vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3">
                  {isAvailable ? (
                    <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-sm backdrop-blur-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Verified Available
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2.5 py-1 rounded-sm backdrop-blur-sm flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Currently Unavailable
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails if multiple */}
              {vehicle.images.length > 1 && (
                <div className="flex items-center gap-2 mb-4">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-sm overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#C9A227] scale-105'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Asset Overview
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </div>

            {/* Standard Specifications Grid */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Passenger Seats</span>
                  <span className="text-white font-semibold">{vehicle.seats} Passengers</span>
                </div>
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Transmission</span>
                  <span className="text-white font-semibold">{vehicle.transmission}</span>
                </div>
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Fuel Type</span>
                  <span className="text-white font-semibold">{vehicle.fuel}</span>
                </div>
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Drivetrain</span>
                  <span className="text-white font-semibold">{vehicle.driveType || 'All-Wheel Drive'}</span>
                </div>
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Luggage Capacity</span>
                  <span className="text-white font-semibold">{vehicle.luggageCapacity || 'Standard Luggage'}</span>
                </div>
                <div className="bg-[#151A21] p-2.5 rounded-sm border border-white/5">
                  <span className="text-neutral-400 block text-[10px] uppercase">Engine Platform</span>
                  <span className="text-white font-semibold">{vehicle.specs?.engine || 'Manufacturer Tuned'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Service Options & Action */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-neutral-400 font-medium mb-1">
                {vehicle.brand}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {vehicle.name}
              </h3>

              {/* Pricing Box */}
              <div className="bg-[#0B0F14] border border-white/10 p-4 rounded-sm mb-6">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                  Daily Rental Rate
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-white tabular-nums tracking-tight">
                    ₦{vehicle.pricePerDay.toLocaleString()}
                  </span>
                  <span className="text-neutral-400 text-xs">/ day (tax incl.)</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-2 pt-2 border-t border-white/5">
                  Long-term leasing discounts available upon request.
                </div>
              </div>

              {/* Service Capabilities */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Service Modalities
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-[#0B0F14] rounded-sm border border-white/5">
                    <span className="text-neutral-300">Chauffeur Service</span>
                    <span className="text-[#C9A227] font-medium">Available on Request</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#0B0F14] rounded-sm border border-white/5">
                    <span className="text-neutral-300">Airport Meet & Greet</span>
                    <span className="text-neutral-300 font-medium">Supported</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#0B0F14] rounded-sm border border-white/5">
                    <span className="text-neutral-300">Corporate Billing</span>
                    <span className="text-neutral-300 font-medium">Invoicing Available</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#0B0F14] rounded-sm border border-white/5">
                    <span className="text-neutral-300">Convoy Integration</span>
                    <span className="text-neutral-300 font-medium">Lead or Principal Ready</span>
                  </div>
                </div>
              </div>

              {/* Included Features */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Key Amenities
                </h4>
                <div className="space-y-1.5 text-xs text-neutral-300">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onRequestVehicle(vehicle);
                }}
                className={`w-full py-3.5 px-4 rounded-sm font-semibold text-xs transition-all duration-150 flex items-center justify-center gap-2 shadow-lg ${
                  isAvailable
                    ? 'bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] active:scale-[0.98]'
                    : 'bg-white/10 text-neutral-400 hover:bg-white/15'
                }`}
              >
                <span>Request This Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center">
                Instant reservation reference issued · No credit card required upfront
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
