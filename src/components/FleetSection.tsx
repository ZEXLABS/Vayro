import React, { useState, useMemo } from 'react';
import { Bookmark, Users, Gauge, Fuel, MapPin, Eye, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Vehicle } from '../types';

interface FleetSectionProps {
  vehicles: Vehicle[];
  savedVehicleIds: string[];
  onToggleSave: (vehicleId: string) => void;
  onViewVehicle: (vehicle: Vehicle) => void;
  onRequestVehicle: (vehicle: Vehicle) => void;
  filterPreset?: {
    location?: string;
    vehicleType?: string;
  };
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  vehicles,
  savedVehicleIds,
  onToggleSave,
  onViewVehicle,
  onRequestVehicle,
  filterPreset,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    filterPreset?.vehicleType && filterPreset.vehicleType !== 'all'
      ? filterPreset.vehicleType
      : 'all'
  );
  const [selectedLocation, setSelectedLocation] = useState<string>(
    filterPreset?.location || 'all'
  );

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const matchCategory =
        selectedCategory === 'all' || v.vehicleType === selectedCategory;
      const matchLocation =
        selectedLocation === 'all' ||
        v.location.toLowerCase().includes(selectedLocation.toLowerCase());
      return matchCategory && matchLocation;
    });
  }, [vehicles, selectedCategory, selectedLocation]);

  const categories = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'executive_sedan', label: 'Executive Sedans' },
    { id: 'luxury_suv', label: 'Luxury SUVs' },
    { id: 'executive_van', label: 'Executive Vans' },
  ];

  const locations = ['all', 'Lagos', 'Abuja'];

  return (
    <section id="fleet" className="py-24 bg-[#0B0F14] border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold block mb-2">
              Curated Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Available Now
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              Inspect our current active fleet across Lagos and Abuja. Fully conditioned, sanitised, and ready for immediate deployment.
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#151A21] border border-white/10 rounded-sm">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap focus:outline-none ${
                    selectedCategory === cat.id
                      ? 'bg-[#C9A227] text-[#0B0F14] font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Location selector */}
            <div className="flex items-center gap-1.5 bg-[#151A21] border border-white/10 px-3 py-1.5 rounded-sm text-xs text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#151A21] text-white">All Locations</option>
                <option value="Lagos" className="bg-[#151A21] text-white">Lagos</option>
                <option value="Abuja" className="bg-[#151A21] text-white">Abuja</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="bg-[#151A21] border border-white/10 rounded-sm p-12 text-center my-8">
            <p className="text-neutral-300 text-sm mb-2">No vehicles match the selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              className="text-xs text-[#C9A227] underline underline-offset-4 hover:text-[#D9B338]"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => {
              const isSaved = savedVehicleIds.includes(vehicle.id);
              const isAvailable = vehicle.availability === 'available';

              return (
                <div
                  key={vehicle.id}
                  className="bg-[#151A21] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent opacity-80" />

                    {/* Bookmark action */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(vehicle.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                        isSaved
                          ? 'bg-[#C9A227] text-[#0B0F14]'
                          : 'bg-black/50 text-white hover:bg-black/80'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save vehicle'}
                      aria-label="Save vehicle"
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>

                    {/* Location & category kicker */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-neutral-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
                      <MapPin className="w-3 h-3 text-[#C9A227]" />
                      <span>{vehicle.location}</span>
                    </div>

                    {/* Availability status */}
                    <div className="absolute bottom-3 left-3">
                      {isAvailable ? (
                        <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Available
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1 bg-amber-950/70 border border-amber-500/30 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                          <AlertCircle className="w-3 h-3 text-amber-400" />
                          Currently unavailable
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <div className="text-xs text-neutral-400 font-medium mb-1">
                        {vehicle.category}
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                        {vehicle.name}
                      </h3>

                      {/* Specs Row */}
                      <div className="flex items-center gap-3 text-xs text-neutral-300 py-3 border-y border-white/5 my-3">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{vehicle.seats} Seats</span>
                        </span>
                        <span className="text-neutral-600" aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{vehicle.transmission}</span>
                        </span>
                        <span className="text-neutral-600" aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Fuel className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{vehicle.fuel}</span>
                        </span>
                      </div>

                      <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-4">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div>
                      <div className="flex items-baseline justify-between mb-4">
                        <div>
                          <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                            Daily Rate
                          </span>
                          <span className="text-xl font-semibold text-white tabular-nums tracking-tight">
                            ₦{vehicle.pricePerDay.toLocaleString()}
                          </span>
                          <span className="text-neutral-400 text-xs ml-1">/ day</span>
                        </div>
                        {vehicle.chauffeurAvailable && (
                          <span className="text-[11px] text-neutral-400">
                            Chauffeur optional
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                        <button
                          onClick={() => onViewVehicle(vehicle)}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-medium text-white transition-colors focus:outline-none"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Vehicle</span>
                        </button>

                        <button
                          onClick={() => onRequestVehicle(vehicle)}
                          className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm text-xs font-semibold transition-all focus:outline-none ${
                            isAvailable
                              ? 'bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] active:scale-[0.98]'
                              : 'bg-white/10 text-neutral-400 hover:bg-white/15'
                          }`}
                        >
                          <span>Request</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
