'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'WORK', link: '/', color: 'bg-electric-lime' },
    { name: 'INFO', link: '/info', color: 'bg-hot-pink' },
    { name: 'PLAYGROUND', link: '/playground', color: 'bg-lime-green' },
  ];

  return (
    <header className='w-full bg-white border-b border-foreground px-8 py-9'>
      <div className='flex justify-between items-start'>
        <Link className='flex flex-col' href='/'>
          <h1 className='text-[32px] font-medium'>Yuliya Tverdokhlib</h1>
          <h2 className='text-[32px] font-medium'>
            Brand Design & Art Direction
          </h2>
        </Link>

        <nav className='flex items-center space-x-1'>
          {navItems.map(item => (
            <Link
              href={item.link}
              key={item.name}
              className={`
                  flex items-center space-x-[6px] px-4 py-2 text-[26px] font-medium 
                  ${
                    pathname === item.link
                      ? 'border-b-foreground border-b-1'
                      : 'text-gray-900 hover:bg-gray-50'
                  }
                `}
            >
              <span
                className={`w-[32px] h-[32px] rounded-full ${item.color} `}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
