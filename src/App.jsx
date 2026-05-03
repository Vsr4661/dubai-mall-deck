import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar        from './components/Navbar/Navbar';
import Home          from './pages/Home';
import EnquiryModal  from './components/Modal/EnquiryModal';

/**
 * App – root router.
 * EnquiryModal and Navbar live here so any section or nav CTA
 * can open the modal without prop-drilling through routed pages.
 */
const App = () => {
  const [modal, setModal] = useState({ open: false, interest: '' });

  const openEnquiry = (_type, detail) => {
    const OPTION_MAP = {
      'Luxury Flagship': 'Retail Leasing — Luxury Flagship',
      'Retail':          'Retail Leasing — Retail',
      'F&B':             'Retail Leasing — F&B',
      'Pop-Up':          'Retail Leasing — Pop-Up',
      'Title Partner':   'Sponsorship — Title Partner',
      'Premium Partner': 'Sponsorship — Premium Partner',
      'Associate Partner':'Sponsorship — Associate Partner',
      'Book a Venue':    'Event Booking — Grand Atrium',
      'General Enquiry': 'General Enquiry',
    };
    setModal({ open: true, interest: OPTION_MAP[detail] || detail || 'General Enquiry' });
  };

  return (
    <BrowserRouter>
      <Navbar onEnquire={openEnquiry} />
      <Routes>
        <Route path="/" element={<Home onEnquire={openEnquiry} />} />
      </Routes>
      <EnquiryModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, interest: '' })}
        defaultInterest={modal.interest}
      />
    </BrowserRouter>
  );
};

export default App;
