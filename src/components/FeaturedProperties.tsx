import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Sparkles, 
  Eye, 
  Download, 
  Compass, 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Calendar,
  Search,
  Filter,
  FileText,
  Map
} from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  category: 'flat' | 'villa' | 'plot' | 'commercial';
  price: string;
  priceRaw: number;
  location: string;
  city: string;
  bhk?: string;
  bathrooms?: number;
  area: string;
  vastuFacing: string;
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Booking' | string;
  image: string;
  badge: string;
  reraId: string;
  highlights: string[];
  description: string;
  floorplanUrl?: string;
}

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Rainbow Omkar Residency',
    category: 'flat',
    price: '₹55.0 Lakhs',
    priceRaw: 5500000,
    location: 'Nayapalli / Hanspal, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '2 & 3 BHK',
    bathrooms: 2,
    area: '1,150 - 1,520 Sq.Ft',
    vastuFacing: 'East & North-East Facing',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Rainbow Assets Project',
    reraId: 'RP/19/2022/00642',
    highlights: ['24/7 Gated Security', 'Lift & Power Backup', 'Rainwater Harvesting', 'Dedicated Covered Parking', 'Near NH16 Highway'],
    description: 'Premier ready-to-move residential society in Nayapalli & Hanspal by Rainbow Assets. Features spacious 2 & 3 BHK layouts with Vastu-compliant architecture and full power backup.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-2',
    title: 'Rainbow Basant Kunj',
    category: 'villa',
    price: '₹68.0 Lakhs',
    priceRaw: 6800000,
    location: 'Gudiapokhari, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '2 BHK Independent Villa',
    bathrooms: 2,
    area: '1,400 Sq.Ft Plot + Builtup',
    vastuFacing: 'East Facing Entrance',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Rainbow Assets Villa',
    reraId: 'RP/19/2022/00781',
    highlights: ['Private Garden Courtyard', 'Gated Villa Township', 'Children Play Area', '24x7 Water & Electricity', '0.72 Acre Lush Campus'],
    description: 'Exclusive 1 & 2 BHK villa enclave by Rainbow Assets at Gudiapokhari. Enjoy independent living with private open gardens, wide internal roads, and tranquil surroundings.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-3',
    title: 'Chintamani Residency',
    category: 'flat',
    price: '₹65.0 Lakhs',
    priceRaw: 6500000,
    location: 'Tankapani Road / Ranga Bazar, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 BHK Modern',
    bathrooms: 3,
    area: '1,073 - 1,497 Sq.Ft',
    vastuFacing: 'East / North Facing',
    status: 'Under Construction (Possession Sep 2026)',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'RERA Approved Project',
    reraId: 'RP/19/2023/01070',
    highlights: ['Rooftop Swimming Pool', 'Modern Fitness Gym', 'Community Clubhouse', 'Landscaped Terrace', 'BDA Approved Plan'],
    description: 'Thoughtfully engineered 3 BHK homes near Tankapani Road & Ranga Bazar featuring open layouts, ample natural light, swimming pool, and club amenities.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-4',
    title: 'Urbanyx Court',
    category: 'flat',
    price: '₹88.0 Lakhs',
    priceRaw: 8800000,
    location: 'Dumduma, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 BHK Luxury High-rise',
    bathrooms: 3,
    area: '1,650 - 1,890 Sq.Ft',
    vastuFacing: 'North-East Facing',
    status: 'Under Construction (Possession Mar 2027)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'RERA: RP/19/2023/00871',
    reraId: 'RP/19/2023/00871',
    highlights: ['11-Storey Luxury Tower', 'Rooftop Lounge & Pool', '105 Exclusive Units', 'Intercom & Smart Access', 'Landscaped Gardens'],
    description: 'Ultra-modern 11-floor residential tower in Dumduma across 1.24+ acres. Features premium 3 BHK apartments with rooftop sky lounge, infinity pool, and high-speed elevators.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-5',
    title: 'Khushi Altair',
    category: 'flat',
    price: '₹1.15 Crore',
    priceRaw: 11500000,
    location: 'Bomikhal, Cuttack Road, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 & 4 BHK Premium',
    bathrooms: 4,
    area: '1,950 - 2,450 Sq.Ft',
    vastuFacing: 'East Entrance',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Prime Cuttack Road Location',
    reraId: 'RP/19/2023/00912',
    highlights: ['Grand Entrance Lobby', 'EV Charging Bays', 'Italian Flooring Finish', 'Multi-Purpose Banquet', 'High-Speed Elevators'],
    description: 'Landmark luxury residences in Bomikhal on Cuttack Road. Features Italian marble floorings, grand reception lobby, banquet hall, and high-tech security.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-6',
    title: 'DN Fairytale Extension',
    category: 'flat',
    price: '₹72.0 Lakhs',
    priceRaw: 7200000,
    location: 'Madanpur, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '2 & 3 BHK Smart Homes',
    bathrooms: 2,
    area: '1,280 - 1,620 Sq.Ft',
    vastuFacing: 'East / North Plots',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'DN Homes Partnership',
    reraId: 'RP/19/2023/00744',
    highlights: ['50+ World-Class Amenities', 'Olympic-Size Swimming Pool', 'Sports Complex & Courts', 'Convenience Store Inside', 'Wide Green Lawns'],
    description: 'Sprawling township expansion in Madanpur with 50+ lifestyle amenities including swimming pools, tennis courts, jogging tracks, and 24/7 security.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-7',
    title: 'Utkal Isquare',
    category: 'commercial',
    price: '₹1.25 Crore',
    priceRaw: 12500000,
    location: 'Patia / Infocity Corridor, Bhubaneswar',
    city: 'Bhubaneswar',
    area: '1,100 - 3,500 Sq.Ft Retail & Office',
    vastuFacing: 'North-East Entrance',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Grade-A Commercial Space',
    reraId: 'RP/19/2023/00820',
    highlights: ['Double Height Retail Frontage', 'Centralized Air Conditioning', 'Multi-Level Basement Parking', 'High Footfall IT Zone', '100% Generator Backup'],
    description: 'Iconic commercial and retail landmark in the heart of Patia IT Hub. Designed for high corporate rental yields and premium brand retail showrooms.',
    floorplanUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-8',
    title: 'Motwani Anantam',
    category: 'flat',
    price: '₹92.0 Lakhs',
    priceRaw: 9200000,
    location: 'Jharapada, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 BHK Luxury Flat',
    bathrooms: 3,
    area: '1,720 Sq.Ft',
    vastuFacing: 'East Facing Entrance',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Central Bhubaneswar',
    reraId: 'RP/19/2023/00990',
    highlights: ['Near Railway Station & Airport', 'High Ceiling Design', 'Covered Stilt Parking', 'Rooftop Gazebo', 'Solar Power Backup'],
    description: 'Bespoke 3 BHK urban apartments located centrally at Jharapada. Close proximity to Bhubaneswar Railway Station, major hospitals, and schools.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-9',
    title: 'DN Yoo Odisha',
    category: 'flat',
    price: '₹2.40 Crore',
    priceRaw: 24000000,
    location: 'Gajapati Nagar, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '4 BHK Ultra Luxury',
    bathrooms: 5,
    area: '3,200 - 4,100 Sq.Ft',
    vastuFacing: 'East / North Facing',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Global Designer Residences',
    reraId: 'RP/19/2023/01110',
    highlights: ['YOO Inspired Design', 'Private Jacuzzi Balconies', '5-Star Concierge Service', 'Infinity Edge Pool', 'Private Elevator Lobby'],
    description: 'Odisha’s first international designer luxury residences at Gajapati Nagar. Crafted with signature YOO interiors, private decks, and 5-star hospitality services.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-10',
    title: 'Khushi Capella',
    category: 'flat',
    price: '₹58.5 Lakhs',
    priceRaw: 5850000,
    location: 'Pahala, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '2 & 3 BHK',
    bathrooms: 2,
    area: '1,220 - 1,510 Sq.Ft',
    vastuFacing: 'North Facing',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'On NH16 Expressway',
    reraId: 'RP/19/2023/00611',
    highlights: ['Strategic Highway Location', 'Clubhouse & Indoor Games', 'Landscaped Central Park', '24/7 Security & CCTV', 'Power Backup'],
    description: 'Modern residential complex at Pahala along the 6-lane NH16 corridor between Bhubaneswar and Cuttack. Excellent connectivity and modern facilities.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-11',
    title: 'DN Kingsland',
    category: 'flat',
    price: '₹1.85 Crore',
    priceRaw: 18500000,
    location: 'Saheed Nagar, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 & 4 BHK Luxury Residences',
    bathrooms: 4,
    area: '2,200 - 2,800 Sq.Ft',
    vastuFacing: 'East Facing Entrance',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Prime Saheed Nagar',
    reraId: 'RP/19/2023/01205',
    highlights: ['Prime High Street District', 'Smart Home Automation', 'Rooftop Infinity Pool', 'Valet Parking Service', 'Italian Marble Finish'],
    description: 'Royal residential towers in Saheed Nagar. Offering opulent 3 & 4 BHK apartments with smart home features, infinity pool, and high-end security.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-12',
    title: '9 Boulevard',
    category: 'flat',
    price: '₹82.0 Lakhs',
    priceRaw: 8200000,
    location: 'Raghunathpur, Bhubaneswar',
    city: 'Bhubaneswar',
    bhk: '3 BHK Lifestyle Flat',
    bathrooms: 3,
    area: '1,580 Sq.Ft',
    vastuFacing: 'East / North Facing',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Nandankanan Corridor',
    reraId: 'RP/19/2023/00719',
    highlights: ['Adjacent to Nandankanan Road', 'Equipped Gymnasium', 'Covered Car Parking', 'Intercom & High-Speed Lifts', 'BDA Approved'],
    description: 'Sophisticated 3 BHK apartments in Raghunathpur along the scenic Nandankanan Road. Enjoy fresh air, lush surroundings, and top urban connectivity.',
    floorplanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

