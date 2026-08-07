import FeaturedProperties from '../components/FeaturedProperties';
import { MapPin, Building2, Sparkles } from 'lucide-react';

export default function PropertiesPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 text-slate-900">
      {/* Top Hero Banner with Real Estate Background Image */}
      <div className="relative py-16 lg:py-20 overflow-hidden border-b border-slate-200">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Real Estate Properties in Odisha"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for crystal clear readability while showing the real estate image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-blue-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-400/40 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Verified Clear-Title Properties in Odisha</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Flats, Luxury Villas & BDA Approved Plots
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            Explore verified properties across Bhubaneswar, Cuttack, Puri, Rourkela, Sambalpur, Berhampur, Balasore, Jharsuguda, and key corridors in Odisha with 100% RERA & Vastu compliance.
          </p>
        </div>
      </div>

      <FeaturedProperties onScheduleVisit={onScheduleVisit} />
    </div>
  );
}
