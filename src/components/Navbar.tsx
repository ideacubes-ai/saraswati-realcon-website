import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onConsultNow }: { onConsultNow?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Custom Builds', path: '/custom-builds' },
    { name: 'Flats & Plots', path: '/properties' },
    { name: 'EMI & ROI Calc', path: '/calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer py-1.5 group shrink-0">
          <img 
            src="/Saraswati-Realcon-Web-Logo.png" 
            alt="Saraswati Realcon Logo"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 font-heading text-base font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `transition-all duration-200 py-1 relative ${
                  isActive
                    ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                    : 'text-slate-800 hover:text-blue-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
           <button 
             onClick={onConsultNow}
             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-base font-semibold font-heading transition-all shadow-md shadow-blue-600/20 cursor-pointer"
           >
             Consult Now
           </button>
        </div>

        <button className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden px-6 py-6 bg-white border-b border-slate-200 flex flex-col gap-4 shadow-xl text-lg font-heading">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-semibold transition-colors py-1 ${
                  isActive ? 'text-blue-600 font-bold' : 'text-slate-800 hover:text-blue-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              if (onConsultNow) onConsultNow();
            }}
            className="bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold font-heading w-full mt-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 text-base cursor-pointer"
          >
             Consult Now
           </button>
        </div>
      )}
    </nav>
  );
}


