import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import { StatsGrid } from '../components/Stats/StatsGrid';
import { DEMOGRAPHICS, VISITOR_STATS } from '../data/mallData';

const MAP_IMG = 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&q=80&auto=format&fit=crop';

const POINTS = [
  { title: '#1 Retail Destination Globally',   body: "Ranked the world's most visited shopping destination — surpassing all other malls globally in annual footfall." },
  { title: 'Prime Downtown Location',           body: 'Sits at the heart of Downtown Dubai, adjacent to the Burj Khalifa and the iconic Dubai Fountain.' },
  { title: 'HNI & Tourist Audience Mix',        body: 'Attracts an unparalleled blend of high-net-worth residents, global tourists, and luxury buyers from 184 nationalities.' },
  { title: 'Year-Round Traffic',                body: 'Consistent 12-month footfall driven by tourism, residents, seasonal events, and world-class programming.' },
];

const WhyThisProperty = () => (
  <SectionWrapper
    id="why"
    eyebrow="Why Dubai Mall"
    heading={<>A Global<br /><span className="text-[#C9A84C]">Destination</span></>}
    subheading="More than a mall — an entire world that attracts over 105 million visitors every year, outperforming the Eiffel Tower and Times Square combined."
    className="bg-[#0D0D0D]"
  >
    {/* Stats */}
    <StatsGrid />

    {/* Demographics */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="mt-16 p-8 rounded-sm"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">Visitor Demographics</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bar breakdown */}
        <div className="flex flex-col gap-5">
          {DEMOGRAPHICS.map((d, i) => (
            <div key={d.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/60 text-sm">{d.label}</span>
                <span className="font-bold text-sm" style={{ color: d.color }}>{d.value}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: d.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.value}%` }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* HNI stats */}
        <div className="grid grid-cols-2 gap-4">
          {VISITOR_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-4 rounded-sm"
              style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.1)' }}
            >
              <p className="text-xl mb-1">{s.icon}</p>
              <p className="font-display text-[#C9A84C] text-xl font-bold">{s.value}</p>
              <p className="text-white/35 text-[10px] mt-0.5 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Map + Key Points */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      {/* Map */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm aspect-video shadow-2xl bg-[#1a1a1a]"
      >
        <img
          src={MAP_IMG}
          alt="Downtown Dubai location"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.opacity = '0'; }}
          className="w-full h-full object-cover bg-[#1a1a1a]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-5 left-5">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1 font-medium">Location</p>
          <p className="font-display text-white text-xl font-bold">Downtown Dubai</p>
          <p className="text-white/50 text-sm mt-0.5">Adjacent to Burj Khalifa · Metro Connected</p>
        </div>
      </motion.div>

      {/* Key points */}
      <div className="flex flex-col gap-5">
        {POINTS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 items-start group"
          >
            <span className="mt-1.5 w-[2px] h-5 bg-[#C9A84C] flex-shrink-0 group-hover:h-7 transition-all duration-300" />
            <div>
              <p className="text-white font-semibold mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">{item.title}</p>
              <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default WhyThisProperty;
