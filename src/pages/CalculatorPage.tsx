import InvestmentCalculator from '../components/InvestmentCalculator';
import { Calculator, Percent, Landmark, CheckCircle } from 'lucide-react';

export default function CalculatorPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* Hero Banner with Brand Theme Navy & Blue Background with Calculator Visual Overlay */}
      <div className="relative py-16 lg:py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden border-b border-blue-900/40 shadow-xl">
        {/* Calculator & Financial Planning Background Image with Brand Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80" 
            alt="Home Loan EMI & Cost Calculator Background"
            className="w-full h-full object-cover object-center filter brightness-90 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/88 to-blue-950/92" />
        </div>

        {/* Ambient Brand Radial Glowing Light Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>Financial Estimator & Bank Rates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Home Loan EMI & Cost Calculator
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            Plan your home investment with accurate interest rates from SBI, HDFC, ICICI, Axis Bank, and Bank of Baroda. Compare land acquisition vs custom construction ROI.
          </p>
        </div>
      </div>

      <InvestmentCalculator onScheduleVisit={onScheduleVisit} />
    </div>
  );
}
