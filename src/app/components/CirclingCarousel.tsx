'use client';

import { motion } from 'motion/react';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const media = [
  '1.png',
  '2.mp4',
  '3.png',
  '4.mp4',
  '5.png',
  '6.png',
  '7.mp4',
  '8.png',
  'dz7.png',
];

type ScreenSize = 'sm' | 'md' | 'lg' | 'xlg';

// Calculate positions for images around the ellipse
// Horizontal radius (wider)
const rx: Record<ScreenSize, number> = {
  sm: 350,
  md: 400,
  lg: 550,
  xlg: 640,
};

// Vertical radius (narrower)
const ry: Record<ScreenSize, number> = {
  sm: 150,
  md: 180,
  lg: 260,
  xlg: 300,
};

const itemSize: Record<ScreenSize, `${string}px`> = {
  sm: '100px',
  md: '130px',
  lg: '170px',
  xlg: '200px',
};

const topOffset: Record<ScreenSize, `${number}%`> = {
  sm: '38%',
  md: '33%',
  lg: '30%',
  xlg: '25%',
};

const leftOffset: Record<ScreenSize, `${number}%`> = {
  sm: '48%',
  md: '45%',
  lg: '42%',
  xlg: '40%',
};

const headerFontSize: Record<ScreenSize, number> = {
  sm: 40,
  md: 45,
  lg: 62,
  xlg: 62,
};

const headerWidth: Record<ScreenSize, number> = {
  sm: 500,
  md: 550,
  lg: 710,
  xlg: 710,
};

const containerHeight: Record<ScreenSize, number> = {
  sm: 500,
  md: 650,
  lg: 900,
  xlg: 1000,
};

const createEllipticalKeyframes = (
  startAngle: number,
  radiusX: number,
  radiusY: number
) => {
  const steps = 120; // High number of steps for smooth motion
  const xKeyframes = [];
  const yKeyframes = [];

  for (let i = 0; i <= steps; i++) {
    const angle = startAngle + (i / steps) * 2 * Math.PI;
    xKeyframes.push(Math.cos(angle) * radiusX - 32);
    yKeyframes.push(Math.sin(angle) * radiusY - 32);
  }

  return { x: xKeyframes, y: yKeyframes };
};

const CirclingCarousel = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('lg');

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setScreenSize('sm');
      } else if (width < 1200) {
        setScreenSize('md');
      } else if (width < 1500) {
        setScreenSize('lg');
      } else {
        setScreenSize('xlg');
      }
    };

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const radiusX = rx[screenSize];
  const radiusY = ry[screenSize];

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) return;
    const id = setTimeout(() => setIsHovering(false), 3000);

    return () => clearTimeout(id);
  }, [isHovering]);

  return (
    <div
      className='flex justify-center items-center'
      style={{ height: containerHeight[screenSize] }}
    >
      <div className='relative  h-96 flex justify-center items-center'>
        <div
          onMouseEnter={() => setIsHovering(true)}
          className='mb-2 overflow-hidden inline-block relative cursor-default'
          style={{
            fontSize: headerFontSize[screenSize],
            width: headerWidth[screenSize],
          }}
        >
          <motion.div
            className='relative z-10 text-center carousel-text'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Crafting visual narratives for brands
          </motion.div>
          {isHovering && (
            <motion.span
              className='absolute inset-0 z-20 pointer-events-none'
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              exit={{ x: '100%' }}
              transition={{
                duration: 2,
                ease: 'linear',
              }}
              style={{
                height: '50%',
                background:
                  'linear-gradient(135deg, transparent 35%, #ff0080 40%, #0080ff 45%, #00ff80 50%, #ff8000 55%, #ff0080 60%, transparent 65%)',
                mixBlendMode: 'screen',
                transform: `rotate(45deg)`,
              }}
            />
          )}
          {isHovering && (
            <motion.span
              className='absolute inset-0 z-20 pointer-events-none'
              initial={{ x: '-50%' }}
              animate={{ x: '100%' }}
              exit={{ x: '100%' }}
              transition={{
                duration: 2,
                ease: 'linear',
                delay: 1.5,
              }}
              style={{
                top: '54%',
                height: '50%',
                background:
                  'linear-gradient(135deg, transparent 35%, #ff0080 40%, #0080ff 45%, #00ff80 50%, #ff8000 55%, #ff0080 60%, transparent 65%)',
                mixBlendMode: 'screen',
                transform: `rotate(45deg)`,
              }}
            />
          )}
        </div>

        {/* Images following elliptical paths */}
        {media.map((item, index) => {
          const startAngle = (index / media.length) * 2 * Math.PI;
          // Create keyframes for elliptical motion
          const keyframes = createEllipticalKeyframes(
            startAngle,
            radiusX,
            radiusY
          );

          return (
            <motion.div
              key={item}
              className='absolute'
              style={{
                width: itemSize[screenSize],
                height: itemSize[screenSize],
                left: leftOffset[screenSize],
                top: topOffset[screenSize],
              }}
              initial={{
                scale: 0,
                opacity: 0,
                x: keyframes.x[0],
                y: keyframes.y[0],
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: keyframes.x,
                y: keyframes.y,
              }}
              transition={{
                scale: {
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'backOut',
                },
                opacity: {
                  delay: index * 0.1,
                  duration: 0.5,
                },
                x: {
                  delay: 0.8,
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear', // Back to linear since we're compensating in the keyframes
                },
                y: {
                  delay: 0.8,
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear', // Back to linear since we're compensating in the keyframes
                },
              }}
              whileHover={{
                scale: 1.4,
                zIndex: 20,
                rotate: [0, -2, 2, -1, 1, 0],
                transition: {
                  duration: 0.2,
                  rotate: {
                    duration: 0.3,
                    ease: 'easeInOut',
                  },
                },
              }}
            >
              {/* Use emoji as fallback, replace with actual images */}
              {item.endsWith('.mp4') ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='animate-visible'
                >
                  <source
                    src={`${BASE_PATH}/images/carousel/${item}`}
                    type='video/mp4'
                  />
                </video>
              ) : (
                <img src={`${BASE_PATH}/images/carousel/${item}`} alt={item} />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CirclingCarousel;
