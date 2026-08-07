import { useState, FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  Building2,
  Calendar
} from 'lucide-react';

export default function ContactPage({ onScheduleVisit }: { onScheduleVisit: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bhubaneswar',
    requirement: 'Custom Construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white">
      {/* Page Header - Hero Banner with distinctive rich navy & indigo gradient */}
      <div className="relative py-16 lg:py-20 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white overflow-hidden border-b border-blue-900/40 shadow-xl">
        {/* Subtle Architectural Office Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Office Building"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-900/80 to-indigo-950/90" />
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Visit Our Offices or Request Site Pickup</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Contact Saraswati Realcon
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            Have questions about land plot registration, BDA/CDA approvals, 3D architectural renders, or site visits? Our corporate team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Locations & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-500" /> Corporate Headquarters
            </h2>

            {/* Bhubaneswar HQ */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-mono font-bold">
                Main HQ • Bhubaneswar
              </div>
              <h3 className="text-lg font-bold text-white">Bapuji Nagar Head Office</h3>
              <p className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                Plot No - 58, Bapuji Nagar, 2nd Floor, Lane No - 4, Near Federal Bank, Bhubaneswar - 751009, Odisha
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> Mon - Sat: 9:30 AM - 7:00 PM
              </div>
            </div>

            {/* Cuttack Branch */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-mono font-bold">
                Regional Office • Cuttack
              </div>
              <h3 className="text-lg font-bold text-white">CDA Sector 9 Branch</h3>
              <p className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                Sector 9, CDA Market Complex, Cuttack, Odisha 753014
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> Mon - Sat: 9:30 AM - 7:00 PM
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone Support</div>
                  <a href="tel:+917008485542" className="font-bold hover:text-blue-400 transition-colors">+91 7008485542</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <div className="w-10 h-10 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Inquiries</div>
                  <a href="mailto:sarasawatirealcon@gmail.com" className="font-bold hover:text-emerald-400 transition-colors">sarasawatirealcon@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Free Cab Pickup Highlight */}
            <div className="p-6 bg-gradient-to-r from-blue-900/40 to-slate-900 rounded-2xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Car className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-white text-base">Free Site Visit Cab Pickup</h3>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                We provide complimentary AC cab pickup and drop from your residence anywhere in Bhubaneswar, Cuttack, or Puri for property inspection.
              </p>
              <button
                onClick={onScheduleVisit}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                Schedule Free Site Visit Cab
              </button>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-2">Send Us an Inquiry</h2>
                <p className="text-slate-400 text-sm">Fill out the details below and our senior advisor will contact you within 2 business hours.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/80 border border-emerald-800 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior consultant will call you at <strong className="text-emerald-400">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-2.5 rounded-xl text-xs font-bold font-mono transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra Patnaik"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Preferred City in Odisha</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
                      >
                        <option value="Bhubaneswar">Bhubaneswar</option>
                        <option value="Cuttack">Cuttack</option>
                        <option value="Puri">Puri</option>
                        <option value="Rourkela">Rourkela</option>
                        <option value="Sambalpur">Sambalpur</option>
                        <option value="Berhampur">Berhampur</option>
                        <option value="Balasore">Balasore</option>
                        <option value="Jharsuguda">Jharsuguda</option>
                        <option value="Angul">Angul</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Inquiry Type</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-medium"
                    >
                      <option value="Custom Construction">Turnkey Custom Construction on My Land Plot</option>
                      <option value="Buy Flat">Purchase Ready/Under-construction Residential Flat</option>
                      <option value="Buy Plot">Purchase BDA/CDA Approved Plot</option>
                      <option value="Architectural 3D">Architectural 3D Render & Vastu Layout Plan</option>
                      <option value="Home Loan">Home Loan Assistance & Financial Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-2 font-bold">Your Requirement / Message</label>
                    <textarea
                      rows={4}
                      placeholder="Please share details such as plot size, budget, or preferred area in Odisha..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
