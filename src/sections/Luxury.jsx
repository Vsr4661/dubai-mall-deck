import { motion } from 'framer-motion';

const onErr = (e) => { e.currentTarget.style.opacity = '0'; };
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';

const LUXURY_IMG_1 = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85';
const LUXURY_IMG_2 = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=85';
const LUXURY_IMG_3 = 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700&q=85';

const BRANDS = [
  { name: 'Chanel',  tagline: 'Timeless Elegance' },
  { name: 'Hermès',  tagline: 'Crafted Heritage' },
  { name: 'Rolex',   tagline: 'Mastery of Time' },
  { name: 'Cartier', tagline: 'Jeweller of Kings' },
  { name: 'Dior',    tagline: 'Haute Couture' },
  { name: 'Prada',   tagline: 'Italian Refinement' },
];

const Luxury = () => (
  <div id="luxury" className="bg-[#080808] overflow-hidden">
    {/* Full-bleed cinematic banner */}
    <div className="relative w-full h-[65vh] overflow-hidden">
      <img
        src={LUXURY_IMG_1}
        alt="Luxury retail at Dubai Mall"
        loading="lazy"
        onError={onErr}
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      />
      {/* Grain overlay for texture */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-5 font-medium"
        >
          — Luxury District
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-black leading-none tracking-tight"
        >
          Where the World&apos;s<br />
          <span className="text-[#C9A84C]">Finest Brands</span> Meet
        </motion.h2>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
    </div>

    {/* Detail section */}
    <SectionWrapper
      eyebrow="Premium Real Estate"
      heading={<>Unrivalled Luxury<br /><span className="text-[#C9A84C]">Positioning</span></>}
      subheading="The Fashion Avenue houses 70+ luxury flagships in a museum-like gallery corridor — matching the ambiance of Bond Street and Avenue Montaigne."
      className="bg-[#080808]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          <img src={LUXURY_IMG_2} alt="Fashion" loading="lazy" onError={onErr}
            className="rounded-sm w-full h-60 md:h-72 object-cover bg-[#1a1a1a]" />
          <img src={LUXURY_IMG_3} alt="Watch" loading="lazy" onError={onErr}
            className="rounded-sm w-full h-60 md:h-72 object-cover mt-10 bg-[#1a1a1a]" />
        </motion.div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          <p className="text-white/40 text-sm leading-relaxed">
            Over 70 flagship luxury boutiques spanning the Fashion Avenue — a curated corridor
            designed to match the ambiance of Bond Street and Avenue Montaigne.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {BRANDS.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="border border-white/8 hover:border-[#C9A84C]/40 p-4 transition-all duration-300 rounded-sm group cursor-pointer hover:bg-[#C9A84C]/5"
              >
                <p className="font-display text-white text-base font-bold group-hover:text-[#C9A84C] transition-colors duration-300">
                  {b.name}
                </p>
                <p className="text-white/25 text-xs mt-0.5 tracking-wider">{b.tagline}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-2 p-5 bg-gradient-to-r from-[#C9A84C]/8 to-transparent border border-[#C9A84C]/15 rounded-sm">
            <p className="text-[#C9A84C] text-sm font-semibold mb-1">Fashion Avenue</p>
            <p className="text-white/40 text-sm leading-relaxed">
              2 km of dedicated luxury corridor — the longest premium retail stretch in the Middle East.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  </div>
);

export default Luxury;
