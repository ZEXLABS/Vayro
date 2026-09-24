import { Vehicle } from '../types';
import heroCarImg from '../assets/images/hero_executive_car_1790215163008.jpg';
import convoyImg from '../assets/images/security_convoy_mobility_1790215175523.jpg';
import yachtImg from '../assets/images/luxury_yacht_charter_1790215186384.jpg';
import coachImg from '../assets/images/executive_coach_bus_1790215197755.jpg';

// Bundled visual assets with public fallback
export const IMAGES = {
  heroCar: heroCarImg || '/images/hero_executive_car_1790215163008.jpg',
  convoy: convoyImg || '/images/security_convoy_mobility_1790215175523.jpg',
  yacht: yachtImg || '/images/luxury_yacht_charter_1790215186384.jpg',
  coach: coachImg || '/images/executive_coach_bus_1790215197755.jpg',
};

// Premium verified automotive image URLs with high availability
const FLEET_PHOTOS = {
  sClass1: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
  sClass2: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
  landCruiser1: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1600&auto=format&fit=crop',
  landCruiser2: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop',
  vClass1: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop',
  vClass2: coachImg,
  rangeRover1: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1600&auto=format&fit=crop',
  rangeRover2: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
  bmw7Series1: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
  bmw7Series2: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1600&auto=format&fit=crop',
  lexusLx1: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  lexusLx2: convoyImg,
  yacht1: yachtImg,
  yacht2: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?q=80&w=1600&auto=format&fit=crop',
  coach1: coachImg,
  coach2: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop',
};

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class',
    brand: 'Mercedes-Benz',
    model: 'S500 4MATIC',
    category: 'Executive Sedan',
    vehicleType: 'executive_sedan',
    location: 'Lagos',
    pricePerDay: 350000,
    currency: 'NGN',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    driveType: 'All-Wheel Drive (4MATIC)',
    luggageCapacity: '3 Large Suitcases',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.sClass1,
      FLEET_PHOTOS.sClass2,
      IMAGES.heroCar,
    ],
    description: 'The benchmark of executive mobility. Quiet, refined, and engineered for high-level business movements and discrete executive travel.',
    features: [
      'Executive Rear Lounge Seating',
      'Burmester 3D Surround Sound',
      'Rear Privacy Shades & Acoustic Glass',
      'Discrete Chauffeur Partition Option',
      'High-Speed Wi-Fi & Laptop Desk'
    ],
    specs: {
      engine: '3.0L Inline-6 Turbo with EQ Boost',
      doors: 4,
      year: 2024,
      interior: 'Exclusive Nappa Leather in Obsidian Black',
      acceleration: '4.9s 0-100 km/h'
    }
  },
  {
    id: 'toyota-land-cruiser-300',
    name: 'Toyota Land Cruiser 300',
    brand: 'Toyota',
    model: 'LC300 VXR VIP',
    category: 'Luxury SUV',
    vehicleType: 'luxury_suv',
    location: 'Abuja',
    pricePerDay: 300000,
    currency: 'NGN',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Full-time 4WD',
    luggageCapacity: '4 Large Suitcases',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.landCruiser1,
      FLEET_PHOTOS.landCruiser2,
      IMAGES.convoy,
    ],
    description: 'Uncompromising road presence with supreme all-terrain capability. Built for inter-state executive travels, escort movements, and VIP transit.',
    features: [
      'Reinforced Suspension & High-Clearance Platform',
      'Multi-Terrain Monitor with 360° Cameras',
      'JBL Premium Audio & Rear Seat Entertainment',
      'Dual-Zone Rear Climate Control',
      'Dedicated Convoy Communications Ready'
    ],
    specs: {
      engine: '3.3L Twin-Turbo V6 Diesel',
      doors: 5,
      year: 2024,
      interior: 'Semi-Aniline Perforated Leather',
      acceleration: '6.7s 0-100 km/h'
    }
  },
  {
    id: 'mercedes-v-class',
    name: 'Mercedes-Benz V-Class',
    brand: 'Mercedes-Benz',
    model: 'V300d Extra Long AMG Line',
    category: 'Executive Van',
    vehicleType: 'executive_van',
    location: 'Lagos',
    pricePerDay: 280000,
    currency: 'NGN',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Rear-Wheel Drive',
    luggageCapacity: '6 Large Suitcases',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: false,
    images: [
      FLEET_PHOTOS.vClass1,
      FLEET_PHOTOS.vClass2,
      IMAGES.heroCar,
    ],
    description: 'Mobile boardroom on wheels. Features conference-style face-to-face seating, work tables, and generous luggage capacity for delegations.',
    features: [
      'Face-to-Face Conference Seating',
      'Retractable Central Work Table',
      'Dual Electric Sliding Doors',
      'Onboard 220V Power Outlets',
      'Deep Tint Privacy Windows'
    ],
    specs: {
      engine: '2.0L 4-Cylinder Turbocharged Diesel',
      doors: 5,
      year: 2024,
      interior: 'Lugano Black Leather with Carbon Accent',
      acceleration: '7.8s 0-100 km/h'
    }
  },
  {
    id: 'range-rover-autobiography',
    name: 'Range Rover Autobiography',
    brand: 'Land Rover',
    model: 'Autobiography LWB',
    category: 'Luxury SUV',
    vehicleType: 'luxury_suv',
    location: 'Lagos',
    pricePerDay: 400000,
    currency: 'NGN',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    driveType: 'Intelligent All-Wheel Drive',
    luggageCapacity: '4 Large Suitcases',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.rangeRover1,
      FLEET_PHOTOS.rangeRover2,
      IMAGES.heroCar,
    ],
    description: 'The pinnacle of luxury SUV mobility. Peerless comfort, whisper-quiet cabin acoustics, and effortless poise for premier executive arrivals.',
    features: [
      'Executive Class Comfort-Plus Rear Seats',
      'Active Noise Cancellation in Headrests',
      'Meridian Signature 35-Speaker Audio',
      'Panoramic Sunroof with Power Blind',
      'Chauffeur Control Extension'
    ],
    specs: {
      engine: '4.4L Twin-Turbocharged V8',
      doors: 5,
      year: 2024,
      interior: 'Semi-Aniline Windsor Leather Ebony',
      acceleration: '4.6s 0-100 km/h'
    }
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    brand: 'BMW',
    model: '740i M Sport Executive',
    category: 'Executive Sedan',
    vehicleType: 'executive_sedan',
    location: 'Abuja',
    pricePerDay: 360000,
    currency: 'NGN',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    driveType: 'Rear-Wheel Drive',
    luggageCapacity: '3 Large Suitcases',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.bmw7Series1,
      FLEET_PHOTOS.bmw7Series2,
      IMAGES.heroCar,
    ],
    description: 'Imposing presence with state-of-the-art rear theater experience. Ideal for VIP summit transportation and visiting diplomatic dignitaries.',
    features: [
      '31.3-inch 8K Rear Theater Screen',
      'Automatic Comfort Access Doors',
      'Bowers & Wilkins Diamond Surround System',
      'Executive Lounge Console',
      'Sky Lounge LED Panoramic Glass Roof'
    ],
    specs: {
      engine: '3.0L TwinPower Turbo Inline-6',
      doors: 4,
      year: 2024,
      interior: 'BMW Individual Merino Leather Smoke White',
      acceleration: '5.2s 0-100 km/h'
    }
  },
  {
    id: 'lexus-lx600',
    name: 'Lexus LX 600 VIP',
    brand: 'Lexus',
    model: 'LX 600 Ultra Luxury 4-Seat',
    category: 'Luxury SUV',
    vehicleType: 'luxury_suv',
    location: 'Lagos',
    pricePerDay: 380000,
    currency: 'NGN',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    driveType: 'Full-Time 4WD',
    luggageCapacity: '3 Large Suitcases',
    availability: 'currently_unavailable',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.lexusLx1,
      FLEET_PHOTOS.lexusLx2,
      IMAGES.convoy,
    ],
    description: 'Dedicated 4-seat Ultra Luxury configuration with independent rear captain chairs that recline up to 48 degrees with footrest.',
    features: [
      '4-Seat Ultra Luxury Captain Chairs',
      'Rear Reclining Footrest & Ottoman',
      'Mark Levinson 25-Speaker Reference Audio',
      'Active Height Control Suspension',
      'Armored Perimeter Sensor Array'
    ],
    specs: {
      engine: '3.5L Twin-Turbo V6',
      doors: 5,
      year: 2024,
      interior: 'Semi-Aniline Crimson Leather',
      acceleration: '6.9s 0-100 km/h'
    }
  }
];

