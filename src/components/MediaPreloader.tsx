'use client';

import React, { useLayoutEffect, useState } from 'react';

const MediaPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const loadMedia = () => {
      // Find all images and videos on the page
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));
      const totalMedia = images.length + videos.length;

      if (totalMedia === 0) {
        setProgress(100);
        setIsVisible(false);
        return;
      }

      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        const newProgress = Math.round((loadedCount / totalMedia) * 100);
        setProgress(newProgress);

        if (loadedCount >= totalMedia) {
          setTimeout(() => {
            setIsVisible(false);
          }, 300);
        }
      };

      // Handle images
      images.forEach(img => {
        if (img.complete) {
          updateProgress();
        } else {
          const handleLoad = () => {
            updateProgress();
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleLoad);
          };

          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleLoad);
        }
      });

      // Handle videos
      videos.forEach(video => {
        if (video.readyState >= 3) {
          updateProgress();
        } else {
          const handleLoad = () => {
            updateProgress();
            video.removeEventListener('canplaythrough', handleLoad);
            video.removeEventListener('error', handleLoad);
          };

          video.addEventListener('canplaythrough', handleLoad);
          video.addEventListener('error', handleLoad);
        }
      });
    };

    const timer = setTimeout(loadMedia, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-white z-50 flex items-center justify-center'>
      <div className='text-center'>
        <div className='w-64 h-1 bg-gray-200 rounded-full mb-4'>
          <div
            className='h-full bg-hot-pink rounded-full transition-all duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className='text-lg font-medium'>{progress}%</div>
      </div>
    </div>
  );
};

export default MediaPreloader;
