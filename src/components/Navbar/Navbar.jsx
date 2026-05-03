import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../data/mallData';

const Navbar = ({ onEnquire }) => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section in navbar
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
      >
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Dubai Mall home"
          >
            <span className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-xs font-bold group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
              DM
            </span>
            <span className="font-display text-white text-base tracking-widest uppercase hidden sm:block">
              Dubai <span className="text-[#C9A84C]">Mall</span>
            </span>
          </button>

          {/* Desktop links — scrollable on smaller screens */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="relative text-[11px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 pb-1"
                    style={{ color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 right-0 h-px bg-[#C9A84C]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onEnquire?.('general', 'General Enquiry')}
              className="px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-[11px] tracking-widest uppercase font-bold hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            >
              Enquire Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto py-20"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="font-display text-2xl text-white hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onEnquire?.('general', 'General Enquiry'); }}
              className="mt-4 px-8 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase font-bold"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