export const MOCK_YACHTS: Vehicle[] = [
  {
    id: 'azura-68',
    name: 'Azura 68 Flybridge',
    brand: 'Azura',
    model: '68 Foot Luxury Motor Yacht',
    category: 'Yacht Charter',
    vehicleType: 'yacht',
    location: 'Lagos (Victoria Island Marina)',
    pricePerDay: 1500000,
    currency: 'NGN',
    seats: 12,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Twin Inboard Marine Diesel',
    luggageCapacity: 'Stateroom Wardrobes',
    availability: 'available',
    chauffeurAvailable: true, // Captain & Crew included
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.yacht1,
      FLEET_PHOTOS.yacht2,
    ],
    description: 'Private 68-foot luxury motor yacht experience for executive leisure, private celebrations, corporate hospitality, and tranquil coastal movements.',
    features: [
      'Licensed Captain & 2 Professional Deck Crew',
      'Expansive Flybridge Sun Deck & Wet Bar',
      'Air-Conditioned Master & VIP Cabins',
      'Integrated High-Fidelity Bluetooth Sound System',
      'Water Sports & Tender Craft Available'
    ],
    specs: {
      engine: 'Twin MAN 1,200 HP Marine Turbos',
      doors: 3,
      year: 2023,
      interior: 'Italian Walnut & Cream Marine Leather'
    }
  },
  {
    id: 'oceana-54',
    name: 'Oceana 54 Sport Cruiser',
    brand: 'Oceana',
    model: '54 Foot Express Yacht',
    category: 'Yacht Charter',
    vehicleType: 'yacht',
    location: 'Lagos (Ikoyi Waterfront)',
    pricePerDay: 1200000,
    currency: 'NGN',
    seats: 10,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Twin Volvo Penta IPS Pods',
    luggageCapacity: 'Interior Cabin Storage',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: false,
    images: [
      FLEET_PHOTOS.yacht2,
      FLEET_PHOTOS.yacht1,
    ],
    description: 'High-speed coastal express cruiser ideal for corporate sunset cruises, intimate meetings, and coastal transit around Lagos waterways.',
    features: [
      'Full Teak Deck & Hydraulic Swim Platform',
      'Open Sky Retractable Hardtop Roof',
      'Galley with Chilled Wine Cellar',
      'Professional Skipper & Steward',
      'Safety Lifecycle Rescue Gear Certified'
    ],
    specs: {
      engine: 'Twin Volvo Penta IPS 800',
      doors: 2,
      year: 2023,
      interior: 'Teak & Weather-Resistant Ultraleather'
    }
  }
];

