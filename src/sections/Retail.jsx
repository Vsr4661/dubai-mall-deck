import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import BrandCard from '../components/Card/BrandCard';
import { BRANDS } from '../data/mallData';

const CATEGORIES = ['All', 'Luxury', 'Fashion', 'Lifestyle'];

const Retail = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? BRANDS
    : BRANDS.filter((b) => b.category === active);

  return (
    <SectionWrapper
      id="retail"
      eyebrow="Retail Universe"
      heading={<>1,200+ Stores,<br /><span className="text-[#C9A84C]">One Destination</span></>}
      subheading="From global luxury powerhouses to high-street favourites — every brand category, perfectly curated under one iconic roof."
      className="bg-[#0A0A0A]"
    >
      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap mb-10"
        style={{ gap: '10px' }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '8px 22px',
              fontSize: '11px',
              letterSpacing: '0.18em',
              fontWeight: 600,
              textTransform: 'uppercase',
              border: active === cat
                ? '1px solid #C9A84C'
                : '1px solid rgba(255,255,255,0.18)',
              background: active === cat ? '#C9A84C' : 'transparent',
              color: active === cat ? '#000' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (active !== cat) {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              }
            }}
            onMouseLeave={(e) => {
              if (active !== cat) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Brand grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <BrandCard {...brand} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Retail;
