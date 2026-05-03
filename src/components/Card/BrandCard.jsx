import { motion } from 'framer-motion';

const CATEGORY_STYLES = {
  Luxury:    'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  Fashion:   'bg-pink-500/10 text-pink-400 border-pink-500/30',
  Lifestyle: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
};

// Gradient fallbacks per category when image fails
const FALLBACK_GRADIENTS = {
  Luxury:    'linear-gradient(135deg, #1a1200 0%, #2a1f00 100%)',
  Fashion:   'linear-gradient(135deg, #1a0012 0%, #2a0020 100%)',
  Lifestyle: 'linear-gradient(135deg, #001020 0%, #001a30 100%)',
};

const handleImgError = (e) => {
  e.currentTarget.style.opacity = '0';
};

const BrandCard = ({ name, category, img }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden cursor-pointer group rounded-sm"
    style={{
      aspectRatio: '1 / 1',
      background: FALLBACK_GRADIENTS[category] || 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
    }}
  >
    {/* Image */}
    <img
      src={img}
      alt={name}
      loading="lazy"
      onError={handleImgError}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Always-on gradient so text is readable even if image loads */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5" />

    {/* Gold shimmer on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#C9A84C]/8 to-transparent" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <span
        className={`inline-block text-[10px] px-2.5 py-0.5 border rounded-full mb-2 uppercase tracking-wider font-medium ${
          CATEGORY_STYLES[category] || 'bg-white/10 text-white border-white/20'
        }`}
      >
        {category}
      </span>
      <p className="font-display text-white text-base font-bold leading-tight group-hover:text-[#E8C97A] transition-colors duration-300">
        {name}
      </p>
    </div>
  </motion.div>
);

export default BrandCard;
