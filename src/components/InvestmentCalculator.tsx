import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  Percent, 
  Building2, 
  Home, 
  PieChart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function InvestmentCalculator({ onScheduleVisit }: { onScheduleVisit?: (note?: string) => void }) {
  const [activeTab, setActiveTab] = useState<'emi' | 'build-vs-buy' | 'appreciation'>('emi');

  // EMI Calculator state
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Build vs Buy comparison state
  const [plotCost, setPlotCost] = useState<number>(2500000); // 25 Lakhs plot
  const [builtUpArea, setBuiltUpArea] = useState<number>(1800); // 1800 sq ft
  const [constructionRate, setConstructionRate] = useState<number>(2100); // 2100 / sq ft

  // Calculations for EMI
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Build vs Buy Calculations
  const totalCustomBuildCost = plotCost + (builtUpArea * constructionRate);
  const equivalentFlatMarketValue = Math.round(totalCustomBuildCost * 1.35); // Readymade flat is ~35% costlier per sqft
  const directSavings = equivalentFlatMarketValue - totalCustomBuildCost;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-y border-blue-900/40 shadow-2xl">
      {/* Background Calculator & Financial Planning Picture Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80" 
          alt="Home Loan EMI & Cost Calculator Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-90 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/92" />
      </div>

      {/* Ambient Radial Blue/Indigo Light Flares for Visual Distinction */}
      <div className="absolute top-1/4 -left-20 w-[35rem] h-[35rem] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-20 w-[35rem] h-[35rem] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Smart Financial Decision Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Calculate Your Home Loan EMI & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              Custom Construction ROI
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Transparent breakdown of home loan EMIs, property appreciation projections, and real cost comparison between buying ready flats vs building custom homes.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap gap-2 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('emi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                activeTab === 'emi' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Percent className="w-4 h-4" /> Home Loan EMI
            </button>
            <button
              onClick={() => setActiveTab('build-vs-buy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                activeTab === 'build-vs-buy' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" /> Custom Build vs Flat Savings
            </button>
            <button
              onClick={() => setActiveTab('appreciation')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                activeTab === 'appreciation' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" /> 5-Yr Land Appreciation
            </button>
          </div>
        </div>

        {/* TAB 1: HOME LOAN EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Inputs & Sliders */}
            <div className="lg:col-span-7 space-y-7">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-400">Required Loan Amount</span>
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1">
                    <span className="text-slate-400 text-xs">₹</span>
                    <input 
                      type="number"
                      min={5}
                      max={500}
                      value={Math.round(loanAmount / 100000)}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val >= 0) setLoanAmount(val * 100000);
                      }}
                      className="w-16 bg-transparent text-blue-400 font-bold text-sm text-right focus:outline-none"
                    />
                    <span className="text-blue-400 font-bold text-xs">Lakhs</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={20000000}
                  step={250000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer mb-2.5"
                />
                {/* Loan Amount Quick Presets */}
                <div className="flex flex-wrap gap-1.5">
                  {[2500000, 5000000, 7500000, 10000000, 15000000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setLoanAmount(amt)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        loanAmount === amt 
                          ? 'bg-blue-600 text-white font-bold' 
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      ₹{amt >= 10000000 ? `${amt / 10000000} Cr` : `${amt / 100000} L`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate Options */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-400">Interest Rate (% p.a.)</span>
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1">
                    <input 
                      type="number"
                      min={5}
                      max={18}
                      step={0.05}
                      value={interestRate}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val >= 0) setInterestRate(val);
                      }}
                      className="w-14 bg-transparent text-indigo-400 font-bold text-sm text-right focus:outline-none"
                    />
                    <span className="text-indigo-400 font-bold text-xs">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={14.0}
                  step={0.05}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer mb-2.5"
                />
                {/* Interest Rate Options Presets */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { rate: 8.25, label: '8.25% (SBI)' },
                    { rate: 8.50, label: '8.50% (HDFC)' },
                    { rate: 8.75, label: '8.75% (ICICI)' },
                    { rate: 9.00, label: '9.00%' },
                    { rate: 9.50, label: '9.50%' },
                  ].map((item) => (
                    <button
                      key={item.rate}
                      onClick={() => setInterestRate(item.rate)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        interestRate === item.rate 
                          ? 'bg-indigo-600 text-white font-bold' 
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Tenure Options */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-400">Loan Tenure</span>
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1">
                    <input 
                      type="number"
                      min={1}
                      max={35}
                      value={tenureYears}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val >= 1) setTenureYears(val);
                      }}
                      className="w-12 bg-transparent text-teal-400 font-bold text-sm text-right focus:outline-none"
                    />
                    <span className="text-teal-400 font-bold text-xs">Years ({tenureYears * 12} Mo)</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer mb-2.5"
                />
                {/* Tenure Options Presets */}
                <div className="flex flex-wrap gap-1.5">
                  {[5, 10, 15, 20, 25, 30].map((years) => (
                    <button
                      key={years}
                      onClick={() => setTenureYears(years)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        tenureYears === years 
                          ? 'bg-teal-600 text-white font-bold' 
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {years} Yrs
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <span>Partner Bank Tie-ups:</span>
                <span className="font-bold text-slate-200">SBI • HDFC • ICICI • AXIS • Bank of Baroda</span>
              </div>
            </div>

            {/* EMI Display Output */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase text-blue-300 tracking-wider block mb-2">Estimated Monthly EMI</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
                  ₹{emi.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/ month</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs font-mono text-left mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span>Principal Amount:</span>
                    <span className="font-bold">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Total Interest Payable:</span>
                    <span className="font-bold text-indigo-300">₹{(totalInterest / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                    <span>Total Payable (P + I):</span>
                    <span className="font-bold text-emerald-400">₹{(totalPayment / 100000).toFixed(1)} Lakhs</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onScheduleVisit ? onScheduleVisit('Loan Sanction Assistance') : null}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                Apply Loan Sanction Support <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB 2: BUILD VS BUY SAVINGS */}
        {activeTab === 'build-vs-buy' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Calculate Custom House Construction Savings
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building on your own land plot in Bhubaneswar or Cuttack gives you 100% custom room floorplan control and saves builder margin overheads.
              </p>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">Land Plot Cost</span>
                  <span className="text-blue-400 font-bold">₹{(plotCost / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={10000000}
                  step={200000}
                  value={plotCost}
                  onChange={(e) => setPlotCost(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">Built-Up Area (Sq.Ft)</span>
                  <span className="text-emerald-400 font-bold">{builtUpArea} Sq.Ft</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={4000}
                  step={100}
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">Construction Material Quality Rate</span>
                  <span className="text-amber-400 font-bold">₹{constructionRate} / Sq.Ft</span>
                </div>
                <input
                  type="range"
                  min={1800}
                  max={2800}
                  step={50}
                  value={constructionRate}
                  onChange={(e) => setConstructionRate(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">Your Estimated Direct Savings</span>
                <div className="text-3xl font-extrabold text-emerald-300 font-heading mb-4">
                  ₹{(directSavings / 100000).toFixed(2)} Lakhs
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300 mb-6">
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl">
                    <span>Total Custom Build Cost:</span>
                    <span className="font-bold text-white">₹{(totalCustomBuildCost / 100000).toFixed(2)} Lakhs</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl">
                    <span>Equivalent Flat Market Price:</span>
                    <span className="font-bold text-rose-300">₹{(equivalentFlatMarketValue / 100000).toFixed(2)} Lakhs</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onScheduleVisit ? onScheduleVisit('Custom Land Construction') : null}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                Get Free Custom Site Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB 3: 5-YR APPRECIATION */}
        {activeTab === 'appreciation' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-blue-400 mb-1">Patia & Infocity IT Hub</div>
                <div className="text-2xl font-bold text-white font-heading mb-2">14.2% YoY Growth</div>
                <p className="text-xs text-slate-400">High demand due to upcoming IT Metro line expansion and tech employee rentals.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-indigo-400 mb-1">Khandagiri & NH-16 Belt</div>
                <div className="text-2xl font-bold text-white font-heading mb-2">12.5% YoY Growth</div>
                <p className="text-xs text-slate-400">Rapid residential expansion with wide BDA pitch roads and hospital hubs.</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-teal-400 mb-1">CDA Sector 9 Cuttack</div>
                <div className="text-2xl font-bold text-white font-heading mb-2">11.8% YoY Growth</div>
                <p className="text-xs text-slate-400">Prime riverfront premium living zone with steady long-term appreciation.</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
