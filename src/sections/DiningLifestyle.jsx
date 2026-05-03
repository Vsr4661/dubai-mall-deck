import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import { DINING } from '../data/mallData';

const DiningLifestyle = () => (
  <SectionWrapper
    id="dining"
    eyebrow="Dining & Lifestyle"
    heading={<>200+ Culinary<br /><span className="text-[#C9A84C]">Experiences</span></>}
    subheading="From Michelin-starred kitchens to casual waterfront bites — every palate, every occasion, one iconic destination."
    className="bg-[#0D0D0D]"
  >
    {/* Masonry grid */}
    <div className="masonry">
      {DINING.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="masonry-item relative overflow-hidden rounded-sm group cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-52' : 'h-44'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-400" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
            <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.2em] font-medium mb-0.5">{item.cuisine}</p>
            <p className="font-display text-white font-bold text-sm">{item.name}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10 border border-white/8 rounded-sm bg-white/[0.015]"
    >
      <div>
        <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] font-medium mb-2">F&amp;B Leasing</p>
        <p className="font-display text-white text-xl md:text-2xl font-bold leading-snug max-w-md">
          Position your brand in front of 105M annual visitors
        </p>
      </div>
      <button
        onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex-shrink-0 px-8 py-3 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E8C97A] transition-colors duration-300"
      >
        Enquire Now
      </button>
    </motion.div>
  </SectionWrapper>
);

export default DiningLifestyle;
