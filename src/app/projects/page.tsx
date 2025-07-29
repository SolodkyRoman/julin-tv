import React from 'react';
import Link from 'next/link';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const projects = [
  {
    title: 'Proper Wild',
    meta: 'Senior Brand Designer',
    thumbnail: '1',
    link: '/projects/proper-wild',
  },
  {
    title: 'Spring Break by Proper Wild',
    meta: '360 Campaign',
    thumbnail: '2',
    link: '/projects/spring-break',
  },
  {
    title: 'Aesté',
    meta: 'Brand Identity, packaging',
    thumbnail: '3',
    link: '/projects/aeste',
  },
  {
    title: 'Madison Home',
    meta: 'Brand Identity, Art Direction, Packaging Design',
    thumbnail: '4',
    link: '/projects/madison-home',
  },
  {
    title: 'Dotted Zebra',
    meta: 'Brand Identity, Art Direction, Packaging Design',
    thumbnail: '5',
    link: '/projects/dotted-zebra',
  },
  {
    title: 'Bake Today',
    meta: 'Brand Identity, Packaging Design',
    thumbnail: '6',
    link: '/projects/bake-today',
  },
  {
    title: 'Sid Lee',
    meta: 'Social Media Designer',
    thumbnail: '7',
    link: '/projects/sid-lee',
  },
  {
    title: 'Forra',
    meta: 'Brand Identity, Packaging Design',
    thumbnail: '8',
    link: '/projects/forra',
  },
];

const Page = () => {
  return (
    <ImagePathProvider path='images/thumbnails'>
      <div className='mx-3 mt-8'>
        <div className='grid grid-cols-2 gap-6'>
          {projects.map(project => (
            <Link key={project.title} href={project.link} className='block'>
              <div className='mb-4 animate-visible leading-[1.5]'>
                <h2 className='text-[24px]'>{project.title}</h2>
                <p className='text-[15px]'>{project.meta}</p>
              </div>

              <div className='overflow-hidden'>
                <ResponsiveImage
                  rowCount={2}
                  className='w-full hover:scale-115 transition-transform duration-300 ease-out'
                  imageName={project.thumbnail}
                  format='png'
                  alt='project thumbnail'
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ImagePathProvider>
  );
};

export default Page;
