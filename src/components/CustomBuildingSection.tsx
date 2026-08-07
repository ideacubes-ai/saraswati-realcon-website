import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Ruler, 
  CheckCircle2, 
  ShieldCheck, 
  DraftingCompass, 
  Home, 
  Info, 
  Calculator,
  ArrowRight,
  Sparkles,
  Zap,
  HardHat,
  ChevronRight,
  Sun,
  Flame,
  Droplets,
  Wind,
  Shield,
  Check,
  AlertTriangle,
  Eye,
  Sunset,
  Moon
} from 'lucide-react';

type CADViewMode = '3d-exterior' | '3d-iso' | '2d-plan' | 'vastu-grid';
type CADTheme = 'cad-dark' | 'blueprint' | 'sketch-light';
type VastuZoneCode = 'NE' | 'SE' | 'SW' | 'NW' | 'N' | 'E' | 'S' | 'W' | 'CENTER';
type PlotFacing = 'EAST' | 'NORTH' | 'WEST' | 'SOUTH';
type ExteriorStyle = 'glass-duplex' | 'odisha-heritage' | 'eco-bungalow';
type LightingTime = 'day' | 'dusk' | 'night';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  category: 'Vastu' | 'Structure' | 'Interior' | 'Energy' | 'Facade' | 'Lighting' | 'Material';
  desc: string;
  specs: string;
  vastuZone?: VastuZoneCode;
}

interface ExteriorHouseOption {
  id: ExteriorStyle;
  name: string;
  tagline: string;
  imageDay: string;
  imageDusk: string;
  imageNight: string;
  description: string;
  hotspots: Hotspot[];
}

const exteriorHouseOptions: Record<ExteriorStyle, ExteriorHouseOption> = {
  'glass-duplex': {
    id: 'glass-duplex',
    name: 'Modern Glass & Steel Duplex (G+1)',
    tagline: 'Sleek luxury villa with high ceilings & floor-to-ceiling glass',
    imageDay: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    imageDusk: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    description: 'Designed for urban plots in Bhubaneswar & Cuttack. Features cantilevered upper floor balcony, double-height living hall window, and warm wooden paneling.',
    hotspots: [
      {
        id: 'ext-entrance',
        x: 48,
        y: 72,
        title: 'East-Facing Main Entrance Gate',
        category: 'Vastu',
        desc: 'Vastu-compliant main door positioned in Purva (East) direction for morning positive energy and sunlight.',
        specs: '8ft x 4.5ft Burma Teakwood Door • Smart Digital Keypad & Video Door Phone',
        vastuZone: 'E'
      },
      {
        id: 'ext-balcony',
        x: 35,
        y: 38,
        title: 'Cantilevered Master Balcony',
        category: 'Facade',
        desc: 'Spacious floating balcony with frameless 12mm toughened glass balustrade and weatherproof teak wood soffit.',
        specs: '12mm Toughened Glass Railing • Concealed 3000K LED Strip Lights'
      },
      {
        id: 'ext-stone',
        x: 75,
        y: 52,
        title: 'Natural Slate Stone Accent Wall',
        category: 'Material',
        desc: 'Durable exterior stone cladding that protects against Odisha monsoon dampness and provides organic warmth.',
        specs: 'Asian Paints DampProof Undercoat • Natural Split Slate Tiles'
      },
      {
        id: 'ext-lights',
        x: 20,
        y: 60,
        title: '3000K Warm Architectural Spotlights',
        category: 'Lighting',
        desc: 'Up-down exterior wall washers highlighting structural pillars and garden pathway.',
        specs: 'IP67 Waterproof Outdoor Fixtures • Automatic Dusk-to-Dawn Sensor'
      }
    ]
  },
  'odisha-heritage': {
    id: 'odisha-heritage',
    name: 'Odisha Heritage Stone Villa',
    tagline: 'Traditional Odia architecture blended with modern villa comfort',
    imageDay: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    imageDusk: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    description: 'Inspired by Puri & Konark stone craft. Incorporates Khondalite stone pillars, wide cooling roof overhangs, and central courtyard ventilation.',
    hotspots: [
      {
        id: 'ext-khondalite',
        x: 30,
        y: 65,
        title: 'Carved Khondalite Stone Pillars',
        category: 'Material',
        desc: 'Hand-carved local Odia stone pillars providing structural support and timeless heritage aesthetics.',
        specs: 'Genuine Odisha Khondalite Stone • Sealant Coated for 25+ Year Monsoons'
      },
      {
        id: 'ext-veranda',
        x: 55,
        y: 75,
        title: 'North-East Open Veranda (Baranda)',
        category: 'Vastu',
        desc: 'Open sitting porch in Ishan Kon attracting cool morning breeze and community interaction.',
        specs: 'Anti-Skid Kota Stone Flooring • Carved Teak Bench Seating',
        vastuZone: 'NE'
      },
      {
        id: 'ext-roof',
        x: 50,
        y: 25,
        title: 'Slanted Heat-Reflective Roof',
        category: 'Facade',
        desc: 'Deep roof overhangs protecting walls from heavy monsoon rains and reducing summer indoor heat by up to 5°C.',
        specs: 'Terracotta Roof Tile Overlay • High-Density Thermal Insulation'
      }
    ]
  },
  'eco-bungalow': {
    id: 'eco-bungalow',
    name: 'Contemporary Eco Green Bungalow',
    tagline: 'Sustainable smart home with rooftop solar & vertical gardens',
    imageDay: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    imageDusk: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    description: 'Zero-carbon ready bungalow equipped with integrated 5kW rooftop solar panels, rainwater harvesting pit, and lush green garden porch.',
    hotspots: [
      {
        id: 'ext-solar',
        x: 45,
        y: 18,
        title: 'Rooftop Solar & Pergola Deck',
        category: 'Energy',
        desc: 'Pre-installed 5kW On-Grid solar plant generating ~20 units/day to offset grid power bills.',
        specs: 'Mono-PERC Solar Panels • Dual Filtration Rainwater Harvesting Pipe',
        vastuZone: 'N'
      },
      {
        id: 'ext-ev',
        x: 82,
        y: 80,
        title: 'EV Charging Port & Car Porch',
        category: 'Structure',
        desc: 'Dedicated 7.4kW AC EV fast charger point inside covered parking driveway.',
        specs: 'Surge Protected Fast Charger • Heavy Duty Interlocking Pavers'
      }
    ]
  }
};

interface VastuZoneInfo {
  code: VastuZoneCode;
  name: string;
  sanskritName: string;
  element: string;
  elementIcon: string;
  deity: string;
  colorHex: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  idealRooms: string[];
  avoidRooms: string[];
  description: string;
  remedy: string;
  rotationAngle: number; // for compass needle
}

