import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import { SPONSORSHIP_TIERS, AUDIENCE_DATA } from '../data/mallData';

const onErr = (e) => { e.currentTarget.style.opacity = '0'; };

const Sponsorship = ({ onEnquire }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <SectionWrapper
      id="sponsorship"
      eyebrow="Sponsorship & Brand Partnerships"
      heading={<>Put Your Brand<br /><span className="text-[#C9A84C]">At the Centre</span></>}
      subheading="Reach 105 million annual visitors — tourists, residents, and high-net-worth individuals — through a sponsorship presence at the world's most visited retail destination."
      className="bg-[#0A0A0A]"
    >
      {/* Audience data strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {AUDIENCE_DATA.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-5 border border-white/8 rounded-sm text-center hover:border-[#C9A84C]/30 transition-colors duration-400 bg-white/[0.02]"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="text-2xl mb-2">{d.icon}</p>
            <p className="font-display text-white text-2xl font-bold">{d.value}</p>
            <p className="text-white/40 text-xs mt-1 uppercase tracking-wider leading-snug">{d.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {SPONSORSHIP_TIERS.map((tier, i) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-sm overflow-hidden cursor-default transition-transform duration-400 hover:-translate-y-2"
            style={{
              border: `1px solid ${hovered === i ? tier.color : 'rgba(255,255,255,0.08)'}`,
              background: hovered === i ? `${tier.color}08` : 'rgba(255,255,255,0.015)',
              transition: 'border-color 0.35s ease, background 0.35s ease, transform 0.35s ease',
            }}
          >
            {/* Top accent bar */}
            <div className="h-[3px]" style={{ background: tier.color }} />

            <div className="p-7">
              {/* Badge */}
              <span
                className="inline-block text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4"
                style={{ background: `${tier.color}20`, color: tier.color, border: `1px solid ${tier.color}40` }}
              >
                {tier.label}
              </span>

              <h3 className="font-display text-white text-2xl font-bold mb-1">{tier.tier}</h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-3xl font-black" style={{ color: tier.color }}>{tier.price}</span>
                <span className="text-white/35 text-sm">{tier.period}</span>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-3">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-0.5 text-xs flex-shrink-0" style={{ color: tier.color }}>✦</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onEnquire?.('sponsorship', tier.tier)}
                className="mt-8 w-full py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300"
                style={{
                  background: hovered === i ? tier.color : 'transparent',
                  color: hovered === i ? '#000' : tier.color,
                  border: `1px solid ${tier.color}`,
                }}
              >
                Enquire About This Tier
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Past partners logos strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
        className="p-8 rounded-sm text-center"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">Past & Current Brand Partners</p>
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/20 font-display font-bold text-lg tracking-wider">
          {['Samsung', 'Mastercard', 'Emirates', 'Cartier', 'Rolex', 'LVMH', 'Coca-Cola', 'BMW'].map((brand) => (
            <span key={brand} className="hover:text-[#C9A84C] transition-colors duration-300 cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Sponsorship;
