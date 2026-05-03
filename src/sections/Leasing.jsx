import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import { LEASING_CATEGORIES } from '../data/mallData';

const onErr = (e) => { e.currentTarget.style.opacity = '0'; };

const Leasing = ({ onEnquire }) => {
  const [active, setActive] = useState('luxury');
  const current = LEASING_CATEGORIES.find((c) => c.id === active);

  return (
    <SectionWrapper
      id="leasing"
      eyebrow="Retail Leasing"
      heading={<>Find Your<br /><span className="text-[#C9A84C]">Perfect Space</span></>}
      subheading="Every business has a home at Dubai Mall. From luxury flagship boutiques to agile pop-ups — choose your category and discover your opportunity."
      className="bg-[#0D0D0D]"
    >
      {/* Category selector */}
      <div className="flex flex-wrap mb-12" style={{ gap: '10px' }}>
        {LEASING_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            style={{
              padding: '10px 24px',
              fontSize: '12px',
              letterSpacing: '0.15em',
              fontWeight: 600,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: active === cat.id ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.15)',
              background: active === cat.id ? '#C9A84C' : 'transparent',
              color: active === cat.id ? '#000' : 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dynamic content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm aspect-video bg-[#1a1a1a]">
            <img
              src={current.img}
              alt={current.label}
              loading="lazy"
              onError={onErr}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-block bg-[#C9A84C] text-black text-[10px] px-3 py-1 uppercase tracking-widest font-bold mb-2">
                {current.label}
              </span>
              <p className="font-display text-white text-lg font-bold max-w-xs leading-snug">
                {current.tagline}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-7">
            <p className="text-white/50 text-sm leading-relaxed">{current.description}</p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {current.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-sm"
                  style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}
                >
                  <p className="font-display text-[#C9A84C] text-xl font-bold">{stat.value}</p>
                  <p className="text-white/40 text-xs mt-0.5 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div>
              <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">Included Benefits</p>
              <div className="flex flex-wrap gap-2">
                {current.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs text-white/60 px-3 py-1.5"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => onEnquire?.('leasing', current.label)}
                className="flex-1 py-3.5 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E8C97A] transition-colors duration-300"
              >
                Enquire About {current.label}
              </button>
              <button
                onClick={() => onEnquire?.('leasing', `${current.label} - Download Deck`)}
                className="px-6 py-3.5 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                style={{ border: '1px solid rgba(201,168,76,0.4)' }}
              >
                ↓ Deck
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Leasing;
