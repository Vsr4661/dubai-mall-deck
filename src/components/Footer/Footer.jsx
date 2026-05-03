import { NAV_LINKS } from '../../data/mallData';

const Footer = ({ onEnquire }) => (
  <footer
    className="py-14 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28"
    style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#080808' }}
  >
    {/* Top row */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-xs font-bold">
            DM
          </span>
          <span className="font-display text-white text-lg tracking-widest uppercase">
            Dubai <span className="text-[#C9A84C]">Mall</span>
          </span>
        </div>
        <p className="text-white/25 text-xs max-w-xs leading-relaxed">
          The world's most visited retail destination — 105M+ annual visitors, Downtown Dubai.
        </p>
      </div>

      {/* CTA cluster */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => onEnquire?.('leasing', 'Retail')}
          className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/10"
          style={{ border: '1px solid rgba(201,168,76,0.35)' }}
        >
          Leasing Enquiry
        </button>
        <button
          onClick={() => onEnquire?.('events', 'Book a Venue')}
          className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/10"
          style={{ border: '1px solid rgba(201,168,76,0.35)' }}
        >
          Book an Event
        </button>
        <button
          onClick={() => onEnquire?.('sponsorship', 'Title Partner')}
          className="px-6 py-2.5 bg-[#C9A84C] text-black text-xs uppercase tracking-widest font-bold hover:bg-[#E8C97A] transition-colors duration-300"
        >
          Partner With Us
        </button>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.06)' }} />

    {/* Bottom row */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <nav className="flex flex-wrap items-center gap-5 text-white/30 text-[11px] uppercase tracking-widest">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-[#C9A84C] transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="text-white/20 text-xs text-center">
        © {new Date().getFullYear()} Dubai Mall · Emaar Properties · All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
