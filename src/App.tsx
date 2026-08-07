import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleVisitModal from './components/ScheduleVisitModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CustomBuildsPage from './pages/CustomBuildsPage';
import PropertiesPage from './pages/PropertiesPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const handleOpenVisitModal = () => {
    setIsVisitModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col justify-between">
        <div>
          <Navbar onConsultNow={handleOpenVisitModal} />
          <Routes>
            <Route path="/" element={<HomePage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/services" element={<ServicesPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/about" element={<AboutPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/custom-builds" element={<CustomBuildsPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/properties" element={<PropertiesPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/calculator" element={<CalculatorPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="/contact" element={<ContactPage onScheduleVisit={handleOpenVisitModal} />} />
            <Route path="*" element={<HomePage onScheduleVisit={handleOpenVisitModal} />} />
          </Routes>
        </div>

        <Footer onScheduleVisit={handleOpenVisitModal} />

        <ScheduleVisitModal 
          isOpen={isVisitModalOpen} 
          onClose={() => setIsVisitModalOpen(false)} 
        />
      </div>
    </Router>
  );
}
