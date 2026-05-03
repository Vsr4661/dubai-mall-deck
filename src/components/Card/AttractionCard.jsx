import { motion } from 'framer-motion';

const TAG_COLORS = {
  'Must See':     'bg-[#C9A84C] text-black',
  Sports:         'bg-blue-500 text-white',
  Tech:           'bg-purple-500 text-white',
  Family:         'bg-green-500 text-white',
  Iconic:         'bg-red-500 text-white',
  Entertainment:  'bg-pink-500 text-white',
};

const handleImgError = (e) => {
  e.currentTarget.style.opacity = '0';
};

const AttractionCard = ({ name, desc, img, tag }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden rounded-sm group cursor-pointer border border-white/8 hover:border-[#C9A84C]/30 transition-colors duration-500 bg-[#141414]"
  >
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden relative bg-[#1a1a1a]">
      <img
        src={img}
        alt={name}
        loading="lazy"
        onError={handleImgError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-400" />

    {/* Tag */}
    <div className="absolute top-3 left-3">
      <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-wider ${TAG_COLORS[tag] || 'bg-[#C9A84C] text-black'}`}>
        {tag}
      </span>
    </div>

    {/* Text */}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="font-display text-white text-lg font-bold mb-1 group-hover:text-[#E8C97A] transition-colors duration-300">
        {name}
      </h3>
      <p className="text-white/55 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default AttractionCard;
