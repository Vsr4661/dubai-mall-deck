import { motion } from 'framer-motion';

/**
 * SectionWrapper – properly padded, centered layout for every section.
 * Uses a two-layer approach: full-width section for bg color, inner container for content.
 */
const SectionWrapper = ({
  id,
  eyebrow,
  heading,
  subheading,
  className = '',
  children,
}) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-24 lg:py-32">

        {/* Section header group */}
        {(eyebrow || heading || subheading) && (
          <div className="mb-16">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#C9A84C] text-[11px] tracking-[0.4em] uppercase mb-5 font-semibold"
              >
                — {eyebrow}
              </motion.p>
            )}

            {heading && (
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6"
              >
                {heading}
              </motion.h2>
            )}

            {subheading && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                {subheading}
              </motion.p>
            )}

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{ originX: 0 }}
              className="mt-8 w-12 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C97A]"
            />
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
