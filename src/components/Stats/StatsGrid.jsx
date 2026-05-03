import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { STATS } from '../../data/mallData';

/** Simple animated number counter — no external dependency */
const AnimatedNumber = ({ value, duration = 2000, separator = ',' }) => {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
    </span>
  );
};

const StatCard = ({ value, suffix, label, icon }) => (
  <div className="flex flex-col items-center text-center p-8 border border-white/10 rounded-sm hover:border-[#C9A84C]/40 transition-colors duration-500 bg-white/[0.02] backdrop-blur-sm">
    <span className="text-3xl mb-3">{icon}</span>
    <p className="font-display text-5xl md:text-6xl text-white font-bold leading-none">
      <AnimatedNumber value={value} />
      <span className="text-[#C9A84C]">{suffix}</span>
    </p>
    <p className="mt-3 text-white/50 text-sm tracking-widest uppercase">{label}</p>
  </div>
);

const StatsGrid = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {STATS.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <StatCard {...stat} />
      </motion.div>
    ))}
  </div>
);

export { StatCard, StatsGrid };
