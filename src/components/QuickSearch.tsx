import React, { useState } from 'react';
import { Calendar, MapPin, Users, Shield, Car, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceType } from '../types';

interface QuickSearchProps {
  activeTab: 'rental' | 'lease' | 'executive' | 'security';
  onTabChange: (tab: 'rental' | 'lease' | 'executive' | 'security') => void;
  onSubmitSearch: (params: {
    service: 'rental' | 'lease' | 'executive' | 'security';
    location: string;
    vehicleType?: string;
    date?: string;
    endDate?: string;
    passengers?: number;
    duration?: string;
    requirements?: string;
  }) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  activeTab,
  onTabChange,
  onSubmitSearch,
}) => {
  // Rental fields
  const [rentLocation, setRentLocation] = useState('Lagos');
  const [rentType, setRentType] = useState('all');
  const [rentPickupDate, setRentPickupDate] = useState('2026-10-01');
  const [rentReturnDate, setRentReturnDate] = useState('2026-10-04');

  // Executive fields
  const [execPickup, setExecPickup] = useState('Murtala Muhammed International Airport (LOS)');
  const [execDestination, setExecDestination] = useState('Victoria Island / Ikoyi');
  const [execDate, setExecDate] = useState('2026-10-01');
  const [execPassengers, setExecPassengers] = useState('2');

  // Security fields
  const [secLocation, setSecLocation] = useState('Abuja (FCT)');
  const [secDate, setSecDate] = useState('2026-10-05');
  const [secDuration, setSecDuration] = useState('3 Days');
  const [secRequirement, setSecRequirement] = useState('Lead & Escort Convoy (2-3 Vehicles)');

  // Lease fields
  const [leaseLocation, setLeaseLocation] = useState('Lagos');
  const [leaseDuration, setLeaseDuration] = useState('6 Months');
  const [leaseCategory, setLeaseCategory] = useState('Luxury SUVs (e.g. Land Cruiser 300)');
  const [leaseType, setLeaseType] = useState('Corporate Fleet');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'rental') {
      onSubmitSearch({
        service: 'rental',
        location: rentLocation,
        vehicleType: rentType,
        date: rentPickupDate,
        endDate: rentReturnDate,
      });
    } else if (activeTab === 'executive') {
      onSubmitSearch({
        service: 'executive',
        location: execPickup,
        requirements: `Destination: ${execDestination}`,
        date: execDate,
        passengers: parseInt(execPassengers, 10),
      });
    } else if (activeTab === 'security') {
      onSubmitSearch({
        service: 'security',
        location: secLocation,
        date: secDate,
        duration: secDuration,
        requirements: secRequirement,
      });
    } else {
      onSubmitSearch({
        service: 'lease',
        location: leaseLocation,
        duration: leaseDuration,
        requirements: `${leaseType} - ${leaseCategory}`,
      });
    }
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#151A21] border border-white/10 rounded-sm shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Module Header & Mode Tabs */}
        <div className="border-b border-white/10 px-5 pt-5 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#C9A227] font-semibold">
                Dispatch & Booking Engine
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                What do you need?
              </h2>
            </div>
            <div className="text-xs text-neutral-400">
              Direct allocation · Verified chauffeurs · Rapid deployment
            </div>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'rental', label: 'Rent a Vehicle' },
              { id: 'lease', label: 'Lease a Vehicle' },
              { id: 'executive', label: 'Book Executive Transport' },
              { id: 'security', label: 'Request Security Mobility' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-150 rounded-sm whitespace-nowrap focus:outline-none ${
                    isActive
                      ? 'bg-[#C9A227] text-[#0B0F14] font-semibold shadow-sm'
                      : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Fields Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          {activeTab === 'rental' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={rentLocation}
                    onChange={(e) => setRentLocation(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Lagos">Lagos (Ikoyi, VI, Lekki, Ikeja)</option>
                    <option value="Abuja">Abuja (Central, Maitama, Airport)</option>
                    <option value="Port Harcourt">Port Harcourt (GRA, Airport)</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Vehicle Type
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={rentType}
                    onChange={(e) => setRentType(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="all">All Available Categories</option>
                    <option value="executive_sedan">Executive Sedans (S-Class, 7-Series)</option>
                    <option value="luxury_suv">Luxury SUVs (Land Cruiser 300, Range Rover)</option>
                    <option value="executive_van">Executive Vans (V-Class)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={rentPickupDate}
                    onChange={(e) => setRentPickupDate(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={rentReturnDate}
                    onChange={(e) => setRentReturnDate(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'executive' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={execPickup}
                    onChange={(e) => setExecPickup(e.target.value)}
                    placeholder="e.g. Lagos MM2 Airport or Hotel"
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Destination / Itinerary
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={execDestination}
                    onChange={(e) => setExecDestination(e.target.value)}
                    placeholder="e.g. Victoria Island / Eko Atlantic"
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Movement Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={execDate}
                    onChange={(e) => setExecDate(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={execPassengers}
                    onChange={(e) => setExecPassengers(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="1">1 Principal Guest</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4-6 Delegation (Executive Van)</option>
                    <option value="7">7+ Group Delegation</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Operation Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={secLocation}
                    onChange={(e) => setSecLocation(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Abuja (FCT)">Abuja (FCT & Inter-State)</option>
                    <option value="Lagos State">Lagos State (Metropolis & Island)</option>
                    <option value="Port Harcourt">Port Harcourt & Niger Delta Corridor</option>
                    <option value="Inter-State Corridor">Inter-State Transit Corridor</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Deployment Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={secDate}
                    onChange={(e) => setSecDate(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Duration
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={secDuration}
                    onChange={(e) => setSecDuration(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Single Day / Transfer">Single Day / Direct Transit</option>
                    <option value="2-3 Days">2–3 Days Operation</option>
                    <option value="1 Week">1 Week Continuous Operation</option>
                    <option value="Extended Movement">Extended Operation (10+ Days)</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Requirement */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Vehicle Requirement
                </label>
                <div className="relative">
                  <Shield className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={secRequirement}
                    onChange={(e) => setSecRequirement(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Executive Security (1 SUV/Sedan)">Executive Security (1 SUV/Sedan)</option>
                    <option value="Tandem Pair (2 SUVs)">Tandem Movement (2 Luxury SUVs)</option>
                    <option value="Lead & Escort Convoy (3 Vehicles)">Lead & Escort Convoy (3 Vehicles)</option>
                    <option value="Full Convoy Formation (4+ Vehicles)">Full Convoy Formation (4+ Vehicles)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lease' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Base Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={leaseLocation}
                    onChange={(e) => setLeaseLocation(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Lagos">Lagos State</option>
                    <option value="Abuja">Abuja (Federal Capital)</option>
                    <option value="Nationwide">Multi-State Fleet</option>
                  </select>
                </div>
              </div>

              {/* Lease Term */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Leasing Period
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={leaseDuration}
                    onChange={(e) => setLeaseDuration(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="3 Months">Short-Term (3 Months)</option>
                    <option value="6 Months">Medium-Term (6 Months)</option>
                    <option value="12 Months">Annual Lease (12 Months)</option>
                    <option value="24+ Months">Long-Term (24+ Months)</option>
                  </select>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Vehicle Category
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={leaseCategory}
                    onChange={(e) => setLeaseCategory(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Luxury SUVs (LC300, Range Rover)">Luxury SUVs (LC300, Range Rover)</option>
                    <option value="Executive Sedans (S-Class, BMW 7)">Executive Sedans (S-Class, BMW 7)</option>
                    <option value="Corporate Vans (V-Class / Sprinter)">Corporate Vans (V-Class / Sprinter)</option>
                    <option value="Mixed Corporate Fleet">Mixed Corporate Fleet</option>
                  </select>
                </div>
              </div>

              {/* Lease Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                  Lease Structure
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={leaseType}
                    onChange={(e) => setLeaseType(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-white/10 rounded-sm text-sm text-white pl-9 pr-3 py-2.5 focus:border-[#C9A227] focus:outline-none transition-colors"
                  >
                    <option value="Corporate Fleet">Corporate Fleet (Dedicated Fleet)</option>
                    <option value="Executive Individual">Executive Individual Lease</option>
                    <option value="Chauffeur Managed">Full Chauffeur & Maintenance Managed</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
              <span>Full compliance · 24/7 dedicated dispatch support</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-sm px-8 py-3 rounded-sm transition-all duration-150 shadow-md active:scale-[0.98] whitespace-nowrap"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
