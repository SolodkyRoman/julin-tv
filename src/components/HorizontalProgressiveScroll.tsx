'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const HorizontalProgressiveScroll = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 end', '-0.1 start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);

  console.log(scrollYProgress);
  return (
    <div
      style={{ overflow: 'hidden', position: 'relative' }}
      className='w-full' // or whatever height you need
      ref={ref}
    >
      <motion.div style={{ x, width: '120vw' }}>{children}</motion.div>
    </div>
  );
};

export default HorizontalProgressiveScroll;
