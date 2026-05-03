import { motion } from 'framer-motion';

const HERO_IMG =
  'https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=1920&q=90&auto=format&fit=crop';

const OpeningHero = ({ onEnquire }) => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

    {/* ── Static fallback image (always visible beneath video) ── */}
    <img
      src={HERO_IMG}
      alt="Dubai Mall aerial view"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: 'brightness(0.42)', zIndex: 0 }}
    />

    {/* ── Self-hosted background video ── */}
    {/* Served from /public/hero.mp4 — no CORS, no hotlink issues, guaranteed to play */}
    <video
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: 'brightness(0.38)', zIndex: 1 }}
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>

      {/* ── Cinematic gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            'linear-gradient(160deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* ── Left gold accent bar ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0, zIndex: 3 }}
        className="absolute left-8 lg:left-20 top-1/4 bottom-1/4 w-px bg-[#C9A84C]/60"
      />

      {/* ── Main content ── */}
      <div className="relative text-center px-6 max-w-5xl mx-auto" style={{ zIndex: 3 }}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-[#C9A84C] text-xs md:text-sm uppercase mb-6"
        >
          Downtown Dubai · UAE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[9rem] text-white font-black leading-none tracking-tight mb-6"
        >
          Dubai
          <span className="block text-[#C9A84C]">Mall</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto"
        >
          The World&apos;s Most Visited Retail Destination
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="w-24 h-px bg-[#C9A84C] mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="text-white/35 text-sm tracking-widest uppercase mt-5"
        >
          105 Million Visitors · 1,200+ Stores · 12M Sq Ft
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-[#C9A84C] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E8C97A] transition-colors duration-300"
          >
            Explore the Deck
          </button>
          <button
            onClick={() => onEnquire?.('general', 'General Enquiry')}
            className="px-8 py-3.5 text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-[#C9A84C] transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Book a Meeting
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors duration-300"
        style={{ zIndex: 3 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-xl"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
);

export default OpeningHero;
