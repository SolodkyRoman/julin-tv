'use client';

import ResponsiveImage from '@/components/ResponsiveImage';
import { useEffect, useState } from 'react';

const IMAGES = ['PW12_a', 'PW12_b', 'PW12_c', 'PW12_d', 'PW12_e'];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const clear = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % IMAGES.length);
    }, 500);

    return () => clearInterval(clear);
  }, []);

  return (
    <div className={`relative overflow-hidden flex-1/2`}>
      {IMAGES.map((name, index) => (
        <ResponsiveImage
          key={index}
          imageName={name}
          format='png'
          alt='prope'
          rowCount={2}
          className={`absolute left-0 top-0 w-full h-full ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Slider;