export const MOCK_BUSES: Vehicle[] = [
  {
    id: 'mercedes-tourismo',
    name: 'Mercedes-Benz Tourismo',
    brand: 'Mercedes-Benz',
    model: 'Tourismo RHD High-Decker',
    category: 'Executive Bus',
    vehicleType: 'bus',
    location: 'Lagos & Abuja',
    pricePerDay: 450000,
    currency: 'NGN',
    seats: 49,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Rear-Engine Coach Chassis',
    luggageCapacity: 'Huge Lower Deck Luggage Bays',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.coach1,
      FLEET_PHOTOS.coach2,
    ],
    description: 'Full-size 49-passenger executive touring coach for large international delegations, corporate retreats, conferences, and organized group movements.',
    features: [
      '49 Ergonomic Reclining Leather Seats',
      'High-Output Climate Control System',
      'Individual USB Outlets & Reading Spotlights',
      'Onboard Restroom & PA Audio System',
      'Underfloor Luggage Hold for 50+ Bags'
    ],
    specs: {
      engine: 'Mercedes-Benz OM 470 Euro VI Diesel',
      doors: 2,
      year: 2023,
      interior: 'Executive Plush Textile & Leather Headrests'
    }
  },
  {
    id: 'luxury-executive-coach',
    name: 'Luxury Executive Coach',
    brand: 'Setra / Mercedes-Benz',
    model: 'ComfortClass S 515 HD',
    category: 'Executive Bus',
    vehicleType: 'bus',
    location: 'Abuja',
    pricePerDay: 380000,
    currency: 'NGN',
    seats: 32,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Coach Chassis',
    luggageCapacity: 'Full Lower Compartments',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.coach2,
      FLEET_PHOTOS.coach1,
    ],
    description: 'Spacious 32-seat custom executive configuration with expanded legroom, center tables, and discrete tinted windows for high-ranking delegations.',
    features: [
      'Expanded 32-Seat Club Layout with Extra Legroom',
      'Dual LED Screens with HDMI Presentation Inputs',
      'Onboard Espresso Bar Station & Mini Fridge',
      'Wi-Fi Cellular Gateway',
      'Experienced Inter-City Certified Chauffeur'
    ],
    specs: {
      engine: 'OM 470 10.7L Turbocharged Diesel',
      doors: 2,
      year: 2024,
      interior: 'Diamond Stitched Black Leather'
    }
  },
  {
    id: 'mercedes-sprinter-15',
    name: 'Mercedes-Benz Sprinter Executive',
    brand: 'Mercedes-Benz',
    model: 'Sprinter 519 CDI VIP',
    category: 'Executive Bus',
    vehicleType: 'bus',
    location: 'Lagos',
    pricePerDay: 220000,
    currency: 'NGN',
    seats: 15,
    transmission: 'Automatic',
    fuel: 'Diesel',
    driveType: 'Rear-Wheel Drive',
    luggageCapacity: 'Dedicated Rear Cargo Compartment',
    availability: 'available',
    chauffeurAvailable: true,
    securityTrainedDriver: true,
    images: [
      FLEET_PHOTOS.coach1,
      FLEET_PHOTOS.vClass1,
    ],
    description: 'Compact executive coach built for swift city transfers, airport delegations, and mid-sized corporate executive movements.',
    features: [
      '15 Individual Executive Reclining Seats',
      'Subtle Ambient LED Strip Lighting',
      'Overhead Parcel Racks & Rear Baggage Space',
      'Electric Step for Easy Boarding',
      'Reinforced Air Conditioning for Tropical Climates'
    ],
    specs: {
      engine: '2.0L 4-Cylinder OM 654 Diesel',
      doors: 3,
      year: 2024,
      interior: 'Charcoal Leatherette with Gold Stitching'
    }
  }
];

