'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const HEADER_HEIGHT = 86;

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'WORK', link: '/projects', color: 'bg-electric-lime' },
    { name: 'INFO', link: '/info', color: 'bg-hot-pink' },
    { name: 'PLAYGROUND', link: '/playground', color: 'bg-lime-green' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full border-b border-foreground px-3 py-4 h-[${HEADER_HEIGHT}px]`}
      >
        <div className='flex justify-between items-center'>
          {/* Logo - responsive text */}
          <Link
            className='flex flex-col text-[24px]'
            style={{ lineHeight: 1.1 }}
            href='/'
          >
            <span className='cursor-button'>Yuliya Tverdokhlib</span>
            <span className='cursor-button hidden md:block'>Brand Design & Art Direction</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-3'>
            {navItems.map(item => (
              <Link
                href={item.link}
                key={item.name}
                className='flex items-center space-x-[6px] px-1 py-1 text-[20px]'
              >
                <span
                  className={`w-[20px] h-[20px] rounded-full ${item.color}`}
                />
                <span
                  className={
                    pathname === item.link
                      ? 'underline underline-offset-[6px]'
                      : ''
                  }
                  style={{ textDecorationThickness: 1 }}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-button relative'
            aria-label='Toggle menu'
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 absolute' : 'mb-1'}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 absolute' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-[60] md:hidden'>
          <div className='flex flex-col h-full'>
            {/* Mobile Header */}
            <div className='flex justify-between items-center px-3 py-4 border-b border-foreground'>
              <Link
                className='text-[24px] cursor-button'
                href='/'
                onClick={closeMobileMenu}
              >
                Yuliya Tverdokhlib
              </Link>
              <button
                onClick={toggleMobileMenu}
                className='flex flex-col justify-center items-center w-8 h-8 cursor-button relative'
                aria-label='Close menu'
              >
                <span className='block w-6 h-0.5 bg-foreground rotate-45 absolute' />
                <span className='block w-6 h-0.5 bg-foreground -rotate-45 absolute' />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className='flex-1 flex flex-col justify-center items-center gap-12'>
              {navItems.map(item => (
                <Link
                  href={item.link}
                  key={item.name}
                  className='flex items-center space-x-4 text-[32px]'
                  onClick={closeMobileMenu}
                >
                  <span
                    className={`w-[24px] h-[24px] rounded-full ${item.color}`}
                  />
                  <span
                    className={
                      pathname === item.link
                        ? 'underline underline-offset-[8px]'
                        : ''
                    }
                    style={{ textDecorationThickness: 1 }}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
