import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Car, 
  Sparkles, 
  CheckCircle2,
  Building2,
  ShieldCheck
} from 'lucide-react';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProperty?: string;
}

export default function ScheduleVisitModal({ isOpen, onClose, prefilledProperty }: ScheduleVisitModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredCity, setPreferredCity] = useState('Bhubaneswar');
  const [serviceType, setServiceType] = useState<'Custom Construction' | 'Buy Luxury Flat' | 'Buy Land Plot' | 'Home Loan Support'>(
    prefilledProperty ? 'Buy Luxury Flat' : 'Custom Construction'
  );
  const [needFreeCab, setNeedFreeCab] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Site Visit Request Received!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>. Our senior real estate advisor will call you at <span className="text-blue-300 font-mono font-bold">{phone}</span> within 15 minutes to confirm your visit {needFreeCab ? 'and assign complimentary AC cab pickup!' : ''}
              </p>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 font-mono">
                Confirmation ID: #SRC-2026-{(Math.random() * 8999 + 1000).toFixed(0)}
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold text-xs shadow-lg shadow-blue-600/30"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Site Visit & Consultation</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Schedule Free On-Site Inspection
                </h3>
                {prefilledProperty && (
                  <p className="text-xs text-blue-300 mt-1 font-mono">
                    Interested in: <strong className="text-white">{prefilledProperty}</strong>
                  </p>
                )}
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Select Service Interest</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Custom Construction',
                    'Buy Luxury Flat',
                    'Buy Land Plot',
                    'Home Loan Support'
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setServiceType(srv as any)}
                      className={`p-2.5 rounded-xl border text-left font-semibold transition-all ${
                        serviceType === srv 
                          ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/20' 
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Name & Phone */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mohanty"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Mobile Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">City / Region in Odisha</label>
                  <select
                    value={preferredCity}
                    onChange={(e) => setPreferredCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-medium"
                  >
                    <option value="Bhubaneswar">Bhubaneswar (Capital Region)</option>
                    <option value="Cuttack">Cuttack (Silver City)</option>
                    <option value="Puri">Puri (Coastal & Temple City)</option>
                    <option value="Rourkela">Rourkela (Steel City / Western Odisha)</option>
                    <option value="Sambalpur">Sambalpur (Western Odisha Hub)</option>
                    <option value="Berhampur">Berhampur / Brahmapur (Southern Odisha)</option>
                    <option value="Balasore">Balasore / Baleswar (Northern Coastal)</option>
                    <option value="Jharsuguda">Jharsuguda (Industrial & Airport Hub)</option>
                    <option value="Angul">Angul (Power & Industrial Corridor)</option>
                    <option value="Jajpur">Jajpur / Kalinganagar</option>
                    <option value="Koraput">Koraput (Southern Highland Region)</option>
                    <option value="Bhadrak">Bhadrak (Coastal Commerce)</option>
                  </select>
                </div>
              </div>

              {/* Free Cab Option Toggle */}
              <div 
                onClick={() => setNeedFreeCab(!needFreeCab)}
                className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700"
              >
                <div className="flex items-center gap-2 text-xs">
                  <Car className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-slate-200">Request Complimentary AC Cab Pickup</span>
                </div>
                <input 
                  type="checkbox"
                  checked={needFreeCab}
                  onChange={() => {}} 
                  className="w-4 h-4 accent-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
              >
                Confirm Free Site Visit Booking
              </button>

              <div className="text-center text-[10px] text-slate-500 font-mono flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Free Consultation • No Spam • Instant Direct Callback
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