export const SECURITY_CONFIGURATIONS = [
  {
    title: 'Executive Security',
    tagline: 'Single or tandem vehicle security escort',
    description: 'Premium black SUVs and executive sedans piloted by defensive-driving certified chauffeurs for discreet principal transit.',
    vehicles: 'Land Cruiser 300, S-Class, or Range Rover',
    personnel: 'Defensive-mobility certified drivers with discrete route planning',
    useCases: 'High-level business meetings, airport arrivals, cross-town transit'
  },
  {
    title: 'Convoy Support',
    tagline: 'Multi-vehicle coordinated movement formation',
    description: 'Synchronized vehicle formations utilizing dedicated lead, principal, and rear support vehicles with established comms.',
    vehicles: '3–5 Coordinated SUVs and Executive Transporters',
    personnel: 'Convoy lead coordinator + synchronized route telemetry',
    useCases: 'Inter-state diplomatic travel, executive delegations, visiting dignitaries'
  },
  {
    title: 'Secure Transport',
    tagline: 'Controlled mobility configurations',
    description: 'Specially inspected and conditioned fleet vehicles optimized for controlled, verifiable movement and continuous operations.',
    vehicles: 'Heavy-duty 4WD SUVs with run-flat capability',
    personnel: 'Vetted transportation personnel and planned route protocols',
    useCases: 'Critical asset movement, high-density transfers, late-night transit'
  },
  {
    title: 'Event & VIP Mobility',
    tagline: 'Large-scale coordinated transportation',
    description: 'Comprehensive transport architecture for high-profile summits, economic forums, international sports delegations, and private galas.',
    vehicles: 'Synchronized fleet of sedans, SUVs, and luxury coaches',
    personnel: 'Dedicated mobility dispatch desk and staging coordinators',
    useCases: 'International summits, state banquets, high-profile corporate galas'
  }
];

export const TESTIMONIALS_DEMO = [
  {
    quote: 'VAYRO coordinated our 4-vehicle diplomatic escort from Murtala Muhammed Airport to the Victoria Island summit. Every vehicle was pristine, synchronized, and punctual.',
    author: 'Tariq A.',
    role: 'Head of Protocol & Delegations',
    organization: 'Pan-African Energy Consortium',
    location: 'Lagos'
  },
  {
    quote: 'For our annual executive retreat in Abuja, we leased three Land Cruiser 300s and a 32-seat executive coach. The standard of maintenance and chauffeur etiquette was remarkable.',
    author: 'Ezinne M.',
    role: 'VP Corporate Operations',
    organization: 'Capital Partners West Africa',
    location: 'Abuja'
  },
  {
    quote: 'Chartered the Azura 68 for an executive board dinner on Lagos lagoon. Impeccable crew, calm navigation, and an unforgettable corporate hospitality setting.',
    author: 'David K.',
    role: 'Managing Director',
    organization: 'Meridian Global Infrastructure',
    location: 'Lagos'
  }
];
