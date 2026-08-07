import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Award, 
  Users, 
  Play, 
  Sparkles,
  MapPin
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  storyType: 'Custom House Build' | 'Luxury Flat Buyer' | 'Land Plot Owner';
  quote: string;
  projectDetails: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Debasis Mohapatra & Family',
    role: 'Senior Orthopedic Surgeon',
    location: 'Jaydev Vihar, Bhubaneswar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    storyType: 'Custom House Build',
    quote: 'Saraswati Realcon constructed our 3-storey G+2 custom duplex house in Jaydev Vihar. The 3D CAD visualization was 100% accurate, and they delivered with Tata Tiscon steel and M25 concrete without a single day of delay!',
    projectDetails: 'Built G+2 Custom Duplex • 2,400 Sq.Ft'
  },
  {
    id: 'test-2',
    name: 'Soumya Ranjan Patnaik',
    role: 'VP Software Engineering (IT)',
    location: 'Patia Infocity, Bhubaneswar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    storyType: 'Luxury Flat Buyer',
    quote: 'We purchased our 3 BHK flat through Saraswati Realcon. They handled the entire SBI home loan paperwork and registry process seamlessly. 100% transparent pricing and genuine Vastu layout.',
    projectDetails: '3 BHK Saraswati Crown Residency'
  },
  {
    id: 'test-3',
    name: 'Anjali & Rajesh Tripathy',
    role: 'Govt. Education Officers',
    location: 'CDA Sector 9, Cuttack',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    storyType: 'Land Plot Owner',
    quote: 'Finding 100% legally clear title BDA approved plots in Bhubaneswar/Cuttack used to be stressful. Saraswati Realcon provided plot encumbrance certificates, 30 ft pitch road, and instant mutation!',
    projectDetails: '1,800 Sq.Ft Green Enclave Plot'
  }
];

export default function Testimonials({ onScheduleVisit }: { onScheduleVisit?: () => void }) {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Architectural Picture Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" 
          alt="Completed Luxury Villa Homes"
          className="w-full h-full object-cover object-center scale-105 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Client Success Stories & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Trusted by Over 250+ Families <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
              Across Odisha
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read verified reviews from doctors, IT professionals, and home buyers who built their dream houses and invested in properties with Saraswati Realcon.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-heading mb-1">250+</div>
            <div className="text-xs text-slate-400 font-mono">Homes Built & Delivered</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading mb-1">100%</div>
            <div className="text-xs text-slate-400 font-mono">Legal Clearance Title</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading mb-1">15+ Yrs</div>
            <div className="text-xs text-slate-400 font-mono">Industry Leadership</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-heading mb-1">4.9 / 5</div>
            <div className="text-xs text-slate-400 font-mono">Customer Rating</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950 text-blue-300 border border-slate-800">
                    {item.storyType}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-700 mb-3" />

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-white text-sm font-heading">{item.name}</h4>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                  <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RERA & Trust Stamp Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                100% Legal & RERA Approved Transparency
              </h3>
              <p className="text-xs text-slate-300">
                All land plot layouts, custom construction blueprints, and flat projects are ORERA registered with clear title chain verification.
              </p>
            </div>
          </div>

          <button
            onClick={() => onScheduleVisit ? onScheduleVisit() : null}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xs shrink-0 shadow-lg shadow-blue-600/30 transition-colors"
          >
            Book Free Site Visit & Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