const vastuZones: Record<VastuZoneCode, VastuZoneInfo> = {
  NE: {
    code: 'NE',
    name: 'North-East',
    sanskritName: 'Ishan Kon (ଈଶାଣ)',
    element: 'Water & Divine Energy',
    elementIcon: '💧',
    deity: 'Lord Shiva & Kuber',
    colorHex: '#38bdf8',
    colorBg: 'bg-sky-500/15',
    colorBorder: 'border-sky-500/40',
    colorText: 'text-sky-300',
    idealRooms: ['Pooja Sanctum', 'Underground Water Tank', 'Main Entrance', 'Open Veranda'],
    avoidRooms: ['Toilet / Bathroom', 'Kitchen (Fire Hazard)', 'Master Bedroom', 'Heavy Store'],
    description: 'The most sacred corner of the plot. High divine magnetic vibrations enter from North-East. Keep light and spotlessly clean.',
    remedy: 'If polluted, install a copper water urn (Kalash) or silver Swastika grid.',
    rotationAngle: 45
  },
  SE: {
    code: 'SE',
    name: 'South-East',
    sanskritName: 'Agneya Kon (ଆଗ୍ନେୟ)',
    element: 'Fire (Agni Tattva)',
    elementIcon: '🔥',
    deity: 'Lord Agni',
    colorHex: '#f43f5e',
    colorBg: 'bg-rose-500/15',
    colorBorder: 'border-rose-500/40',
    colorText: 'text-rose-300',
    idealRooms: ['Modular Kitchen', 'Electric Meter Panel', 'Inverter / Generator', 'Geyser / Boiler'],
    avoidRooms: ['Underground Tank (Fire-Water Conflict)', 'Bedrooms', 'Pooja Room', 'Basement'],
    description: 'Governs digestion, vitality, and wealth flow. Cooking facing East here ensures immense household prosperity.',
    remedy: 'Place a Vastu Sun crystal or red Jasper stone near stove if kitchen is displaced.',
    rotationAngle: 135
  },
  SW: {
    code: 'SW',
    name: 'South-West',
    sanskritName: 'Nairutya Kon (ନୈଋତ)',
    element: 'Earth (Prithvi Tattva)',
    elementIcon: '⛰️',
    deity: 'Rahu / Ancestors (Pitru)',
    colorHex: '#f59e0b',
    colorBg: 'bg-amber-500/15',
    colorBorder: 'border-amber-500/40',
    colorText: 'text-amber-300',
    idealRooms: ['Master Bedroom', 'Heavy Overhead Water Tank', 'Safe / Cash Box', 'Armory / Storage'],
    avoidRooms: ['Main Entrance', 'Underground Tank (Weakens Foundation)', 'Pooja Room', 'Open Lawn'],
    description: 'Governs stability, leadership, longevity, and authority. Must be the heaviest and highest point of the house.',
    remedy: 'Keep heavy teak furniture here and paint in warm yellow/earth tones.',
    rotationAngle: 225
  },
  NW: {
    code: 'NW',
    name: 'North-West',
    sanskritName: 'Vayavya Kon (ବାୟବ୍ୟ)',
    element: 'Air (Vayu Tattva)',
    elementIcon: '💨',
    deity: 'Lord Vayu (Wind)',
    colorHex: '#10b981',
    colorBg: 'bg-emerald-500/15',
    colorBorder: 'border-emerald-500/40',
    colorText: 'text-emerald-300',
    idealRooms: ['Guest Bedroom', 'Garage / Parking', 'Unmarried Daughters Room', 'Store Room'],
    avoidRooms: ['Master Bedroom (Causes restlessness)', 'Underground Sump', 'Heavy Concrete Vault'],
    description: 'Governs movement, social relationships, and commerce. Encourages healthy movement of guests and goods.',
    remedy: 'Use light silver or white curtains to harmonize wind energy.',
    rotationAngle: 315
  },
  N: {
    code: 'N',
    name: 'North Zone',
    sanskritName: 'Uttar Diga (ଉତ୍ତର ଦିଗ)',
    element: 'Water / Opportunity',
    elementIcon: '💰',
    deity: 'Lord Kuber (Wealth)',
    colorHex: '#06b6d4',
    colorBg: 'bg-cyan-500/15',
    colorBorder: 'border-cyan-500/40',
    colorText: 'text-cyan-300',
    idealRooms: ['Treasury Locker', 'Study Room', 'Living Room', 'Green Lawn'],
    avoidRooms: ['Kitchen', 'Staircase Center', 'Heavy Debris Store'],
    description: 'Zone of new financial opportunities and career growth. Opening North windows attracts abundance.',
    remedy: 'Place a money plant in a green glass bottle or a Kuber Yantra.',
    rotationAngle: 0
  },
  E: {
    code: 'E',
    name: 'East Zone',
    sanskritName: 'Purva Diga (ପୂର୍ବ ଦିଗ)',
    element: 'Solar Light & Health',
    elementIcon: '☀️',
    deity: 'Lord Indra & Sun (Surya)',
    colorHex: '#eab308',
    colorBg: 'bg-yellow-500/15',
    colorBorder: 'border-yellow-500/40',
    colorText: 'text-yellow-300',
    idealRooms: ['Main Gate / Entrance', 'Study / Library', 'Veranda', 'Family Lounge'],
    avoidRooms: ['Toilets', 'Heavy Garbage Bin', 'Master Bedroom'],
    description: 'Zone of social connection, health, and morning UV sterilization. Keep windows wide for dawn light.',
    remedy: 'Hang a brass Sun medallion on the East wall.',
    rotationAngle: 90
  },
  S: {
    code: 'S',
    name: 'South Zone',
    sanskritName: 'Dakshin Diga (ଦକ୍ଷିଣ ଦିଗ)',
    element: 'Fame & Discipline',
    elementIcon: '🛡️',
    deity: 'Lord Yama',
    colorHex: '#ef4444',
    colorBg: 'bg-red-500/15',
    colorBorder: 'border-red-500/40',
    colorText: 'text-red-300',
    idealRooms: ['Bedrooms', 'Office Cabin', 'Staircase Block', 'Store Room'],
    avoidRooms: ['Underground Tank', 'Pooja Sanctum', 'Main Entrance (unless 4th Pada)'],
    description: 'Zone of relaxation, brand reputation, and endurance. Keep walls thick and solid.',
    remedy: 'Use heavy wooden doors and warm terracotta wall finishes.',
    rotationAngle: 180
  },
  W: {
    code: 'W',
    name: 'West Zone',
    sanskritName: 'Paschim Diga (ପଶ୍ଚିମ ଦିଗ)',
    element: 'Gain & Fulfillment',
    elementIcon: '🌊',
    deity: 'Lord Varuna (Rain god)',
    colorHex: '#8b5cf6',
    colorBg: 'bg-purple-500/15',
    colorBorder: 'border-purple-500/40',
    colorText: 'text-purple-300',
    idealRooms: ['Dining Hall', 'Children Study Room', 'Overhead Water Tank', 'Toilet Block'],
    avoidRooms: ['Main Entrance', 'Pooja Room', 'Underground Water Sump'],
    description: 'Zone of monetized gains and business returns. Ideal for family dining to foster togetherness.',
    remedy: 'Keep white/blue accents and metal art installations.',
    rotationAngle: 270
  },
  CENTER: {
    code: 'CENTER',
    name: 'Brahmasthan (Center)',
    sanskritName: 'Brahmasthan (ବ୍ରହ୍ମସ୍ଥାନ)',
    element: 'Space / Cosmos (Akasha)',
    elementIcon: '🌌',
    deity: 'Lord Brahma',
    colorHex: '#a855f7',
    colorBg: 'bg-fuchsia-500/15',
    colorBorder: 'border-fuchsia-500/40',
    colorText: 'text-fuchsia-300',
    idealRooms: ['Open Courtyard / Atrium', 'Central Sky Light', 'Light Hall'],
    avoidRooms: ['RCC Columns', 'Toilets', 'Kitchen Stove', 'Staircase Footing'],
    description: 'The cosmic heart of the house. Must remain open to sky or free from heavy pillars for energy flow.',
    remedy: 'Ensure no heavy furniture is placed directly over the center grid.',
    rotationAngle: 0
  }
};

