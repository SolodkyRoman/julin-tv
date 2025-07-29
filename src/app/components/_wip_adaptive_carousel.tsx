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

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Full-screen responsive configuration with proper media scaling
// Full-screen responsive configuration with proper media scaling
const config: Record<
  ScreenSize,
  {
    rx: number;
    ry: number;
    itemSize: number;
    fontSize: number;
    textWidth: number;
    textScale: number;
    hoverScale: number;
  }
> = {
  xs: {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 400) * 0.35,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 600) * 0.25,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 400) * 0.225,
      112
    ),
    fontSize: 18,
    textWidth: 280,
    textScale: 0.75,
    hoverScale: 1.15,
  },
  sm: {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 640) * 0.38,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 700) * 0.28,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 640) * 0.20625,
      150
    ),
    fontSize: 24,
    textWidth: 350,
    textScale: 0.8,
    hoverScale: 1.2,
  },
  md: {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 768) * 0.4,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 800) * 0.3,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 768) * 0.1875,
      187
    ),
    fontSize: 32,
    textWidth: 450,
    textScale: 0.85,
    hoverScale: 1.25,
  },
  lg: {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 1024) * 0.42,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 900) * 0.32,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 1024) * 0.16875,
      243
    ),
    fontSize: 40,
    textWidth: 550,
    textScale: 0.9,
    hoverScale: 1.3,
  },
  xl: {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 1280) * 0.43,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 1000) * 0.33,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 1280) * 0.15,
      300
    ),
    fontSize: 48,
    textWidth: 650,
    textScale: 0.95,
    hoverScale: 1.35,
  },
  '2xl': {
    rx: (typeof window !== 'undefined' ? window.innerWidth : 1536) * 0.44,
    ry: (typeof window !== 'undefined' ? window.innerHeight : 1100) * 0.34,
    itemSize: Math.min(
      (typeof window !== 'undefined' ? window.innerWidth : 1536) * 0.140625,
      525
    ),
    fontSize: 56,
    textWidth: 750,
    textScale: 1,
    hoverScale: 1.4,
  },
};

const createEllipticalKeyframes = (
  startAngle: number,
  radiusX: number,
  radiusY: number
) => {
  const steps = 120;
  const xKeyframes = [];
  const yKeyframes = [];

  for (let i = 0; i <= steps; i++) {
    const angle = startAngle + (i / steps) * 2 * Math.PI;
    xKeyframes.push(Math.cos(angle) * radiusX);
    yKeyframes.push(Math.sin(angle) * radiusY);
  }

  return { x: xKeyframes, y: yKeyframes };
};

const FullScreenCirclingCarousel = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('lg');
  const [isHovering, setIsHovering] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Key to reset animations
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });

      // Reset animations on resize
      setAnimationKey(prev => prev + 1);

      if (width < 480) {
        setScreenSize('xs');
      } else if (width < 640) {
        setScreenSize('sm');
      } else if (width < 768) {
        setScreenSize('md');
      } else if (width < 1024) {
        setScreenSize('lg');
      } else if (width < 1280) {
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    updateScreenSize();

    // Debounce resize events to avoid excessive updates
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateScreenSize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isHovering) return;
    const id = setTimeout(() => setIsHovering(false), 3000);
    return () => clearTimeout(id);
  }, [isHovering]);

  // Recalculate config based on current dimensions with proper scaling
  const currentConfig = {
    rx:
      dimensions.width *
      (screenSize === 'xs'
        ? 0.35
        : screenSize === 'sm'
          ? 0.38
          : screenSize === 'md'
            ? 0.4
            : screenSize === 'lg'
              ? 0.42
              : screenSize === 'xl'
                ? 0.43
                : 0.44),
    ry:
      dimensions.height *
      (screenSize === 'xs'
        ? 0.25
        : screenSize === 'sm'
          ? 0.28
          : screenSize === 'md'
            ? 0.3
            : screenSize === 'lg'
              ? 0.32
              : screenSize === 'xl'
                ? 0.33
                : 0.34),
    itemSize: Math.min(
      dimensions.width *
        (screenSize === 'xs'
          ? 0.12
          : screenSize === 'sm'
            ? 0.11
            : screenSize === 'md'
              ? 0.1
              : screenSize === 'lg'
                ? 0.09
                : screenSize === 'xl'
                  ? 0.08
                  : 0.075),
      screenSize === 'xs'
        ? 60
        : screenSize === 'sm'
          ? 80
          : screenSize === 'md'
            ? 100
            : screenSize === 'lg'
              ? 130
              : screenSize === 'xl'
                ? 160
                : 200
    ),
    fontSize: config[screenSize].fontSize,
    textWidth: config[screenSize].textWidth,
    textScale: config[screenSize].textScale,
    hoverScale: config[screenSize].hoverScale,
  };

  return (
    <div
      className='flex justify-center items-center w-full overflow-hidden'
      style={{
        minHeight: '100vh',
        height: 'auto',
      }}
    >
      <div className='flex justify-center items-center w-full h-full relative'>
        {/* Main Text - Centered */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          className='overflow-hidden inline-block relative cursor-default z-30'
          style={{
            fontSize: currentConfig.fontSize,
            maxWidth: Math.min(currentConfig.textWidth, dimensions.width - 40),
            transform: `scale(${currentConfig.textScale})`,
          }}
        >
          <motion.div
            className='relative z-10 text-center font-bold leading-tight px-4 carousel-text'
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Crafting visual narratives for brands
          </motion.div>

          {/* Rainbow effects */}
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

        {/* Circling Media Items - Full Screen Scale with Animation Reset */}
        <div className='absolute inset-0 flex justify-center items-center'>
          {media.map((item, index) => {
            const startAngle = (index / media.length) * 2 * Math.PI;
            const keyframes = createEllipticalKeyframes(
              startAngle,
              currentConfig.rx,
              currentConfig.ry
            );

            return (
              <motion.div
                key={`${item}-${animationKey}`} // Reset animation on key change
                className='absolute'
                style={{
                  width: currentConfig.itemSize,
                  height: currentConfig.itemSize,
                  left: '50%',
                  top: '50%',
                  marginLeft: -currentConfig.itemSize / 2,
                  marginTop: -currentConfig.itemSize / 2,
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
                    delay: index * 0.15,
                    duration: 0.8,
                    ease: 'backOut',
                  },
                  opacity: {
                    delay: index * 0.15,
                    duration: 0.8,
                  },
                  x: {
                    delay: 1.5,
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  y: {
                    delay: 1.5,
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                whileHover={{
                  scale: currentConfig.hoverScale,
                  zIndex: 50,
                  rotate: [0, -2, 2, -1, 1, 0],
                  transition: {
                    duration: 0.3,
                    rotate: {
                      duration: 0.4,
                      ease: 'easeInOut',
                    },
                  },
                }}
              >
                {/* Your actual images and videos */}
                <div className='w-full h-full'>
                  {item.endsWith('.mp4') ? (
                    <video autoPlay muted loop playsInline>
                      <source
                        src={`${BASE_PATH}/images/carousel/${item}`}
                        type='video/mp4'
                      />
                    </video>
                  ) : (
                    <img
                      src={`/images/carousel/${item}`}
                      alt={item}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced debug info */}
      <div className='fixed bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-lg text-sm border border-white/10'>
        <div>Screen: {screenSize}</div>
        <div>
          Size: {dimensions.width}×{dimensions.height}px
        </div>
        <div>
          Ellipse: {Math.round(currentConfig.rx)}×{Math.round(currentConfig.ry)}
          px
        </div>
      </div>
    </div>
  );
};

export default FullScreenCirclingCarousel;
