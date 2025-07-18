'use client';

import React, { ReactNode, useEffect } from 'react';
import Header from './Header';

const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px 0px 0px',
};

const useAnimateVisible = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-visible');
    animatedElements.forEach(el => observer.observe(el));

    console.log(animatedElements);

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};

const PageLayout = ({ children }: { children: ReactNode }) => {
  useAnimateVisible();

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
