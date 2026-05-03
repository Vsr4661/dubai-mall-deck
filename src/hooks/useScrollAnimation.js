import { useInView } from 'react-intersection-observer';

/**
 * useScrollAnimation
 * Returns { ref, controls } to drive Framer Motion animations on scroll.
 * @param {number} threshold - 0‒1, portion of element visible to trigger
 */
const useScrollAnimation = (threshold = 0.2) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  return { ref, inView };
};

export default useScrollAnimation;
