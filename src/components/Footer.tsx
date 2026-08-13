import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({ onScheduleVisit }: { onScheduleVisit?: () => void }) {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background Architectural Picture Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80" 
          alt="Saraswati Realcon Corporate Architecture"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/95 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Brand column */}
        <div className="lg:col-span-5 relative">
          <div className="mb-6">
            <Link to="/" className="inline-block group">
              <div className="h-18 sm:h-22 w-auto rounded-xl overflow-hidden flex items-center shrink-0 bg-white p-2.5 shadow-xs border border-slate-200">
                <img 
                  src="/Saraswati-Realcon-Web-Logo.png" 
                  alt="Saraswati Realcon Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </Link>
          </div>
          <p className="text-slate-300 font-sans leading-relaxed max-w-md mb-6 text-base">
            Odisha's premier real estate development & custom construction company. Specializing in 100% Vastu compliant custom home builds, clear title land plots, and luxury flat sales.
          </p>



          <button
            onClick={onScheduleVisit}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-colors cursor-pointer"
          >
            Schedule Free Site Visit Cab Pickup <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Contact info column */}
        <div className="lg:col-span-4 lg:col-start-6">
          <h4 className="font-heading font-bold mb-6 text-white uppercase tracking-wider text-sm text-blue-400 font-mono">
            Corporate Offices
          </h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
              <MapPin className="w-5 h-5 shrink-0 text-blue-400 mt-0.5" />
              <div>
                <strong className="text-white block font-bold text-sm">Bhubaneswar HQ:</strong>
                Plot No - 58, Bapuji Nagar, 2nd Floor, Lane No - 4, Near Federal Bank, Bhubaneswar - 751009, Odisha
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800">
              <MapPin className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
              <div>
                <strong className="text-white block font-bold text-sm">Cuttack Office:</strong>
                Sector 9, CDA Market Complex, Cuttack, Odisha 753014
              </div>
            </li>
            <li className="flex items-center gap-3 text-slate-200 font-mono text-sm">
              <Phone className="w-4 h-4 shrink-0 text-emerald-400" />
              <a href="tel:+917008485542" className="hover:text-amber-400 transition-colors">+91 7008485542</a>
            </li>
            <li className="flex items-center gap-3 text-slate-200 font-mono text-sm">
              <Mail className="w-4 h-4 shrink-0 text-blue-400" />
              <a href="mailto:sarasawatirealcon@gmail.com" className="hover:text-amber-400 transition-colors">sarasawatirealcon@gmail.com</a>
            </li>
          </ul>
        </div>
        
        {/* Quick Links column */}
        <div className="lg:col-span-3 text-slate-300">
          <h4 className="font-heading font-bold mb-6 text-white uppercase tracking-wider text-sm text-blue-400 font-mono">
            Navigation
          </h4>
          <ul className="space-y-3 font-medium text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors block">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors block">Services & Approvals</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors block">About Us & Vision</Link></li>
            <li><Link to="/custom-builds" className="hover:text-blue-400 transition-colors block">Custom Construction & 3D Renders</Link></li>
            <li><Link to="/properties" className="hover:text-blue-400 transition-colors block">Featured Flats & Land Plots</Link></li>
            <li><Link to="/calculator" className="hover:text-blue-400 transition-colors block">Home Loan EMI & Cost Calculator</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors block">Contact & Site Visit</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center lg:text-left text-slate-400 text-sm font-mono flex flex-col lg:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Saraswati Realcon Pvt. Ltd. All rights reserved. RERA Odisha Registered.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-200 transition-colors">ORERA Disclosures</a>
        </div>
      </div>
    </footer>
  );
}


