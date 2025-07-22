'use client';

import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from '@/components/Footer';

const makeScolledElementsVisible = () => {
  const animatedElements = document.querySelectorAll('.animate-visible');
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isAboveViewport = rect.bottom < 0;

    if (isAboveViewport) {
      console.log(el);
      el.classList.add('visible');
    }
  });
};

const animateOnEnterFromBelow = (entries: IntersectionObserverEntry[]) => {
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
      target.classList.add('visible');
    }

    // Element has left the viewport by scrolling past it upward (i.e. now below the fold)
    const leftBelowViewport = !isIntersecting && boundingClientRect.top > 0;

    if (leftBelowViewport) {
      target.classList.remove('visible');
    }
  });
};

const useAnimateVisible = () => {
  useEffect(() => {
    makeScolledElementsVisible();
    const observer = new IntersectionObserver(animateOnEnterFromBelow, {
      threshold: 0,
      rootMargin: '0px 0px 0px 0px',
    });

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
      <Footer />
    </div>
  );
};

export default CommonLayout;
