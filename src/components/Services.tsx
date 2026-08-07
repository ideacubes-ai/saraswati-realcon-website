import { motion } from 'motion/react';
import { Ruler, Building, ArrowRight, ShieldCheck, Hammer, Key } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative z-10 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Odisha Construction & Real Estate</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
              Solid Foundations. <br/>
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Exceptional Living.</span>
            </h2>
            <p className="text-slate-600 text-lg font-normal mt-4 leading-relaxed">
              We specialize in end-to-end custom home construction and exclusive sales for Odisha's premier developers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Custom Builds Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="custom-builds"
            className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <Ruler className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Customized Building</h3>
              <p className="text-slate-600 text-base mb-8 leading-relaxed font-normal">
                Own land in Odisha? We turn it into a masterpiece. From architectural blueprints to the final coat of paint, our engineers build homes that stand the test of time.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-slate-800 font-semibold text-sm">
                  <div className="p-2 bg-slate-100 rounded-lg"><Hammer className="w-5 h-5 text-blue-600" /></div> 
                  Turnkey Construction
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-semibold text-sm">
                  <div className="p-2 bg-slate-100 rounded-lg"><ShieldCheck className="w-5 h-5 text-blue-600" /></div> 
                  Premium Material Guarantee
                </li>
              </ul>
            </div>
            
            <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Consult an Architect <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Premium Flats Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="premium-flats"
            className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <Building className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Premium Flats</h3>
              <p className="text-slate-600 text-base mb-8 leading-relaxed font-normal">
                Partnered with Odisha's top builders, we market and sell exclusive luxury apartments in prime locations.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-slate-800 font-semibold text-sm">
                  <div className="p-2 bg-slate-100 rounded-lg"><Key className="w-5 h-5 text-blue-600" /></div> 
                  Hassle-Free Ownership
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-semibold text-sm">
                  <div className="p-2 bg-slate-100 rounded-lg"><Building className="w-5 h-5 text-blue-600" /></div> 
                  Curated Luxury Projects
                </li>
              </ul>
            </div>
            
            <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-md">
              View Properties <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
