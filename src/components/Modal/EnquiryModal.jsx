import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INTEREST_OPTIONS = [
  'Retail Leasing — Luxury Flagship',
  'Retail Leasing — Retail',
  'Retail Leasing — F&B',
  'Retail Leasing — Pop-Up',
  'Sponsorship — Title Partner',
  'Sponsorship — Premium Partner',
  'Sponsorship — Associate Partner',
  'Event Booking — Grand Atrium',
  'Event Booking — Dubai Mall Theatre',
  'Event Booking — Fountain View Terrace',
  'General Enquiry',
];

const EnquiryModal = ({ isOpen, onClose, defaultInterest = '' }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    interest: defaultInterest || INTEREST_OPTIONS[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync defaultInterest when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, interest: defaultInterest || INTEREST_OPTIONS[0] }));
      setSubmitted(false);
    }
  }, [isOpen, defaultInterest]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: POST to CRM / send email via API
    console.log('Enquiry submitted:', form);
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 0,
    color: '#fff',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="w-full max-w-lg relative"
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(201,168,76,0.2)',
                pointerEvents: 'auto',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Gold top bar */}
              <div className="h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-[#C9A84C] transition-colors duration-300 text-xl"
              >
                ×
              </button>

              <div className="p-8">
                {!submitted ? (
                  <>
                    <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">Get in Touch</p>
                    <h2 className="font-display text-white text-2xl font-bold mb-1">Let&apos;s Start a Conversation</h2>
                    <p className="text-white/35 text-sm mb-7">
                      Our commercial team will be in touch within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">Your Name *</label>
                          <input
                            required
                            style={inputStyle}
                            placeholder="Jane Smith"
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">Company *</label>
                          <input
                            required
                            style={inputStyle}
                            placeholder="Brand Inc."
                            value={form.company}
                            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          style={inputStyle}
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        />
                      </div>

                      <div>
                        <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">I&apos;m Interested In *</label>
                        <select
                          required
                          style={{ ...inputStyle, cursor: 'pointer' }}
                          value={form.interest}
                          onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                        >
                          {INTEREST_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ background: '#111', color: '#fff' }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          style={{ ...inputStyle, resize: 'vertical' }}
                          placeholder="Tell us more about your requirements..."
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#E8C97A] transition-colors duration-300 mt-2"
                      >
                        Send Enquiry
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)' }}
                    >
                      ✓
                    </motion.div>
                    <h3 className="font-display text-white text-2xl font-bold mb-2">Enquiry Received</h3>
                    <p className="text-white/45 text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you, {form.name}. Our commercial team will reach out to you at{' '}
                      <span className="text-[#C9A84C]">{form.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-8 px-8 py-3 text-[#C9A84C] text-xs uppercase tracking-widest font-bold transition-colors duration-300 hover:text-[#E8C97A]"
                      style={{ border: '1px solid rgba(201,168,76,0.35)' }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
