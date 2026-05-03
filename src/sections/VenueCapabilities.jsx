import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import { VENUES } from '../data/mallData';

const onErr = (e) => { e.currentTarget.style.opacity = '0'; };

const VenueCapabilities = ({ onEnquire }) => (
  <SectionWrapper
    id="venues"
    eyebrow="Event Venues & Capabilities"
    heading={<>World-Class Stages,<br /><span className="text-[#C9A84C]">Iconic Backdrops</span></>}
    subheading="From 2,500-seat performing arts theatres to open-air fountain stages — Dubai Mall's event infrastructure turns every activation into a landmark moment."
    className="bg-[#080808]"
  >
    {/* Venue cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
      {VENUES.map((venue, i) => (
        <motion.div
          key={venue.name}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="group rounded-sm overflow-hidden cursor-default"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Image */}
          <div className="aspect-video overflow-hidden relative bg-[#1a1a1a]">
            <img
              src={venue.img}
              alt={venue.name}
              loading="lazy"
              onError={onErr}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute top-3 left-3 bg-[#C9A84C] text-black text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
              {venue.type}
            </span>
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="font-display text-white text-xl font-bold mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
              {venue.name}
            </h3>

            {/* Capacity + area */}
            <div className="flex gap-4 mb-5">
              <div>
                <p className="text-[#C9A84C] font-bold text-lg">{venue.capacity}</p>
                <p className="text-white/35 text-xs tracking-wider">Capacity</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-white font-bold text-lg">{venue.area}</p>
                <p className="text-white/35 text-xs tracking-wider">Total Area</p>
              </div>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2">
              {venue.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/50 text-xs">
                  <span className="text-[#C9A84C] text-[10px]">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Full-width CTA */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-sm min-h-[180px] flex items-center"
      style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(0,0,0,0) 60%)' }}
    >
      <div
        className="absolute inset-0"
        style={{ border: '1px solid rgba(201,168,76,0.15)' }}
      />
      <div className="relative z-10 w-full px-10 md:px-14 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">Book a Venue</p>
          <h3 className="font-display text-white text-2xl md:text-3xl font-bold max-w-xl leading-snug">
            Plan Your Event at One of the World&apos;s Most Iconic Addresses
          </h3>
          <p className="text-white/40 text-sm mt-2 max-w-md">
            Capacity from 500 to 15,000 guests · Full AV production support · Dedicated event management team
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            onClick={() => onEnquire?.('venue', 'Book a Venue')}
            className="px-8 py-3.5 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E8C97A] transition-colors duration-300 whitespace-nowrap"
          >
            Book a Venue
          </button>
          <button
            onClick={() => onEnquire?.('venue', 'Download Venue Pack')}
            className="px-8 py-3.5 text-white/70 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#C9A84C] transition-colors duration-300 whitespace-nowrap"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Venue Pack ↓
          </button>
        </div>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default VenueCapabilities;
