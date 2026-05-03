import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import EventCard from '../components/Card/EventCard';
import { EVENTS } from '../data/mallData';

const EventsPlatform = () => (
  <SectionWrapper
    id="events"
    eyebrow="Events Platform"
    heading={<>Your Stage,<br /><span className="text-[#C9A84C]">Global Audience</span></>}
    subheading="Dubai Mall's events infrastructure is unmatched in the region — the perfect stage for brand launches, exhibitions, concerts, and experiential campaigns."
    className="bg-[#0D0D0D]"
  >
    {/* Events grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {EVENTS.map((event, i) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <EventCard {...event} />
        </motion.div>
      ))}
    </div>

    {/* CTA Banner */}
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 relative overflow-hidden rounded-sm min-h-[220px] flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80)',
          filter: 'brightness(0.2)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-10 md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            Event Partnerships
          </p>
          <h3 className="font-display text-white text-2xl md:text-3xl xl:text-4xl font-bold leading-tight max-w-lg">
            Bring Your Brand to the World Stage
          </h3>
          <p className="text-white/40 text-sm mt-3 max-w-sm leading-relaxed">
            Access world-class venues, a captive HNI audience, and full-service event production.
          </p>
        </div>
        <a
          href="mailto:events@dubaimall.com"
          className="flex-shrink-0 px-10 py-4 bg-[#C9A84C] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#E8C97A] active:scale-95 transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
        >
          Book Your Event
        </a>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default EventsPlatform;
