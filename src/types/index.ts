export type ServiceType = 'rental' | 'lease' | 'executive' | 'security' | 'yacht' | 'bus';

export type VehicleCategory = 'executive_sedan' | 'luxury_suv' | 'executive_van' | 'yacht' | 'bus' | 'security';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  vehicleType: VehicleCategory;
  location: string;
  pricePerDay: number;
  currency: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  driveType?: string;
  luggageCapacity?: string;
  availability: 'available' | 'currently_unavailable';
  chauffeurAvailable: boolean;
  securityTrainedDriver: boolean;
  images: string[];
  description: string;
  features: string[];
  specs: {
    engine?: string;
    acceleration?: string;
    doors?: number;
    year?: number;
    interior?: string;
  };
}

export interface ConvoyRequestConfig {
  leadVehicle: string;
  executiveVehicle: string;
  supportVehicle: string;
  vehicleCount: number;
  pickupLocation: string;
  destination: string;
  date: string;
  durationDays: number;
  escortTeam: boolean;
  notes?: string;
}

export interface BookingRequestData {
  serviceType: ServiceType;
  vehicleId?: string;
  vehicleName?: string;
  fullName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  destination?: string;
  startDate: string;
  endDate: string;
  passengers?: number;
  vehicleCount?: number;
  requirements?: string;
  chauffeurRequired?: boolean;
}

export interface BookingConfirmation {
  referenceNumber: string;
  submittedAt: string;
  details: BookingRequestData;
}
