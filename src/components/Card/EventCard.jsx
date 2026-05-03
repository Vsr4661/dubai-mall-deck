import { motion } from 'framer-motion';

const handleImgError = (e) => {
  e.currentTarget.style.opacity = '0';
};

const EventCard = ({ title, date, type, desc, img }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="overflow-hidden rounded-sm border border-white/8 hover:border-[#C9A84C]/30 transition-colors duration-500 bg-[#111111] group"
  >
    {/* Image */}
    <div className="aspect-video overflow-hidden relative bg-[#1a1a1a]">
      <img
        src={img}
        alt={title}
        loading="lazy"
        onError={handleImgError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Type badge */}
      <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-[#C9A84C] text-[10px] px-3 py-1 border border-[#C9A84C]/30 uppercase tracking-wider font-medium">
        {type}
      </span>
    </div>

    {/* Body */}
    <div className="p-5">
      <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-medium mb-2">{date}</p>
      <h3 className="font-display text-white text-base font-bold mb-2 leading-snug group-hover:text-[#E8C97A] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default EventCard;
