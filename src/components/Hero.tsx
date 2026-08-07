import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ onConsultNow }: { onConsultNow?: () => void }) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/60 min-h-[85vh] flex items-center pt-28 lg:pt-24 pb-16">
      {/* Light subtle decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-sky-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 rounded-full text-blue-700 font-semibold text-xs tracking-wide uppercase mb-6 border border-slate-200/80 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Odisha's Trusted Real Estate & Construction Partner</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.12] mb-6 tracking-tight max-w-2xl">
              Custom Homes & Exclusive Flats <br className="hidden sm:inline" />
              <span className="text-blue-600">
                Across Odisha
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-8 font-sans max-w-xl leading-relaxed">
              We build custom homes on private plots and manage exclusive sales for Odisha's finest residential developments with complete quality, Vastu compliance, and transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/custom-builds" 
                className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold text-center hover:bg-blue-700 active:bg-blue-800 transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                Custom Construction <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/properties" 
                className="bg-slate-100 border border-slate-200 text-slate-800 px-8 py-3.5 rounded-xl font-semibold text-center hover:bg-slate-200 hover:border-slate-300 transition-all shadow-2xs"
              >
                Explore Premium Flats
              </Link>
            </div>

            {/* Key trust indicators */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 font-heading">15+ Years</span>
                <span className="text-xs text-slate-500 font-medium">Industry Leadership</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 font-heading">100% Vastu</span>
                <span className="text-xs text-slate-500 font-medium">Compliant Design</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-extrabold text-slate-900 font-heading">Top Builders</span>
                <span className="text-xs text-slate-500 font-medium">Exclusive Sales</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none bg-slate-50 p-3 sm:p-3.5 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-100">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="/hero-image.jpg" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                  }}
                  className="w-full h-full object-cover object-center" 
                  alt="Saraswati Realcon Custom House & Villa Project in Odisha"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-8 left-8 right-8 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 z-20 max-w-xs">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">Verified Quality Standard</h4>
                  <p className="text-slate-500 text-xs font-medium">Architectural Excellence in Odisha</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

