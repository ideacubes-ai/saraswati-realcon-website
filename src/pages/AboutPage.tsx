import AboutUsSection from '../components/AboutUsSection';
import Testimonials from '../components/Testimonials';
import { Award, MapPin, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* About Page Hero Banner */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
              About Saraswati Realcon <br />
              <span className="text-blue-500">Pvt. Ltd.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Odisha's trusted name in custom home construction, BDA/CDA approved plot layouts, and premium residential flat developments. Founded on a core ethos of 100% legal clarity, Vastu compliance, and engineering precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onScheduleVisit}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
              >
                Schedule Corporate Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/custom-builds"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2"
              >
                View Construction Packages
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Component */}
      <AboutUsSection onScheduleVisit={onScheduleVisit} />

      {/* Testimonials */}
      <Testimonials onScheduleVisit={onScheduleVisit} />
    </div>
  );
}
