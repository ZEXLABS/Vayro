import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickSearch } from './components/QuickSearch';
import { ServiceCategories } from './components/ServiceCategories';
import { FleetSection } from './components/FleetSection';
import { SecurityMobilitySection } from './components/SecurityMobilitySection';
import { YachtSection } from './components/YachtSection';
import { BusSection } from './components/BusSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyVayro } from './components/WhyVayro';
import { LeasingSection } from './components/LeasingSection';
import { CorporateSection } from './components/CorporateSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { BookingModal } from './components/BookingModal';
import { ConvoyBuilderModal } from './components/ConvoyBuilderModal';
import { SavedVehiclesDrawer } from './components/SavedVehiclesDrawer';

import { MOCK_VEHICLES, MOCK_YACHTS, MOCK_BUSES } from './data/mockData';
import { Vehicle, ServiceType } from './types';

export default function App() {
  // Navigation & Search State
  const [activeSearchTab, setActiveSearchTab] = useState<'rental' | 'lease' | 'executive' | 'security'>('rental');
  const [fleetFilterPreset, setFleetFilterPreset] = useState<{
    location?: string;
    vehicleType?: string;
  }>({ location: 'all', vehicleType: 'all' });

  // Saved / Shortlist State
  const [savedVehicleIds, setSavedVehicleIds] = useState<string[]>(['mercedes-s-class']);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Modal States
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState<Vehicle | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<Vehicle | null>(null);
  const [bookingServiceType, setBookingServiceType] = useState<ServiceType>('rental');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [isConvoyBuilderOpen, setIsConvoyBuilderOpen] = useState(false);

  // Toast banner notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  // Combine all vehicles for lookup
  const allVehicles = [...MOCK_VEHICLES, ...MOCK_YACHTS, ...MOCK_BUSES];
  const savedVehicles = allVehicles.filter((v) => savedVehicleIds.includes(v.id));

  // Handlers
  const handleToggleSave = (vehicleId: string) => {
    setSavedVehicleIds((prev) => {
      const exists = prev.includes(vehicleId);
      if (exists) {
        showToast('Vehicle removed from shortlist');
        return prev.filter((id) => id !== vehicleId);
      } else {
        showToast('Vehicle added to shortlist');
        return [...prev, vehicleId];
      }
    });
  };

  const handleClearSaved = () => {
    setSavedVehicleIds([]);
    showToast('Shortlist cleared');
  };

  const handleViewVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleForDetail(vehicle);
    setIsDetailModalOpen(true);
  };

  const handleRequestVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleForBooking(vehicle);
    if (vehicle.vehicleType === 'yacht') {
      setBookingServiceType('yacht');
    } else if (vehicle.vehicleType === 'bus') {
      setBookingServiceType('bus');
    } else {
      setBookingServiceType('rental');
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = (service?: string) => {
    setSelectedVehicleForBooking(null);
    if (service && ['rental', 'lease', 'executive', 'security', 'yacht', 'bus'].includes(service)) {
      setBookingServiceType(service as ServiceType);
    } else {
      setBookingServiceType('rental');
    }
    setIsBookingModalOpen(true);
  };

  const handleSearchSubmit = (params: {
    service: 'rental' | 'lease' | 'executive' | 'security';
    location: string;
    vehicleType?: string;
    date?: string;
    endDate?: string;
    passengers?: number;
    duration?: string;
    requirements?: string;
  }) => {
    if (params.service === 'rental') {
      setFleetFilterPreset({
        location: params.location,
        vehicleType: params.vehicleType || 'all',
      });
      // Scroll smoothly to fleet
      const el = document.getElementById('fleet');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        showToast(`Filtered fleet for ${params.location}`);
      }
    } else if (params.service === 'security') {
      setIsConvoyBuilderOpen(true);
    } else if (params.service === 'lease') {
      const el = document.getElementById('leasing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Executive
      handleOpenGeneralBooking('executive');
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'rentals') {
      setFleetFilterPreset({ location: 'all', vehicleType: 'all' });
      const el = document.getElementById('fleet');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F3F4F6] selection:bg-[#C9A227] selection:text-[#0B0F14]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#151A21] border border-[#C9A227] text-white px-4 py-3 rounded-sm shadow-2xl text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenGeneralBooking()}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedVehicleIds.length}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onExplore={() => handleNavigate('fleet')}
          onRequest={() => handleOpenGeneralBooking()}
          onSelectServiceMode={(mode) => {
            setActiveSearchTab(mode);
            const el = document.getElementById('search-module');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Quick Search Module */}
        <div id="search-module">
          <QuickSearch
            activeTab={activeSearchTab}
            onTabChange={setActiveSearchTab}
            onSubmitSearch={handleSearchSubmit}
          />
        </div>

        {/* Mobility for Every Mission */}
        <ServiceCategories
          onSelectCategory={(cat) => {
            if (cat === 'rentals') handleNavigate('fleet');
            else if (cat === 'leasing') handleNavigate('leasing');
            else if (cat === 'executive') handleOpenGeneralBooking('executive');
            else if (cat === 'security') handleNavigate('security');
          }}
        />

        {/* Featured Vehicles (Available Now) */}
        <FleetSection
          vehicles={MOCK_VEHICLES}
          savedVehicleIds={savedVehicleIds}
          onToggleSave={handleToggleSave}
          onViewVehicle={handleViewVehicle}
          onRequestVehicle={handleRequestVehicle}
          filterPreset={fleetFilterPreset}
        />

        {/* Security Mobility Section */}
        <SecurityMobilitySection
          onRequestSecurity={() => handleOpenGeneralBooking('security')}
          onOpenConvoyBuilder={() => setIsConvoyBuilderOpen(true)}
        />

        {/* Yacht Section */}
        <YachtSection
          onViewYacht={handleViewVehicle}
          onRequestYacht={handleRequestVehicle}
        />

        {/* Buses & Coaches Section */}
        <BusSection
          onViewBus={handleViewVehicle}
          onRequestBus={handleRequestVehicle}
        />

        {/* How It Works */}
        <HowItWorks />

        {/* Why VAYRO */}
        <WhyVayro />

        {/* Dedicated Leasing Section */}
        <LeasingSection
          onOpenLeasingInquiry={(tierTitle) => {
            handleOpenGeneralBooking('lease');
          }}
        />

        {/* Corporate / Business Section */}
        <CorporateSection
          onContactBusiness={() => handleOpenGeneralBooking('executive')}
        />

        {/* Fictional/Demo Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Large Closing CTA & Footer */}
      <Footer
        onExplore={() => handleNavigate('fleet')}
        onRequest={() => handleOpenGeneralBooking()}
        onNavigate={handleNavigate}
      />

      {/* Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicleForDetail}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onRequestVehicle={handleRequestVehicle}
        isSaved={selectedVehicleForDetail ? savedVehicleIds.includes(selectedVehicleForDetail.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Booking / Request Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedVehicle={selectedVehicleForBooking}
        initialService={bookingServiceType}
        onSubmitSuccess={(ref) => {
          showToast(`Request registered: ${ref}`);
        }}
      />

      {/* Convoy Builder Modal */}
      <ConvoyBuilderModal
        isOpen={isConvoyBuilderOpen}
        onClose={() => setIsConvoyBuilderOpen(false)}
        onSubmitSuccess={(ref) => {
          showToast(`Convoy movement registered: ${ref}`);
        }}
      />

      {/* Saved Vehicles Drawer */}
      <SavedVehiclesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedVehicles={savedVehicles}
        onRemoveSaved={handleToggleSave}
        onRequestVehicle={handleRequestVehicle}
        onClearAll={handleClearSaved}
      />
    </div>
  );
}