const hotspots: Hotspot[] = [
  {
    id: 'master-bed',
    x: 28,
    y: 68,
    title: 'Master Suite (South-West)',
    category: 'Vastu',
    desc: 'Positioned strictly in Nairutya (South-West) corner for stability, health, and leadership.',
    specs: "18' x 15' • Hardwood flooring • En-suite walk-in wardrobe & bathroom",
    vastuZone: 'SW'
  },
  {
    id: 'kitchen',
    x: 72,
    y: 32,
    title: 'Modular Kitchen (South-East)',
    category: 'Vastu',
    desc: 'Placed in Agneya (Fire direction) ensuring positive household prosperity.',
    specs: "14' x 12' • Quartz countertop • Heavy-duty chimney exhaust conduit",
    vastuZone: 'SE'
  },
  {
    id: 'living',
    x: 42,
    y: 38,
    title: 'Double-Height Living Hall',
    category: 'Structure',
    desc: 'Seamless open-plan hall with 18ft high ceiling for natural ventilation & light.',
    specs: "24' x 20' • Italian marble finish • Toughened glass floor-to-ceiling windows",
    vastuZone: 'CENTER'
  },
  {
    id: 'column-grid',
    x: 18,
    y: 22,
    title: 'Reinforced Column Grid (G+2 Ready)',
    category: 'Structure',
    desc: 'Engineered with Fe-550D Tata Tiscon steel rebar and M25 grade concrete footing.',
    specs: 'Earthquake Zone-III compliant • Anti-termite treated foundation',
    vastuZone: 'NW'
  },
  {
    id: 'pooja',
    x: 78,
    y: 72,
    title: 'Pooja Sanctum (North-East)',
    category: 'Vastu',
    desc: 'Situated in Ishan (North-East) corner for divine serenity and positive energy.',
    specs: "8' x 8' • Carved marble cladding • Natural morning sunlight window",
    vastuZone: 'NE'
  },
  {
    id: 'solar-roof',
    x: 52,
    y: 15,
    title: 'Solar & Rainwater Deck',
    category: 'Energy',
    desc: 'Pre-wired rooftop infrastructure for 5kW On-Grid Solar & dual filtration rainwater storage.',
    specs: '5000L rain harvester • Thermal reflective roof insulation tiles',
    vastuZone: 'N'
  }
];