interface FeaturedPropertiesProps {
  onScheduleVisit?: (propertyName?: string) => void;
}

export default function FeaturedProperties({ onScheduleVisit }: FeaturedPropertiesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'flat' | 'villa' | 'plot' | 'commercial'>('all');
  const [activeCity, setActiveCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceBudget, setPriceBudget] = useState<'all' | 'under50' | '50to100' | 'above100'>('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'floorplan'>('overview');

  const filteredProperties = SAMPLE_PROPERTIES.filter(p => {
    const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
    const cityMatch = activeCity === 'all' || p.city === activeCity;
    const searchMatch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let budgetMatch = true;
    if (priceBudget === 'under50') budgetMatch = p.priceRaw < 5000000;
    else if (priceBudget === '50to100') budgetMatch = p.priceRaw >= 5000000 && p.priceRaw <= 10000000;
    else if (priceBudget === 'above100') budgetMatch = p.priceRaw > 10000000;

    return categoryMatch && cityMatch && searchMatch && budgetMatch;
  });

  return (
    <section id="premium-flats" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Odisha Property & Land Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
              Exclusive Flats, Villas & <br className="hidden sm:inline" />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Clear Title Approved Plots
              </span>
            </h2>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Direct builder representation & verified properties across Bhubaneswar, Cuttack, Puri, Rourkela, Sambalpur, Berhampur and key cities in Odisha with 100% RERA & Vastu compliance.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-md mb-10 space-y-3">
          
          {/* Top row: Search input & Budget Filter */}
          <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, location, keyword..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Budget Selector Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-medium w-full md:w-auto overflow-x-auto scrollbar-none">
              <span className="text-slate-500 px-2 flex items-center gap-1 font-mono shrink-0">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Budget:
              </span>
              {[
                { id: 'all', label: 'All Budgets' },
                { id: 'under50', label: '< ₹50 Lakhs' },
                { id: '50to100', label: '₹50L - ₹1 Cr' },
                { id: 'above100', label: '> ₹1 Crore' },
              ].map(b => (
                <button
                  key={b.id}
                  onClick={() => setPriceBudget(b.id as any)}
                  className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-semibold ${
                    priceBudget === b.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Bottom row: Category Tabs & City Pills */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full">
              {[
                { id: 'all', label: 'All Listings' },
                { id: 'flat', label: 'Luxury Flats' },
                { id: 'villa', label: 'Duplex Villas' },
                { id: 'plot', label: 'Land Plots' },
                { id: 'commercial', label: 'Commercial' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* City Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-medium overflow-x-auto scrollbar-none max-w-full">
              <span className="text-slate-500 px-2 flex items-center gap-1 font-mono shrink-0">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> City:
              </span>
              {['all', 'Bhubaneswar', 'Cuttack', 'Puri', 'Rourkela', 'Sambalpur', 'Berhampur', 'Balasore', 'Jharsuguda'].map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCity(c)}
                  className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs ${
                    activeCity === c 
                      ? 'bg-blue-600 text-white font-bold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {c === 'all' ? 'All Odisha' : c}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Empty Search Result state */}
        {filteredProperties.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm my-8">
            <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Properties Found</h3>
            <p className="text-slate-500 text-xs max-w-md mx-auto mb-4">
              We couldn't find properties matching your current filter criteria. Try resetting filters or searching for another location.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveCity('all');
                setSearchQuery('');
                setPriceBudget('all');
              }}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(prop => (
            <motion.div
              key={prop.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge top left */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {prop.badge}
                  </div>

                  {/* Status top right */}
                  <div className="absolute top-3 right-3 bg-brand-dark text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
                    {prop.status}
                  </div>

                  {/* Price Banner overlay bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-heading">
                    <span className="text-2xl font-extrabold text-white drop-shadow-md">
                      {prop.price}
                    </span>
                    <span className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur-xs px-2 py-1 rounded border border-white/20">
                      RERA Approved
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                    {prop.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-brand-primary text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>{prop.location}</span>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-gray-50 rounded-xl border border-gray-200 text-xs mb-4">
                    {prop.bhk && (
                      <div className="flex items-center gap-1.5 text-brand-dark font-medium">
                        <Bed className="w-4 h-4 text-brand-accent shrink-0" />
                        <span className="truncate">{prop.bhk}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-brand-dark font-medium">
                      <Maximize className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="truncate">{prop.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-dark font-medium">
                      <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="truncate">{prop.vastuFacing.split(' ')[0]}</span>
                    </div>
                  </div>

                  <p className="text-brand-primary text-xs line-clamp-2 leading-relaxed mb-4 font-normal">
                    {prop.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProperty(prop)}
                  className="flex-1 bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Eye className="w-4 h-4 text-brand-accent" />
                  View Details
                </button>
                <button
                  onClick={() => onScheduleVisit ? onScheduleVisit(prop.title) : null}
                  className="bg-brand-dark hover:bg-brand-accent text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs shrink-0"
                >
                  <Calendar className="w-4 h-4" />
                  Book Visit
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Property Detail Modal */}
        <AnimatePresence>
          {selectedProperty && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-gray-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-brand-dark relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-brand-dark flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>RERA ID: {selectedProperty.reraId}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark mb-2">
                  {selectedProperty.title}
                </h3>

                <div className="flex items-center gap-2 text-brand-primary text-sm mb-6 font-medium">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>{selectedProperty.location}</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
                  <button
                    onClick={() => setModalTab('overview')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      modalTab === 'overview'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Overview & Amenities
                  </button>
                  <button
                    onClick={() => setModalTab('floorplan')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      modalTab === 'floorplan'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Map className="w-3.5 h-3.5" />
                    Floor Plan & Layout
                  </button>
                </div>

                {modalTab === 'overview' ? (
                  <>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-gray-200">
                      <img 
                        src={selectedProperty.image} 
                        alt={selectedProperty.title}
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-200 font-heading text-2xl font-extrabold text-blue-600 shadow-md">
                        {selectedProperty.price}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 mb-6 text-xs">
                      <div>
                        <span className="text-slate-500 block">Total Area</span>
                        <span className="font-bold text-slate-900 text-sm">{selectedProperty.area}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Vastu Orientation</span>
                        <span className="font-bold text-emerald-700 text-sm">{selectedProperty.vastuFacing}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Status</span>
                        <span className="font-bold text-blue-600 text-sm">{selectedProperty.status}</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 mb-3">Key Amenities & Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {selectedProperty.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {selectedProperty.description}
                    </p>
                  </>
                ) : (
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-100 text-xs text-blue-900">
                      <span className="font-bold block mb-1">Architectural Floor Plan Blueprint</span>
                      Interactive 2D / 3D spatial diagram for {selectedProperty.title} ({selectedProperty.area}). Approved by statutory authorities.
                    </div>

                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                      <img 
                        src={selectedProperty.floorplanUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
                        alt={`${selectedProperty.title} Floor Plan`}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-200 shadow-sm flex items-center gap-1.5">
                        <Maximize className="w-3.5 h-3.5 text-blue-600" />
                        <span>High-Res Architectural Diagram</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs">
                      <span className="text-slate-600 font-medium">RERA Registration: <strong className="text-slate-900">{selectedProperty.reraId}</strong></span>
                      <button 
                        onClick={() => alert(`Brochure & floorplan specs requested for ${selectedProperty.title}. Our team will WhatsApp it to you instantly!`)}
                        className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 hover:underline"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Full Blueprint PDF
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const propName = selectedProperty.title;
                      setSelectedProperty(null);
                      if (onScheduleVisit) onScheduleVisit(propName);
                    }}
                    className="flex-1 bg-brand-dark hover:bg-brand-accent text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Site Visit / Cab Pickup
                  </button>
                  <a
                    href="tel:+917008485542"
                    className="bg-white hover:bg-gray-50 text-brand-dark px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-gray-200"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    Direct Call Sales
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
