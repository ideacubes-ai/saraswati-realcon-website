import CustomBuildingSection from '../components/CustomBuildingSection';
import { Hammer, Sparkles } from 'lucide-react';

export default function CustomBuildsPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white">
      {/* Page Hero Banner with Vibrant Architectural Villa Picture */}
      <div className="relative py-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80" 
            alt="Turnkey Luxury Villa Construction"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Balanced gradient overlay letting the villa image show through vividly */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 rounded-full text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <Hammer className="w-4 h-4 text-amber-400" />
            <span>Turnkey Custom Villa & Home Construction</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Construct Your Dream Villa on Your Own Plot
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            From 3D elevation renders and Vastu architectural design to foundation digging and key handover. Choose from our predefined high-durability building packages or request a custom architectural consultation.
          </p>
        </div>
      </div>

      <CustomBuildingSection />
    </div>
  );
}
