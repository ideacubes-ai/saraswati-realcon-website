import { useState } from 'react';
import { 
  Building2, 
  Ruler, 
  FileCheck, 
  Compass, 
  HardHat, 
  ShieldCheck, 
  Landmark, 
  Key, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Car, 
  Layers, 
  Home, 
  MapPin, 
  Briefcase, 
  Paintbrush, 
  PhoneCall 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  const [activeTab, setActiveTab] = useState<'all' | 'construction' | 'legal' | 'interiors' | 'plots'>('all');

  const services = [
    {
      id: 'turnkey-construction',
      category: 'construction',
      title: 'Turnkey Residential Villa Construction',
      icon: <HardHat className="w-6 h-6 text-blue-600" />,
      badge: 'Most Popular',
      shortDesc: 'Complete end-to-end villa construction on your land plot with Grade-A materials & 100% fixed budget guarantee.',
      features: [
        'Free Architectural 2D & 3D BIM Floor Plans',
        'Vastu-compliant spatial planning & room placement',
        'Tata Tiscon TMT Steel & UltraTech/Dalmia Cement',
        'Dedicated site engineer & live mobile photo updates',
        '10-Year structural warranty & 1-Year maintenance'
      ],
      ctaText: 'Explore Construction Packages',
      ctaLink: '/custom-builds'
    },
    {
      id: 'architectural-3d',
      category: 'construction',
      title: 'Architectural 3D Renders & Structural Design',
      icon: <Ruler className="w-6 h-6 text-indigo-600" />,
      shortDesc: 'Photorealistic 3D exterior & interior renderings, structural stability calculations, and plumbing/electrical layouts.',
      features: [
        'Photorealistic 3D day/night exterior lighting renders',
        'Vastu consultation by certified Astro-Architects',
        'Soil testing & foundation load analysis',
        'MEP (Mechanical, Electrical, Plumbing) engineering blueprints',
        'Ready-for-approval BDA/CDA CAD technical drawings'
      ],
      ctaText: 'Get 3D Design Estimate'
    },
    {
      id: 'plan-approvals',
      category: 'legal',
      title: 'BDA / CDA / PKDA Plan Approvals & ORERA Clearances',
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'Guaranteed Approval',
      shortDesc: 'Seamless government building permit processing across Bhubaneswar, Cuttack, Puri, and major urban authorities in Odisha.',
      features: [
        'BDA (Bhubaneswar Development Authority) plan submission',
        'CDA (Cuttack Development Authority) & PKDA clearances',
        'ORERA registration and disclosure documentation',
        'FAR (Floor Area Ratio) & set-back calculation compliance',
        'NOC clearances from Fire, Airport, and Pollution Control'
      ],
      ctaText: 'Consult Approval Specialist'
    },
    {
      id: 'legal-title',
      category: 'legal',
      title: 'Land Title Search & Revenue Record Mutation',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      shortDesc: 'Comprehensive legal verification of land records (Khatian/Patta), encumbrance certificates, and mutation processing.',
      features: [
        '30-Year encumbrance certificate (EC) search',
        'Sabik to Hal land record conversion verification',
        'RoR (Record of Rights) title verification & boundary check',
        'Government Tahasildar mutation & revenue record updates',
        'Clear title deed drafting & Sub-Registrar endorsement'
      ],
      ctaText: 'Request Title Audit'
    },
    {
      id: 'interior-design',
      category: 'interiors',
      title: 'Luxury Interior Design & Smart Automation',
      icon: <Paintbrush className="w-6 h-6 text-purple-600" />,
      shortDesc: 'Bespoke modular kitchens, false ceilings, custom wardrobes, ambient smart lighting, and IoT security systems.',
      features: [
        'Custom Marine-grade HDMR modular kitchens with Hafele/Blum hardware',
        'Gypsum false ceiling design with mood LED profile lighting',
        'Smart home touch switches, smart locks, and video doorbells',
        'Premium Italian marble / Kajaria double-charged tile laying',
        'Turnkey interior execution within 45 days'
      ],
      ctaText: 'Book Interior Designer'
    },
    {
      id: 'plot-development',
      category: 'plots',
      title: 'Land Plot Layout & Infrastructure Development',
      icon: <MapPin className="w-6 h-6 text-rose-600" />,
      shortDesc: 'Development of gated plot layouts with blacktop pitch roads, underground drainage, electricity, and boundary security.',
      features: [
        'Total station electronic boundary survey & demarcation',
        '30 ft & 40 ft heavy-load pitch road construction',
        'Covered concrete stormwater drainage network',
        'Transformer installation, street lighting, & water pipeline',
        'Gated compound wall with 24/7 security guard cabin'
      ],
      ctaText: 'View Approved Plots',
      ctaLink: '/properties'
    },
    {
      id: 'home-loans',
      category: 'legal',
      title: 'Home Loan Processing & Bank Valuation',
      icon: <Landmark className="w-6 h-6 text-teal-600" />,
      badge: 'Zero Processing Charge',
      shortDesc: 'Instant home loan sanctioning assistance through direct tie-ups with SBI, HDFC, ICICI, Axis Bank, and Bank of Baroda.',
      features: [
        'Direct builder tie-up pre-approved project status',
        'Lowest home loan interest rate matching (SBI / HDFC)',
        'Plot purchase + construction composite loan sanctioning',
        'PMAY subsidy guidance for eligible homebuyers',
        'Doorstep document collection & fast-track approval'
      ],
      ctaText: 'Check Loan Eligibility',
      ctaLink: '/calculator'
    },
    {
      id: 'property-management',
      category: 'interiors',
      title: 'Property Valuation & Resale / Rental Management',
      icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
      shortDesc: 'Professional property valuation reports for bank/taxation purposes, plus verified tenant sourcing and property upkeep.',
      features: [
        'Government approved chartered engineer valuation reports',
        'Verified corporate tenant background screening',
        'Quarterly property maintenance & structural safety checks',
        'Lease agreement drafting & rent collection monitoring',
        'Resale property marketing across Odisha network'
      ],
      ctaText: 'Valuate Your Property'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const processSteps = [
    { step: '01', title: 'Free Consultation', desc: 'Discuss your plot location, space requirements, and budget with our senior engineers.' },
    { step: '02', title: '3D Design & Estimation', desc: 'Receive custom 3D architectural plans, Vastu analysis, and itemized transparent cost estimates.' },
    { step: '03', title: 'Legal & Plan Approvals', desc: 'We handle BDA/CDA building approvals, revenue mutation checks, and bank loan sanctioning.' },
    { step: '04', title: 'Turnkey Execution', desc: 'Construction begins with Tata Tiscon steel, UltraTech cement, and bi-weekly mobile progress updates.' },
    { step: '05', title: 'Quality Audit & Handover', desc: 'Final 50-point quality audit, structural safety certification, and key handover with warranty.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-mono font-bold mb-4">
              <Building2 className="w-4 h-4" />
              <span>Full-Stack Real Estate & Construction Services in Odisha</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
              Engineering Excellence & <br />
              <span className="text-blue-500">Legal Precision Under One Roof</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Whether you own land in Bhubaneswar, Cuttack, Puri, Rourkela, or Sambalpur, Saraswati Realcon offers 360-degree solutions—from 3D architectural designs and BDA plan approvals to turnkey construction, interior design, and home loan processing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onScheduleVisit}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all"
              >
                Schedule Free Site Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+917008485542"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" /> Call Engineer: +91 7008485542
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'construction', label: 'Custom Construction & 3D' },
            { id: 'legal', label: 'Legal, Approvals & Loans' },
            { id: 'interiors', label: 'Interiors & Valuation' },
            { id: 'plots', label: 'Plot Layout Development' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'all' | 'construction' | 'legal' | 'interiors' | 'plots')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/50 transition-all hover:-translate-y-1 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-5">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {service.ctaLink ? (
                  <Link
                    to={service.ctaLink}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-800 hover:border-blue-500 transition-all cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    onClick={onScheduleVisit}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-800 hover:border-blue-500 transition-all cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-step Workflow Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">Simplified Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              How We Execute Your Project
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              From the initial site survey to final key handover, our 5-step engineering process guarantees zero delays and 100% budget adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between relative">
                <div>
                  <span className="text-2xl font-mono font-extrabold text-blue-500 block mb-2">
                    {p.step}
                  </span>
                  <h4 className="font-heading font-bold text-white text-base mb-2">
                    {p.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Cab Pickup Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-blue-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono font-bold mb-3 border border-blue-500/30">
              <Car className="w-4 h-4 text-blue-400" />
              <span>Complimentary Doorstep Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
              Need an On-Site Soil Survey or Plot Verification?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Book a free AC cab pickup anywhere in Bhubaneswar, Cuttack, or Puri. Our senior structural engineer will accompany you to inspect your plot and provide instant feasibility analysis.
            </p>
          </div>

          <button
            onClick={onScheduleVisit}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            Schedule Free Site Visit Cab <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