export default function CustomBuildingSection() {
  const [viewMode, setViewMode] = useState<CADViewMode>('3d-exterior');
  const [theme, setTheme] = useState<CADTheme>('cad-dark');
  const [showDimensions, setShowDimensions] = useState(true);
  const [showVastuOverlay, setShowVastuOverlay] = useState(true);
  const [showColumns, setShowColumns] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(hotspots[4]); // Pooja NE by default
  const [selectedVastuZone, setSelectedVastuZone] = useState<VastuZoneCode>('NE');
  const [plotFacing, setPlotFacing] = useState<PlotFacing>('EAST');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Exterior House View State
  const [exteriorStyle, setExteriorStyle] = useState<ExteriorStyle>('glass-duplex');
  const [lightingTime, setLightingTime] = useState<LightingTime>('dusk');
  const [selectedExteriorHotspot, setSelectedExteriorHotspot] = useState<Hotspot>(
    exteriorHouseOptions['glass-duplex'].hotspots[0]
  );

  // Estimator State
  const [plotArea, setPlotArea] = useState<number>(1800); // sq ft
  const [floors, setFloors] = useState<number>(2); // G+1
  const [qualityGrade, setQualityGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Rate calculations (INR per sq ft)
  const rates = {
    standard: 1850,
    premium: 2250,
    luxury: 2850
  };

  const totalBuiltUp = plotArea * (floors === 1 ? 0.75 : floors * 0.7);
  const estimatedCost = Math.round(totalBuiltUp * rates[qualityGrade]);
  const estimatedMonths = Math.min(18, Math.max(6, Math.round(7 + (totalBuiltUp / 600))));

  // Vastu score based on facing
  const vastuScores: Record<PlotFacing, { score: number; verdict: string; note: string }> = {
    EAST: { score: 98, verdict: 'A+ Highly Auspicious', note: 'Ideal for early morning sun, prosperity & health.' },
    NORTH: { score: 96, verdict: 'A+ Financial Growth', note: 'Ruled by Lord Kuber. Excellent for wealth creation.' },
    WEST: { score: 88, verdict: 'A Good Return', note: 'Suitable for business owners & gains.' },
    SOUTH: { score: 82, verdict: 'B+ Vastu Corrected', note: 'Requires main entrance in 4th Pada (Yama/Indra).' }
  };

  const themeClasses = {
    'cad-dark': 'bg-slate-950 text-slate-100 border-slate-800',
    'blueprint': 'bg-blue-950 text-blue-50 border-blue-800',
    'sketch-light': 'bg-slate-50 text-slate-900 border-slate-200'
  };

  const gridStroke = {
    'cad-dark': 'rgba(56, 189, 248, 0.15)',
    'blueprint': 'rgba(147, 197, 253, 0.25)',
    'sketch-light': 'rgba(100, 116, 139, 0.15)'
  };

  const wallFill = {
    'cad-dark': '#0f172a',
    'blueprint': '#1e3a8a',
    'sketch-light': '#e2e8f0'
  };

  const lineAccent = {
    'cad-dark': '#38bdf8',
    'blueprint': '#60a5fa',
    'sketch-light': '#2563eb'
  };

  const handleZoneSelect = (code: VastuZoneCode) => {
    setSelectedVastuZone(code);
    // find matching hotspot if any
    const matching = hotspots.find(h => h.vastuZone === code);
    if (matching) {
      setSelectedHotspot(matching);
    }
  };

  const currentZoneData = vastuZones[selectedVastuZone];

  return (
    <section id="custom-builds" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background CAD Ambient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <DraftingCompass className="w-4 h-4 text-blue-400" />
            <span>Turnkey Custom Construction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
            Build Your Custom Dream Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              With 3D CAD Precision & Vastu Mastery
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Own land in Bhubaneswar, Cuttack, Puri, or anywhere in Odisha? We provide complete architectural 3D drafting, Vastu layout compliance, soil engineering, and high-durability construction from foundation to key handover.
          </p>
        </div>

        {/* --- MAIN CAD BLUEPRINT & 3D SKETCH INTERACTIVE CONTAINER --- */}
        <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl mb-16">
          
          {/* Friendly Guidance Header Banner */}
          <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-2xl p-3.5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-blue-200">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong>Quick Instructions:</strong> Switch tabs below to view <strong>3D Real Outside View</strong>, <strong>3D Isometric CAD</strong>, <strong>2D Floorplan</strong>, or the <strong>Vastu Energy Compass</strong>. Click any room marker or compass direction to inspect specs & remedies.</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-mono shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive 360° Studio Active</span>
            </div>
          </div>

          {/* CAD Control Header Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            
            {/* View Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => {
                  setViewMode('3d-exterior');
                  setSelectedExteriorHotspot(exteriorHouseOptions[exteriorStyle].hotspots[0]);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
                  viewMode === '3d-exterior' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400/50' 
                    : 'text-emerald-300 hover:text-white hover:bg-slate-800/60 bg-emerald-500/10 border border-emerald-500/30'
                }`}
              >
                <Eye className="w-4 h-4 text-emerald-300" />
                <span>3D Real Outside View</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-400 text-slate-950 font-bold uppercase">Real HD</span>
              </button>

              <button
                onClick={() => setViewMode('3d-iso')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  viewMode === '3d-iso' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>3D Isometric CAD</span>
              </button>

              <button
                onClick={() => setViewMode('2d-plan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  viewMode === '2d-plan' 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>2D Architectural Plan</span>
              </button>

              <button
                onClick={() => {
                  setViewMode('vastu-grid');
                  setShowVastuOverlay(true);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
                  viewMode === 'vastu-grid' 
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' 
                    : 'text-rose-300 hover:text-white hover:bg-slate-800/60 bg-rose-500/10 border border-rose-500/30'
                }`}
              >
                <Compass className="w-4 h-4 text-rose-300 animate-spin-slow" />
                <span>Vastu Energy Compass</span>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              </button>
            </div>

            {/* Layer & Style Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Theme Toggle */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setTheme('cad-dark')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${theme === 'cad-dark' ? 'bg-slate-800 text-sky-400 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Dark CAD
                </button>
                <button
                  onClick={() => setTheme('blueprint')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${theme === 'blueprint' ? 'bg-blue-900 text-blue-200 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Classic Blueprint
                </button>
                <button
                  onClick={() => setTheme('sketch-light')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${theme === 'sketch-light' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Clean Sketch
                </button>
              </div>

              {/* Layer Toggles */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDimensions(!showDimensions)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    showDimensions ? 'bg-sky-500/20 border-sky-500/40 text-sky-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Dimensions</span>
                </button>

                <button
                  onClick={() => setShowVastuOverlay(!showVastuOverlay)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    showVastuOverlay ? 'bg-rose-500/20 border-rose-500/40 text-rose-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Vastu Grid</span>
                </button>

                <button
                  onClick={() => setShowColumns(!showColumns)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    showColumns ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Columns</span>
                </button>
              </div>

              {/* Zoom Buttons */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))} 
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.1))} 
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { setZoomLevel(1); setSelectedHotspot(hotspots[4]); }} 
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Reset View"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Dedicated Vastu Direction Selector Bar when Vastu Mode is active */}
          {viewMode === 'vastu-grid' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-gradient-to-r from-rose-950/40 via-slate-900 to-indigo-950/40 border border-rose-500/30 rounded-2xl flex flex-wrap items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
                <Compass className="w-4 h-4 text-rose-400 animate-spin-slow" />
                <span>SELECT DIRECTION TO INSPECT VASTU SHASTRA RULES:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {(Object.keys(vastuZones) as VastuZoneCode[]).map((code) => {
                  const zone = vastuZones[code];
                  const isSelected = selectedVastuZone === code;
                  return (
                    <button
                      key={code}
                      onClick={() => handleZoneSelect(code)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isSelected 
                          ? 'bg-rose-600 text-white ring-2 ring-rose-400 shadow-lg shadow-rose-600/30 scale-105' 
                          : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
                      }`}
                    >
                      <span>{zone.elementIcon}</span>
                      <span>{zone.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Interactive Workspace Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
            
            {/* The Interactive Sketch / Blueprint Stage */}
            <div className={`lg:col-span-8 rounded-2xl border p-4 sm:p-6 relative min-h-[460px] flex flex-col justify-between overflow-hidden transition-all duration-500 ${themeClasses[theme]}`}>
              
              {/* CAD Technical Watermark / Status Header */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider opacity-70 z-10 pointer-events-none mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {viewMode === '3d-exterior' ? '3D REAL HOUSE EXTERIOR RENDER • HD' : viewMode === 'vastu-grid' ? 'VASTU ENERGY HARMONIZER • 360°' : 'CAD DRAFT v4.2 • SCALE 1:50'}
                  </span>
                  <span>PLOT: 40' x 45' (1800 SQFT)</span>
                </div>
                <div className="hidden sm:block">SARASWATI REALCON ARCHITECTURAL SUITE</div>
              </div>

              {/* STAGE CANVAS (3D EXTERIOR REAL HOUSE VIEW VS SVG BLUEPRINT) */}
              {viewMode === '3d-exterior' ? (
                /* --- 3D REAL HOUSE EXTERIOR DISPLAY STAGE --- */
                <div className="relative w-full h-[380px] sm:h-[430px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between group my-auto">
                  
                  {/* Exterior Architectural Style Selector Bar */}
                  <div className="absolute top-3 left-3 right-3 z-30 flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs">
                    {/* Style Buttons */}
                    <div className="flex items-center gap-1.5 overflow-x-auto">
                      {(Object.keys(exteriorHouseOptions) as ExteriorStyle[]).map((stKey) => {
                        const styleOpt = exteriorHouseOptions[stKey];
                        const isActive = exteriorStyle === stKey;
                        return (
                          <button
                            key={stKey}
                            onClick={() => {
                              setExteriorStyle(stKey);
                              setSelectedExteriorHotspot(styleOpt.hotspots[0]);
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                              isActive 
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400' 
                                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
                            }`}
                          >
                            {styleOpt.name.split(' (')[0]}
                          </button>
                        );
                      })}
                    </div>

                    {/* Lighting Condition Toggles */}
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                      <button
                        onClick={() => setLightingTime('day')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          lightingTime === 'day' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Daylight Mode"
                      >
                        <Sun className="w-3.5 h-3.5 text-amber-400" /> Day
                      </button>
                      <button
                        onClick={() => setLightingTime('dusk')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          lightingTime === 'dusk' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Sunset Dusk Mode"
                      >
                        <Sunset className="w-3.5 h-3.5 text-rose-400" /> Sunset
                      </button>
                      <button
                        onClick={() => setLightingTime('night')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          lightingTime === 'night' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Night Lighting Mode"
                      >
                        <Moon className="w-3.5 h-3.5 text-indigo-400" /> Night
                      </button>
                    </div>
                  </div>

                  {/* Exterior Photorealistic Render Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={
                        lightingTime === 'day' 
                          ? exteriorHouseOptions[exteriorStyle].imageDay 
                          : lightingTime === 'dusk' 
                          ? exteriorHouseOptions[exteriorStyle].imageDusk 
                          : exteriorHouseOptions[exteriorStyle].imageNight
                      }
                      alt={exteriorHouseOptions[exteriorStyle].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-all duration-700 transform group-hover:scale-105"
                    />

                    {/* Ambient Lighting Overlay Filters */}
                    {lightingTime === 'dusk' && (
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-purple-950/20 to-transparent pointer-events-none mix-blend-overlay" />
                    )}
                    {lightingTime === 'night' && (
                      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 pointer-events-none" />

                    {/* Interactive Hotspots Overlaid on Exterior */}
                    {exteriorHouseOptions[exteriorStyle].hotspots.map((hs) => {
                      const isSelected = selectedExteriorHotspot?.id === hs.id;
                      return (
                        <button
                          key={hs.id}
                          onClick={() => {
                            setSelectedExteriorHotspot(hs);
                            if (hs.vastuZone) setSelectedVastuZone(hs.vastuZone);
                          }}
                          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                          style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                          title={hs.title}
                        >
                          <span className="relative flex items-center justify-center">
                            <span className={`animate-ping absolute inline-flex h-9 w-9 rounded-full opacity-75 ${
                              isSelected ? 'bg-emerald-400' : 'bg-sky-400'
                            }`} />
                            <span className={`relative inline-flex rounded-full px-3 py-1.5 items-center gap-1.5 border-2 shadow-2xl text-xs font-bold transition-all ${
                              isSelected 
                                ? 'bg-emerald-600 text-white border-white scale-110 ring-4 ring-emerald-500/50' 
                                : 'bg-slate-950/90 text-slate-100 border-sky-400 hover:bg-sky-600 hover:border-white'
                            }`}>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{hs.title.split(' ')[0]} {hs.title.split(' ')[1]}</span>
                            </span>
                          </span>
                        </button>
                      );
                    })}

                    {/* Exterior Spec Bar Banner */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
                      <div>
                        <div className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          {exteriorHouseOptions[exteriorStyle].name}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          {exteriorHouseOptions[exteriorStyle].tagline}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 shrink-0">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                          {exteriorHouseOptions[exteriorStyle].stories}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300">
                          {exteriorHouseOptions[exteriorStyle].style}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* CANVAS / SVG GRAPHIC STAGE */
                <div 
                  className="relative w-full h-[380px] sm:h-[420px] flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                
                {/* SVG Blueprint & Isometric Sketch Renderer */}
                <svg className="w-full h-full max-w-2xl max-h-[400px] overflow-visible" viewBox="0 0 600 420">
                  <defs>
                    {/* Grid Pattern */}
                    <pattern id="cadGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke={gridStroke[theme]} strokeWidth="0.8" />
                    </pattern>
                  </defs>

                  {/* Canvas Grid Background */}
                  <rect width="600" height="420" fill="url(#cadGrid)" />

                  {/* ----------------- VASTU ENERGY COMPASS MANDALA OVERLAY ----------------- */}
                  {(viewMode === 'vastu-grid' || showVastuOverlay) && (
                    <g className="transition-all duration-500">
                      {/* Vastu 9-Grid Boundary */}
                      <rect x="80" y="40" width="440" height="320" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                      
                      {/* Vastu 9-Grid Dividers */}
                      {/* Vertical Grid Lines */}
                      <line x1="226" y1="40" x2="226" y2="360" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="373" y1="40" x2="373" y2="360" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                      
                      {/* Horizontal Grid Lines */}
                      <line x1="80" y1="146" x2="520" y2="146" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="80" y1="253" x2="520" y2="253" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                      {/* Highlighted Selected Zone Box & Clickable Hotspot Rectangles */}
                      <g className="cursor-pointer">
                        {/* NW Zone */}
                        <rect 
                          x="80" y="40" width="146" height="106" 
                          fill={selectedVastuZone === 'NW' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'NW' ? '#10b981' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-emerald-500/20 transition-colors"
                          onClick={() => handleZoneSelect('NW')}
                        />
                        {/* N Zone */}
                        <rect 
                          x="226" y="40" width="147" height="106" 
                          fill={selectedVastuZone === 'N' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'N' ? '#06b6d4' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-cyan-500/20 transition-colors"
                          onClick={() => handleZoneSelect('N')}
                        />
                        {/* NE Zone */}
                        <rect 
                          x="373" y="40" width="147" height="106" 
                          fill={selectedVastuZone === 'NE' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'NE' ? '#38bdf8' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-sky-500/20 transition-colors"
                          onClick={() => handleZoneSelect('NE')}
                        />

                        {/* W Zone */}
                        <rect 
                          x="80" y="146" width="146" height="107" 
                          fill={selectedVastuZone === 'W' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'W' ? '#8b5cf6' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-purple-500/20 transition-colors"
                          onClick={() => handleZoneSelect('W')}
                        />
                        {/* CENTER Zone */}
                        <rect 
                          x="226" y="146" width="147" height="107" 
                          fill={selectedVastuZone === 'CENTER' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'CENTER' ? '#a855f7' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-fuchsia-500/20 transition-colors"
                          onClick={() => handleZoneSelect('CENTER')}
                        />
                        {/* E Zone */}
                        <rect 
                          x="373" y="146" width="147" height="107" 
                          fill={selectedVastuZone === 'E' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'E' ? '#eab308' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-yellow-500/20 transition-colors"
                          onClick={() => handleZoneSelect('E')}
                        />

                        {/* SW Zone */}
                        <rect 
                          x="80" y="253" width="146" height="107" 
                          fill={selectedVastuZone === 'SW' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'SW' ? '#f59e0b' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-amber-500/20 transition-colors"
                          onClick={() => handleZoneSelect('SW')}
                        />
                        {/* S Zone */}
                        <rect 
                          x="226" y="253" width="147" height="107" 
                          fill={selectedVastuZone === 'S' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'S' ? '#ef4444' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-red-500/20 transition-colors"
                          onClick={() => handleZoneSelect('S')}
                        />
                        {/* SE Zone */}
                        <rect 
                          x="373" y="253" width="147" height="107" 
                          fill={selectedVastuZone === 'SE' ? 'rgba(244, 63, 94, 0.3)' : 'rgba(255,255,255,0.01)'} 
                          stroke={selectedVastuZone === 'SE' ? '#f43f5e' : 'none'} 
                          strokeWidth="2" 
                          className="hover:fill-rose-500/20 transition-colors"
                          onClick={() => handleZoneSelect('SE')}
                        />
                      </g>

                      {/* Radial Energy Circle */}
                      <circle cx="300" cy="200" r="130" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                      {/* Direction Labels */}
                      <g fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                        <text x="300" y="30" fill="#06b6d4" textAnchor="middle">N (NORTH - KUBER)</text>
                        <text x="300" y="380" fill="#ef4444" textAnchor="middle">S (SOUTH - YAMA)</text>
                        <text x="65" y="204" fill="#8b5cf6" textAnchor="end">W (WEST)</text>
                        <text x="535" y="204" fill="#eab308" textAnchor="start">E (EAST)</text>

                        {/* Corner Names */}
                        <text x="500" y="60" fill="#38bdf8" textAnchor="end">NE: ISHAN (Water 💧)</text>
                        <text x="500" y="340" fill="#f43f5e" textAnchor="end">SE: AGNEYA (Fire 🔥)</text>
                        <text x="100" y="340" fill="#f59e0b" textAnchor="start">SW: NAIRUTYA (Earth ⛰️)</text>
                        <text x="100" y="60" fill="#10b981" textAnchor="start">NW: VAYAVYA (Air 💨)</text>
                      </g>
                    </g>
                  )}

                  {/* ----------------- 3D ISOMETRIC CAD SKETCH ----------------- */}
                  {viewMode === '3d-iso' && (
                    <g transform="translate(300, 190) scale(0.95)">
                      
                      {/* Foundation Base Slab */}
                      <polygon points="0,-100 200,-10 0,80 -200,-10" fill={theme === 'sketch-light' ? '#cbd5e1' : '#1e293b'} stroke={lineAccent[theme]} strokeWidth="2" />
                      
                      {/* Ground Floor Walls (Isometric extrusion) */}
                      {/* Front-Left Facing Wall */}
                      <polygon points="-200,-10 0,80 0,0 -200,-90" fill={theme === 'sketch-light' ? '#f1f5f9' : '#0f172a'} stroke={lineAccent[theme]} strokeWidth="1.5" />
                      {/* Front-Right Facing Wall */}
                      <polygon points="0,80 200,-10 200,-90 0,0" fill={theme === 'sketch-light' ? '#e2e8f0' : '#1e293b'} stroke={lineAccent[theme]} strokeWidth="1.5" />
                      
                      {/* Ground Floor Slab Divider */}
                      <polygon points="0,0 200,-90 0,-170 -200,-90" fill={theme === 'sketch-light' ? '#cbd5e1' : '#334155'} stroke={lineAccent[theme]} strokeWidth="2" />

                      {/* First Floor Walls */}
                      <polygon points="-170,-105 0,-30 0,-105 -170,-180" fill={theme === 'sketch-light' ? '#f8fafc' : '#0284c7'} opacity="0.85" stroke={lineAccent[theme]} strokeWidth="1.5" />
                      <polygon points="0,-30 170,-105 170,-180 0,-105" fill={theme === 'sketch-light' ? '#f1f5f9' : '#0369a1'} opacity="0.85" stroke={lineAccent[theme]} strokeWidth="1.5" />

                      {/* Terrace Roof Top */}
                      <polygon points="0,-105 170,-180 0,-250 -170,-180" fill={theme === 'sketch-light' ? '#94a3b8' : '#38bdf8'} opacity="0.9" stroke={lineAccent[theme]} strokeWidth="2" />

                      {/* Windows & Architectural Balcony Wireframe */}
                      {/* Ground Floor Entrance Door */}
                      <polygon points="-40,40 10,62 10,20 -40,-2" fill="#38bdf8" opacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
                      {/* First Floor Glass Balcony Railing */}
                      <polygon points="-120,-60 -10,-10 -10,-35 -120,-85" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" />
                      
                      {/* Structural Wireframe Grid Lines */}
                      <line x1="0" y1="-250" x2="0" y2="80" stroke={lineAccent[theme]} strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="-200" y1="-10" x2="200" y2="-10" stroke={lineAccent[theme]} strokeWidth="1" strokeDasharray="4 2" />

                      {/* Columns if enabled */}
                      {showColumns && (
                        <g>
                          <line x1="-200" y1="-10" x2="-200" y2="-90" stroke="#f59e0b" strokeWidth="4" />
                          <line x1="200" y1="-10" x2="200" y2="-90" stroke="#f59e0b" strokeWidth="4" />
                          <line x1="0" y1="80" x2="0" y2="0" stroke="#f59e0b" strokeWidth="4" />
                          <line x1="0" y1="-170" x2="0" y2="-250" stroke="#f59e0b" strokeWidth="4" />
                        </g>
                      )}

                      {/* Dimension Indicators on Isometric View */}
                      {showDimensions && (
                        <g fontSize="11" fontFamily="monospace" fill={lineAccent[theme]}>
                          <text x="-120" y="55" textAnchor="middle" transform="rotate(22)">45'-0" FRONTAGE</text>
                          <text x="110" y="55" textAnchor="middle" transform="rotate(-22)">40'-0" DEPTH</text>
                          <text x="-215" y="-50" textAnchor="end">G+1 ELEVATION (26' HEIGHT)</text>
                        </g>
                      )}
                    </g>
                  )}

                  {/* ----------------- 2D ARCHITECTURAL FLOORPLAN ----------------- */}
                  {(viewMode === '2d-plan' || viewMode === 'vastu-grid') && (
                    <g transform="translate(80, 50)">
                      {/* External Boundary Walls */}
                      <rect x="0" y="0" width="440" height="320" fill={wallFill[theme]} stroke={lineAccent[theme]} strokeWidth="4" />
                      
                      {/* Room Partition Walls */}
                      {/* Living & Kitchen Divider */}
                      <line x1="260" y1="0" x2="260" y2="320" stroke={lineAccent[theme]} strokeWidth="3" />
                      {/* Master Bed & Pooja Divider */}
                      <line x1="0" y1="180" x2="260" y2="180" stroke={lineAccent[theme]} strokeWidth="3" />
                      <line x1="260" y1="220" x2="440" y2="220" stroke={lineAccent[theme]} strokeWidth="3" />

                      {/* Door Swings */}
                      <path d="M 260 180 A 40 40 0 0 1 220 180" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 260 220 A 40 40 0 0 1 300 220" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                      {/* Room Labels */}
                      <g textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill={theme === 'sketch-light' ? '#0f172a' : '#f8fafc'}>
                        {/* Living Room */}
                        <text x="130" y="90">LIVING & DINING HALL</text>
                        <text x="130" y="110" fontSize="10" opacity="0.7" fill={lineAccent[theme]}>24'-0" x 20'-0"</text>

                        {/* Kitchen */}
                        <text x="350" y="90">KITCHEN (SE)</text>
                        <text x="350" y="110" fontSize="10" opacity="0.7" fill={lineAccent[theme]}>14'-0" x 12'-0"</text>

                        {/* Master Bedroom */}
                        <text x="130" y="240">MASTER BEDROOM (SW)</text>
                        <text x="130" y="260" fontSize="10" opacity="0.7" fill={lineAccent[theme]}>18'-0" x 15'-0"</text>

                        {/* Pooja Room */}
                        <text x="350" y="265">POOJA (NE)</text>
                        <text x="350" y="285" fontSize="10" opacity="0.7" fill={lineAccent[theme]}>8'-0" x 8'-0"</text>
                      </g>

                      {/* Columns if enabled */}
                      {showColumns && (
                        <g fill="#f59e0b">
                          <rect x="-4" y="-4" width="10" height="10" />
                          <rect x="255" y="-4" width="10" height="10" />
                          <rect x="434" y="-4" width="10" height="10" />
                          <rect x="-4" y="175" width="10" height="10" />
                          <rect x="255" y="175" width="10" height="10" />
                          <rect x="434" y="215" width="10" height="10" />
                          <rect x="-4" y="314" width="10" height="10" />
                          <rect x="255" y="314" width="10" height="10" />
                          <rect x="434" y="314" width="10" height="10" />
                        </g>
                      )}

                      {/* Dimensions Lines */}
                      {showDimensions && (
                        <g stroke={lineAccent[theme]} strokeWidth="1" fontSize="10" fontFamily="monospace" fill={lineAccent[theme]}>
                          {/* Top Width Dimension */}
                          <line x1="0" y1="-15" x2="440" y2="-15" />
                          <line x1="0" y1="-20" x2="0" y2="-10" />
                          <line x1="440" y1="-20" x2="440" y2="-10" />
                          <text x="220" y="-20" textAnchor="middle">44'-0" (WIDTH)</text>

                          {/* Left Height Dimension */}
                          <line x1="-15" y1="0" x2="-15" y2="320" />
                          <line x1="-20" y1="0" x2="-10" y2="0" />
                          <line x1="-20" y1="320" x2="-10" y2="320" />
                          <text x="-25" y="160" textAnchor="middle" transform="rotate(-90 -25 160)">32'-0" (DEPTH)</text>
                        </g>
                      )}
                    </g>
                  )}
                </svg>

                {/* Hotspot Markers Overlaid on Top */}
                {hotspots.map((hs) => {
                  const isSelected = selectedHotspot?.id === hs.id;
                  const isZoneMatch = hs.vastuZone === selectedVastuZone;
                  return (
                    <button
                      key={hs.id}
                      onClick={() => {
                        setSelectedHotspot(hs);
                        if (hs.vastuZone) setSelectedVastuZone(hs.vastuZone);
                      }}
                      className={`absolute z-30 transition-all transform -translate-x-1/2 -translate-y-1/2 group`}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      title={hs.title}
                    >
                      <span className="relative flex items-center justify-center">
                        <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-75 ${
                          hs.category === 'Vastu' ? 'bg-rose-400' :
                          hs.category === 'Structure' ? 'bg-amber-400' :
                          hs.category === 'Energy' ? 'bg-emerald-400' : 'bg-blue-400'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center border-2 shadow-lg font-bold text-xs transition-transform ${
                          isSelected || isZoneMatch ? 'scale-125 ring-4 ring-rose-500/60' : 'hover:scale-110'
                        } ${
                          hs.category === 'Vastu' ? 'bg-rose-600 text-white border-rose-300' :
                          hs.category === 'Structure' ? 'bg-amber-600 text-white border-amber-300' :
                          hs.category === 'Energy' ? 'bg-emerald-600 text-white border-emerald-300' : 'bg-blue-600 text-white border-blue-300'
                        }`}>
                          {hs.title[0]}
                        </span>
                      </span>
                    </button>
                  );
                })}

              </div>
              )}

              {/* Blueprint Footer / Quick Legend */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs font-mono opacity-80 z-10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Vastu Alignment</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> RCC Column</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Eco Green</span>
                </div>
                <div className="text-slate-400">Click markers or compass zones to inspect</div>
              </div>

            </div>

            {/* Interactive Inspector Sidebar (Details on Clicked Hotspot or Vastu Zone) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Plot Facing Selector & Vastu Score Widget */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-rose-400" /> Plot Entrance Direction
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    Score: {vastuScores[plotFacing].score}/100
                  </span>
                </div>

                {/* 4 Direction Radio Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {(['EAST', 'NORTH', 'WEST', 'SOUTH'] as PlotFacing[]).map((dir) => (
                    <button
                      key={dir}
                      onClick={() => setPlotFacing(dir)}
                      className={`py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        plotFacing === dir 
                          ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {dir}
                    </button>
                  ))}
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                  <div className="font-bold text-rose-300 mb-0.5">{vastuScores[plotFacing].verdict}</div>
                  <div className="text-slate-400 text-[11px]">{vastuScores[plotFacing].note}</div>
                </div>
              </div>

              {/* INSPECTION CARD (3D EXTERIOR VS VASTU VS CAD HOTSPOT) */}
              <AnimatePresence mode="wait">
                {viewMode === '3d-exterior' ? (
                  <motion.div
                    key={selectedExteriorHotspot.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" /> Exterior Feature
                        </span>
                        <span className="text-xs font-mono text-slate-500">ID: #{selectedExteriorHotspot.id}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 font-heading">
                        {selectedExteriorHotspot.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {selectedExteriorHotspot.desc}
                      </p>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-emerald-400" /> Exterior Finish Specification
                        </div>
                        <p className="text-xs text-emerald-200 font-mono leading-relaxed">
                          {selectedExteriorHotspot.specs}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Weather Resistance</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Odisha Monsoon Guard
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Vastu Alignment</span>
                        <span className="text-rose-300 font-bold">100% Facade Harmony</span>
                      </div>
                    </div>
                  </motion.div>
                ) : viewMode === 'vastu-grid' ? (
                  <motion.div
                    key={currentZoneData.code}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Header Badge & Rotating Compass Needle Widget */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${currentZoneData.colorBg} ${currentZoneData.colorText} ${currentZoneData.colorBorder}`}>
                          {currentZoneData.elementIcon} {currentZoneData.name} Zone
                        </span>
                        <span className="text-xs font-mono text-slate-500">Code: #{currentZoneData.code}</span>
                      </div>

                      {/* Visual 360° Vastu Compass Needle Widget */}
                      <div className="flex items-center gap-3.5 bg-slate-950 p-3 rounded-2xl border border-slate-800 mb-4">
                        <div className="relative w-14 h-14 rounded-full bg-slate-900 border-2 border-rose-500/40 flex items-center justify-center shrink-0 shadow-inner">
                          {/* Cardinal Markings */}
                          <span className="absolute top-0.5 text-[8px] font-bold text-sky-400">N</span>
                          <span className="absolute right-1 text-[8px] font-bold text-yellow-400">E</span>
                          <span className="absolute bottom-0.5 text-[8px] font-bold text-rose-400">S</span>
                          <span className="absolute left-1 text-[8px] font-bold text-purple-400">W</span>
                          
                          {/* Rotating Magnetic Needle */}
                          <div 
                            className="w-1 h-10 transition-transform duration-700 ease-out flex flex-col justify-between items-center z-10"
                            style={{ transform: `rotate(${currentZoneData.rotationAngle}deg)` }}
                          >
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[12px] border-b-rose-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white z-20 shadow-md" />
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[12px] border-t-slate-400" />
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-rose-400" /> Compass Aligned: {currentZoneData.rotationAngle}°
                          </div>
                          <div className="text-[11px] text-slate-300 font-medium">{currentZoneData.name} ({currentZoneData.sanskritName})</div>
                          <div className="text-[10px] text-sky-400 font-mono mt-0.5">Energy Stream: {currentZoneData.element}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 font-heading">
                        {currentZoneData.sanskritName}
                      </h3>
                      <div className="text-xs font-mono text-sky-400 mb-4">
                        Element: {currentZoneData.element} • Deity: {currentZoneData.deity}
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {currentZoneData.description}
                      </p>

                      {/* Ideal vs Avoid Grid */}
                      <div className="space-y-3 mb-5">
                        <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/20">
                          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ideal Architecture Placement
                          </div>
                          <ul className="grid grid-cols-2 gap-1.5">
                            {currentZoneData.idealRooms.map((room, idx) => (
                              <li key={idx} className="text-xs text-slate-200 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {room}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-950 p-3.5 rounded-xl border border-rose-500/20">
                          <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Strictly Avoid Building Here
                          </div>
                          <ul className="grid grid-cols-2 gap-1.5">
                            {currentZoneData.avoidRooms.map((room, idx) => (
                              <li key={idx} className="text-xs text-slate-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> {room}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Vastu Shastra Remedy */}
                      <div className="bg-rose-950/30 p-3.5 rounded-xl border border-rose-500/30 mb-2">
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Vastu Shastra Remedy
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {currentZoneData.remedy}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                ) : selectedHotspot ? (
                  <motion.div
                    key={selectedHotspot.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          selectedHotspot.category === 'Vastu' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                          selectedHotspot.category === 'Structure' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' :
                          selectedHotspot.category === 'Energy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                        }`}>
                          {selectedHotspot.category} Spec
                        </span>
                        <span className="text-xs font-mono text-slate-500">ID: #{selectedHotspot.id}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 font-heading">
                        {selectedHotspot.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {selectedHotspot.desc}
                      </p>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-blue-400" /> Technical Specification
                        </div>
                        <p className="text-xs text-sky-200 font-mono leading-relaxed">
                          {selectedHotspot.specs}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Quality Standard</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> IS Code Compliant
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Vastu Index Score</span>
                        <span className="text-blue-400 font-bold">100% Perfect</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-slate-400 flex flex-col items-center justify-center min-h-[300px]">
                    <Maximize2 className="w-10 h-10 text-slate-600 mb-3 animate-pulse" />
                    <p className="text-sm font-medium">Select any hotspot on the 3D CAD layout to inspect architectural & Vastu specifications.</p>
                  </div>
                )}
              </AnimatePresence>

              {/* Consultation CTA Box */}
              <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">Got Custom Floorplan Ideas?</h4>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      Our senior architects draw personalized 2D/3D CAD blueprints tailored specifically to your plot dimensions and family needs.
                    </p>
                    <a
                      href="#estimate-calculator"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Calculate Cost Estimate Below <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* --- FOUR PILLARS OF CUSTOM BUILDING PROCESS --- */}
        <div className="relative mb-20">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-10 bg-gradient-to-r from-blue-500/20 via-amber-500/20 via-emerald-500/20 to-purple-500/20 z-0 pointer-events-none">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 via-amber-400 via-emerald-400 to-purple-400 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* PHASE 01 CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 hover:border-blue-500/60 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-12 h-12 bg-blue-500/15 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40"
                  >
                    <DraftingCompass className="w-6 h-6" />
                  </motion.div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    Step 01
                  </span>
                </div>

                <div className="text-xs font-mono text-blue-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  PHASE 01
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors font-heading">
                  3D CAD & Vastu Design
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Custom architectural drafting, 3D exterior renders, interior zoning, and local municipality sanction drawing support.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Timeline</span>
                <span className="text-blue-300 font-bold">1 - 2 Weeks</span>
              </div>

              {/* Bottom animated beam */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* PHASE 02 CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 hover:border-amber-500/60 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.3 }}
                    className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/40"
                  >
                    <HardHat className="w-6 h-6" />
                  </motion.div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Step 02
                  </span>
                </div>

                <div className="text-xs font-mono text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  PHASE 02
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-heading">
                  Structural Foundation
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Soil testing report, Tata Tiscon Fe-550D rebar steel, M25 grade readymix concrete, and seismic resistant column grids.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Timeline</span>
                <span className="text-amber-300 font-bold">2 - 3 Months</span>
              </div>

              {/* Bottom animated beam */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* PHASE 03 CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/60 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.6 }}
                    className="w-12 h-12 bg-emerald-500/15 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/40"
                  >
                    <Zap className="w-6 h-6" />
                  </motion.div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Step 03
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PHASE 03
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors font-heading">
                  Finishes & MEP Conduits
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Concealed Polycab copper wiring, Kohler plumbing fixtures, 3-layer terrace waterproofing, and premium vitrified tiles.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Timeline</span>
                <span className="text-emerald-300 font-bold">3 - 4 Months</span>
              </div>

              {/* Bottom animated beam */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* PHASE 04 CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/60 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
                    className="w-12 h-12 bg-purple-500/15 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/40"
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </motion.div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    Step 04
                  </span>
                </div>

                <div className="text-xs font-mono text-purple-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  PHASE 04
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors font-heading">
                  Turnkey Key Handover
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Deep cleaning, live CCTV monitoring during build, 10-year structural warranty card, and zero-delay delivery commitment.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Warranty</span>
                <span className="text-purple-300 font-bold">10-Year Guarantee</span>
              </div>

              {/* Bottom animated beam */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

          </div>
        </div>

        {/* --- INTERACTIVE COST ESTIMATOR CALCULATOR --- */}
        <div id="estimate-calculator" className="bg-gradient-to-r from-blue-900/30 via-slate-950 to-indigo-950/30 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold border border-blue-500/20 uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" /> Instant Cost & Timeline Estimator
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Estimate Construction Budget On Your Land
              </h3>

              {/* Slider 1: Plot Area */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">Plot Area (Sq. Ft.)</label>
                  <span className="text-sm font-mono font-bold text-blue-400">{plotArea.toLocaleString()} sq ft</span>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="5000" 
                  step="100" 
                  value={plotArea} 
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>800 sq ft (Compact)</span>
                  <span>2,500 sq ft (Standard)</span>
                  <span>5,000 sq ft (Villa)</span>
                </div>
              </div>

              {/* Slider 2: Number of Floors */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">Structure Height / Floors</label>
                  <span className="text-sm font-mono font-bold text-blue-400">
                    {floors === 1 ? 'Single Story (Ground Only)' : floors === 2 ? 'G + 1 (Duplex)' : 'G + 2 (Triplex)'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFloors(num)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        floors === num 
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30' 
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {num === 1 ? 'Single Floor' : num === 2 ? 'G+1 Duplex' : 'G+2 Triplex'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quality Grade Selection */}
              <div>
                <label className="text-sm font-semibold text-slate-300 block mb-2">Material & Finish Grade</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'standard', name: 'Standard Grade', rate: '₹1,850 / sqft' },
                    { key: 'premium', name: 'Premium Grade', rate: '₹2,250 / sqft' },
                    { key: 'luxury', name: 'Ultra Luxury', rate: '₹2,850 / sqft' }
                  ].map((grade) => (
                    <button
                      key={grade.key}
                      type="button"
                      onClick={() => setQualityGrade(grade.key as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        qualityGrade === grade.key 
                          ? 'bg-blue-600/20 border-blue-500 text-white' 
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">{grade.name}</div>
                      <div className="text-[11px] font-mono text-blue-400">{grade.rate}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimator Summary Output Box */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Calculated Estimate</span>
                
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-1">
                  ₹{(estimatedCost / 100000).toFixed(2)} Lakhs
                </div>
                <div className="text-xs text-slate-400 font-mono mb-6">
                  Approx. ₹{estimatedCost.toLocaleString('en-IN')} incl. GST & Labour
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Built-Up Area</span>
                    <span className="font-mono font-bold text-white">{Math.round(totalBuiltUp).toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Target Handover Timeline</span>
                    <span className="font-mono font-bold text-emerald-400">{estimatedMonths} Months</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>3D CAD & Vastu Drawings</span>
                    <span className="font-bold text-blue-400">Included Free</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-600/25"
                >
                  Book Architect Site Visit <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No obligation consultation. Free land survey available across Bhubaneswar & Cuttack.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
