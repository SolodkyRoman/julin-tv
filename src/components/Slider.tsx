'use client';

import ResponsiveImage from '@/components/ResponsiveImage';
import { useEffect, useState } from 'react';

const Slider = ({
  imgNames,
  rowCount = 1,
}: {
  imgNames: string[];
  rowCount?: number;
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const clear = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % imgNames.length);
    }, 500);

    return () => clearInterval(clear);
  }, [imgNames]);

  return (
    <div className='h-full relative overflow-hidden flex-1/2'>
      {imgNames.map((name, index) => (
        <ResponsiveImage
          key={index}
          imageName={name}
          format='png'
          alt='prope'
          rowCount={rowCount}
          className={`absolute left-0 top-0 w-full h-full ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Slider;
