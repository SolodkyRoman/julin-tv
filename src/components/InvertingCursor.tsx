'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Transition } from 'motion';

const TRANSITION: Transition = {
  left: { type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 },
  top: { type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 },
  translateX: { type: 'spring', stiffness: 400, damping: 40 },
  translateY: { type: 'spring', stiffness: 400, damping: 40 },
  // width: { type: 'spring', stiffness: 400, damping: 40 },
  // height: { type: 'spring', stiffness: 400, damping: 40 },
  borderRadius: { type: 'spring', stiffness: 500, damping: 45 },
  scale: { type: 'spring', stiffness: 600, damping: 35 },
};

const InvertingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default', 'button', 'text'
  const [textCursorHeight, setTextCursorHeight] = useState(0);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Cancel previous frame if it exists
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });

        if (!isVisible) {
          setIsVisible(true);
        }

        // Check what element we're hovering over
        const element = e.target as HTMLElement;
        const isButton =
          element.tagName === 'A' ||
          element.tagName === 'BUTTON' ||
          element.classList.contains('cursor-button') ||
          element.closest('a') ||
          element.closest('button');

        const isText =
          element.tagName === 'P' ||
          element.tagName === 'H1' ||
          element.tagName === 'H2' ||
          element.tagName === 'H3' ||
          element.classList.contains('cursor-text');

        const newState = isButton ? 'button' : isText ? 'text' : 'default';
        setCursorState(newState);

        if (newState === 'text') {
          const dataCursorHeight = element.getAttribute('data-cursor-height');
          console.log(dataCursorHeight);
          setTextCursorHeight(
            dataCursorHeight ? parseInt(dataCursorHeight) : 20
          );
        }
      });
    };

    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setIsVisible(false);
      setCursorState('default');
    };

    // Use passive listeners for better performance
    window.addEventListener('mousemove', updateMousePosition, {
      passive: true,
    });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursorState, isVisible]);

  return (
    <motion.div
      className='fixed pointer-events-none z-50'
      style={{
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform',
      }}
      animate={{
        left: mousePosition.x,
        top: mousePosition.y,
        width: cursorState === 'text' ? 4 : cursorState === 'button' ? 40 : 20,
        height:
          cursorState === 'text'
            ? textCursorHeight
            : cursorState === 'button'
              ? 40
              : 20,
        borderRadius: cursorState === 'text' ? 100 : 40,
        scale: isVisible ? 1 : 0,
        translateX:
          cursorState === 'text' ? -2 : cursorState === 'button' ? -20 : -10,
        translateY:
          cursorState === 'text'
            ? -(textCursorHeight / 2)
            : cursorState === 'button'
              ? -20
              : -10,
      }}
      transition={TRANSITION}
    />
  );
};

export default InvertingCursor;
