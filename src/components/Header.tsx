'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const HEADER_HEIGHT = 86;

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'WORK', link: '/projects', color: 'bg-electric-lime' },
    { name: 'INFO', link: '/info', color: 'bg-hot-pink' },
    { name: 'PLAYGROUND', link: '/playground', color: 'bg-lime-green' },
  ];

  return (
    <header
      className={`w-full border-b border-foreground px-3 py-4 h-[${HEADER_HEIGHT}px]`}
    >
      <div className='flex justify-between items-center'>
        <Link
          className='flex flex-col text-[24px] '
          style={{ lineHeight: 1.1 }}
          href='/'
        >
          <span className='cursor-button'>Yuliya Tverdokhlib</span>
          <span className='cursor-button'>Brand Design & Art Direction</span>
        </Link>

        <nav className='flex items-center gap-3'>
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
      </div>
    </header>
  );
};

export default Header;
