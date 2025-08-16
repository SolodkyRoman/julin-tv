'use client';

import CirclingCarousel from '@/app/components/CirclingCarousel';
import MediaPreloader from '@/components/MediaPreloader';
import React from 'react';

const Home = () => {
  return (
    <>
      <MediaPreloader />
      <CirclingCarousel />
    </>
  );
};

export default Home;
