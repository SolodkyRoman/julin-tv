'use client';

import React, { useLayoutEffect, useState } from 'react';

const MediaPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    // Scroll to top and disable scrolling while preloader is visible
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const loadMedia = () => {
      console.log('[MediaPreloader] Starting media loading process');
      console.log('[MediaPreloader] User Agent:', navigator.userAgent);
      console.log(
        '[MediaPreloader] Is iOS Safari:',
        /iPad|iPhone|iPod/.test(navigator.userAgent)
      );

      // Find all images and videos on the page
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));
      const totalMedia = images.length + videos.length;

      console.log('[MediaPreloader] Found media:', {
        images: images.length,
        videos: videos.length,
        total: totalMedia,
      });

      if (totalMedia === 0) {
        console.log('[MediaPreloader] No media found, hiding preloader');
        setProgress(100);
        document.body.style.overflow = 'auto';
        setIsVisible(false);
        return;
      }

      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        const newProgress = Math.round((loadedCount / totalMedia) * 100);
        console.log('[MediaPreloader] Progress update:', {
          loadedCount,
          totalMedia,
          progress: newProgress,
        });
        setProgress(newProgress);

        if (loadedCount >= totalMedia) {
          console.log('[MediaPreloader] All media loaded, hiding in 300ms');
          setTimeout(() => {
            console.log('[MediaPreloader] Attempting to hide preloader');
            document.body.style.overflow = 'auto';
            setIsVisible(false);
          }, 300);
        }
      };

      // Handle images
      images.forEach((img, index) => {
        console.log(`[MediaPreloader] Image ${index + 1}/${images.length}:`, {
          src: img.src,
          complete: img.complete,
        });
        if (img.complete) {
          console.log(`[MediaPreloader] Image ${index + 1} already loaded`);
          updateProgress();
        } else {
          const handleLoad = () => {
            console.log(
              `[MediaPreloader] Image ${index + 1} loaded successfully`
            );
            updateProgress();
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleLoad);
          };

          const handleError = () => {
            console.log(
              `[MediaPreloader] Image ${index + 1} failed to load:`,
              img.src
            );
            updateProgress();
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
          };

          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleError);
        }
      });

      // Handle videos
      videos.forEach((video, index) => {
        const sources = Array.from(video.querySelectorAll('source'));
        const hasSources = sources.length > 0;
        console.log(`[MediaPreloader] Video ${index + 1}/${videos.length}:`, {
          src: video.src,
          readyState: video.readyState,
          hasSources,
          sourceCount: sources.length,
          currentSrc: video.currentSrc,
          networkState: video.networkState,
          error: video.error,
        });

        // Skip videos with no src and no source elements
        if (!video.src && !hasSources) {
          console.log(
            `[MediaPreloader] Video ${index + 1} has no src or sources, skipping`
          );
          updateProgress();
          return;
        }

        if (video.readyState >= 3) {
          console.log(`[MediaPreloader] Video ${index + 1} already loaded`);
          updateProgress();
        } else {
          const handleLoad = () => {
            console.log(
              `[MediaPreloader] Video ${index + 1} loaded successfully`
            );
            updateProgress();
            video.removeEventListener('canplaythrough', handleLoad);
            video.removeEventListener('error', handleError);
          };

          const handleError = () => {
            console.log(
              `[MediaPreloader] Video ${index + 1} failed to load:`,
              video.src || 'sources'
            );
            updateProgress();
            video.removeEventListener('canplaythrough', handleLoad);
            video.removeEventListener('error', handleError);
          };

          video.addEventListener('canplaythrough', handleLoad);
          video.addEventListener('error', handleError);
        }
      });
    };

    const timer = setTimeout(loadMedia, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    console.log('[MediaPreloader] Component hidden, returning null');
    return null;
  }

  console.log('[MediaPreloader] Rendering preloader with progress:', progress);

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
