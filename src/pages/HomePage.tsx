import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import CustomBuildingSection from '../components/CustomBuildingSection';
import InvestmentCalculator from '../components/InvestmentCalculator';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calculator, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  return (
    <div className="pt-22">
      {/* Hero Showcase */}
      <Hero />

      {/* Quick Overview Spotlight Banner */}
      <section className="py-14 bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-indigo-50/80 border-y border-blue-100/80 text-slate-900 relative overflow-hidden">
        {/* Ambient subtle light glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Bento Box 1: Custom Construction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/90 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 bg-blue-100/80 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                Custom Home Construction
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Architectural design, 3D renderings, and turnkey build on your land plot across Odisha.
              </p>
              <Link to="/custom-builds" className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center gap-1 hover:underline">
                Explore Packages & Models <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Box 2: Clear-Title Plots & Flats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/90 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 bg-emerald-100/80 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                Clear-Title Plots & Flats
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                RERA registered apartments, luxury villas, and BDA/CDA approved plot developments in 12+ cities.
              </p>
              <Link to="/properties" className="text-emerald-600 hover:text-emerald-800 text-xs font-bold flex items-center gap-1 hover:underline">
                Browse All Properties <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Box 3: Loan & Cost Estimator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/90 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 bg-amber-100/80 text-amber-600 rounded-xl flex items-center justify-center shrink-0 border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 group-hover:text-amber-700 transition-colors">
                Loan & Cost Estimator
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Instant EMI calculation, SBI/HDFC tie-up interest rates, and construction ROI calculator.
              </p>
              <Link to="/calculator" className="text-amber-600 hover:text-amber-800 text-xs font-bold flex items-center gap-1 hover:underline">
                Calculate Home EMI <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Custom Building Section */}
      <CustomBuildingSection />

      {/* Featured Properties Section */}
      <FeaturedProperties onScheduleVisit={onScheduleVisit} />

      {/* EMI & Financial Investment Calculator */}
      <InvestmentCalculator onScheduleVisit={onScheduleVisit} />

      {/* Client Testimonials & Success Stories */}
      <Testimonials onScheduleVisit={onScheduleVisit} />
    </div>
  );
}
