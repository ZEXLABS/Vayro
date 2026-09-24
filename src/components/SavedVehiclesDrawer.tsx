import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Vehicle } from '../types';

interface SavedVehiclesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedVehicles: Vehicle[];
  onRemoveSaved: (id: string) => void;
  onRequestVehicle: (vehicle: Vehicle) => void;
  onClearAll: () => void;
}

export const SavedVehiclesDrawer: React.FC<SavedVehiclesDrawerProps> = ({
  isOpen,
  onClose,
  savedVehicles,
  onRemoveSaved,
  onRequestVehicle,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#151A21] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl relative">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#C9A227]" />
                <h3 className="text-base font-display font-bold text-white">
                  Shortlisted Vehicles ({savedVehicles.length})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="mt-6 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              {savedVehicles.length === 0 ? (
                <div className="text-center py-12 text-neutral-400 text-xs">
                  <Bookmark className="w-8 h-8 mx-auto text-neutral-600 mb-2 opacity-50" />
                  <p>No vehicles currently saved to your shortlist.</p>
                  <p className="mt-1 text-neutral-400">
                    Click the bookmark icon on any vehicle card to compare.
                  </p>
                </div>
              ) : (
                savedVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="p-3 bg-[#0B0F14] border border-white/10 rounded-sm flex items-center justify-between gap-3 group"
                  >
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-16 h-12 object-cover rounded-sm bg-neutral-900 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">
                        {vehicle.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {vehicle.location} · {vehicle.category}
                      </p>
                      <p className="text-xs font-medium text-[#C9A227] tabular-nums mt-0.5">
                        ₦{vehicle.pricePerDay.toLocaleString()} / day
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveSaved(vehicle.id)}
                        className="text-neutral-400 hover:text-red-400 p-1 transition-colors"
                        title="Remove from shortlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onRequestVehicle(vehicle);
                        }}
                        className="bg-[#C9A227] hover:bg-[#D9B338] text-[#0B0F14] font-semibold text-[11px] px-2.5 py-1 rounded-sm transition-colors whitespace-nowrap"
                      >
                        Request
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          {savedVehicles.length > 0 && (
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-neutral-400 hover:text-red-400 transition-colors"
              >
                Clear Shortlist
              </button>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-[#C9A227] hover:underline"
              >
                Continue Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
