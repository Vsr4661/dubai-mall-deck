import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import AttractionCard from '../components/Card/AttractionCard';
import { ATTRACTIONS } from '../data/mallData';

const METRICS = [
  { metric: '33,000', label: 'Marine Animals',     icon: '🐠' },
  { metric: '3,000',  label: 'sq m Ice Rink',       icon: '⛸️' },
  { metric: '200+',   label: 'VR Experiences',      icon: '🥽' },
  { metric: '80+',    label: 'KidZania Professions', icon: '👷' },
];

const AttractionsEntertainment = () => (
  <SectionWrapper
    id="attractions"
    eyebrow="Attractions & Entertainment"
    heading={<>Beyond Shopping —<br /><span className="text-[#C9A84C]">A World of Wonder</span></>}
    subheading="World-class entertainment anchors that turn visits into half-day experiences, driving repeat footfall and extended dwell time."
    className="bg-[#0A0A0A]"
  >
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {ATTRACTIONS.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          <AttractionCard {...item} />
        </motion.div>
      ))}
    </div>

    {/* Metric bar */}
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
      {METRICS.map((f, i) => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="text-center p-6 border border-white/8 rounded-sm hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/5 transition-all duration-400 group"
        >
          <p className="text-2xl mb-3">{f.icon}</p>
          <p className="font-display text-white text-2xl font-bold group-hover:text-[#C9A84C] transition-colors duration-300">{f.metric}</p>
          <p className="text-white/35 text-xs mt-1 uppercase tracking-wider">{f.label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AttractionsEntertainment;
