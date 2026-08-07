import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  Compass, 
  Briefcase, 
  Sparkles, 
  ArrowRight,
  HardHat,
  FileCheck,
  MapPin
} from 'lucide-react';

export default function AboutUsSection({ onScheduleVisit }: { onScheduleVisit?: () => void }) {
  const corePillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: '100% Legal Transparency & ORERA',
      description: 'Every project and plot parcel is 100% ORERA registered with clear encumbrance certificates, BDA/CDA/PKDA plan approvals, and guaranteed bank loan eligibility.'
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      title: 'Vastu-Compliant Architecture',
      description: 'Our certified Vastu architects craft spatial layouts aligned with cosmic geometry, ensuring natural ventilation, positive energy flow, and optimal sunlight.'
    },
    {
      icon: <HardHat className="w-6 h-6 text-amber-600" />,
      title: 'Grade-A Material Standards',
      description: 'We construct exclusively using Tata Tiscon TMT Steel, UltraTech Cement, Kajaria Vitrified Tiles, Jaguar Fittings, and Finolex Flame-Retardant Wiring.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Fixed Budget & On-Time Handover',
      description: 'Contractual timeline commitments with live mobile progress tracking. We guarantee zero budget escalation from foundation stone to key handover.'
    }
  ];

  const milestones = [
    { value: '500+', label: 'Custom Homes Built', subtext: 'Turnkey residential villas' },
    { value: '1,200+', label: 'Verified Plots Delivered', subtext: 'Clear title & mutated lands' },
    { value: '15+', label: 'Years Legacy', subtext: 'Unblemished reputation in Odisha' },
    { value: '12+', label: 'Cities Covered', subtext: 'Bhubaneswar, Cuttack, Puri & beyond' }
  ];

  const leadership = [
    {
      name: 'Er. Rajesh Kumar Mohanty',
      role: 'Managing Director & Founder',
      experience: '20+ Yrs Experience',
      bio: 'Pioneer in Odisha’s real estate development. Former senior structural consultant with a passion for architectural excellence and ethical land development.'
    },
    {
      name: 'Er. Soumya Ranjan Das',
      role: 'Head of Architecture & Construction',
      experience: '15+ Yrs Experience',
      bio: 'Expert structural engineer leading turnkey design, 3D BIM modeling, and rigorous quality inspection across all live project sites.'
    },
    {
      name: 'Adv. Priyadarshini Sahoo',
      role: 'Chief Legal & Compliance Officer',
      experience: '12+ Yrs Experience',
      bio: 'Specializing in Odisha land laws, ORERA clearances, revenue record verification, and smooth property registration for homebuyers.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background subtleties */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>About Saraswati Realcon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Building Odisha's Future with <br className="hidden sm:inline" />
            <span className="text-blue-600">Integrity, Quality & Vastu Precision</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Saraswati Realcon Pvt. Ltd. is Odisha’s premier real estate development and custom construction firm. We bridge the gap between dream home concepts and turnkey engineering reality across Bhubaneswar, Cuttack, Puri, Rourkela, Sambalpur, and 12+ districts.
          </p>
        </div>

        {/* Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-xs relative">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 tracking-widest block mb-2">Our Corporate Mission</span>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 mb-4">
                Transparent Real Estate Without Compromise
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Founded with a commitment to eliminate land title ambiguities and construction quality compromises in Odisha, Saraswati Realcon offers end-to-end solutions—from clear-title BDA/CDA approved plot sales to bespoke villa construction.
              </p>
              
              <ul className="space-y-3">
                {[
                  '100% Revenue record verification (Khatian, Mutation, Encumbrance)',
                  'Custom 3D layout customization before foundation excavation',
                  'Bi-weekly digital site progress reports for remote & NRI clients',
                  'Direct builder transparency with no middleman margins'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6"
          >
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-blue-400 block mb-1">
                    {m.value}
                  </span>
                  <span className="text-base font-bold text-slate-100 block mb-1">
                    {m.label}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-slate-800">
                  {m.subtext}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3">
              Why Homeowners & Investors Trust Us
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered standards designed specifically for Odisha's coastal climate, soil geology, and cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-2xs mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-blue-600" /> Leadership Team
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3">
              Guided by Technical Excellence
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Our executive board brings together decades of civil engineering, legal mastery, and architectural innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center font-heading font-extrabold text-xl">
                    {person.name.split(' ')[1]?.[0] || 'S'}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {person.experience}
                  </span>
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-1">
                  {person.name}
                </h4>
                <p className="text-xs font-bold text-slate-500 mb-3 font-mono">
                  {person.role}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono font-bold mb-4 border border-blue-500/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>ORERA Regd. No: RP/19/2021/00542</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
                Ready to Discuss Your Property & Home Building Requirements?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our senior architectural consultants for a free site consultation, 3D floor plan review, or land title verification.
              </p>
            </div>

            <button
              onClick={onScheduleVisit}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 shrink-0"
            >
              Book Free Site Visit <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
