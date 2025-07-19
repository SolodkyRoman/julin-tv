'use client';

import React, { ReactNode, useEffect } from 'react';
import Header from './Header';

const useAnimateVisible = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting, boundingClientRect, target } = entry;
          const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;

          // Element has just entered the viewport from below while scrolling down
          const enteringScreenFromBelow =
            isIntersecting &&
            boundingClientRect.top >= 0 &&
            boundingClientRect.top < viewportHeight;

          if (enteringScreenFromBelow) {
            console.log('Element entering viewport:');
            target.classList.add('visible');
          }

          // Element has left the viewport by scrolling past it upward (i.e. now below the fold)
          const leftBelowViewport =
            !isIntersecting && boundingClientRect.top > 0;

          console.log({
            isIntersecting,
            top: boundingClientRect.top,
            viewportHeight,
          });

          if (leftBelowViewport) {
            console.log('Element left viewport upward:');
            target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.animate-visible');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};

const CommonLayout = ({ children }: { children: ReactNode }) => {
  useAnimateVisible();

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CommonLayout;
