'use client';

import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ProjectInfo from '@/app/projects/ProjectInfo';
import ResponsiveImage from '@/components/ResponsiveImage';
import SectionDivider from '@/components/SectionDivider';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/sb'>
      <ProjectInfo
        title='Spring Break'
        description='I led the art direction for Proper Wild’s Spring Break 360 campaign, a multi-channel brand experience across a series of Florida events. Inspired by early 2000s TV shows, I developed a custom visual identity including a logo, merch, OOH ads, and motion assets. The campaign brought the brand to life through nostalgic visuals, bold storytelling, and energetic design.'
      />

      <ResponsiveImage imageName='SB1' format='webp' alt='Proper Wild Banner' />

      <SectionDivider label='Wildposting' />

      <div className='mx-3 my-3'>
        <ResponsiveImage
          imageName='SB2'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          rowCount={2}
          imageName='SB3'
          format='webp'
          alt='Proper Wild Banner'
        />
        <ResponsiveImage
          rowCount={2}
          imageName='SB4'
          format='png'
          alt='Proper Wild Banner'
        />
      </div>

      <SectionDivider label='Logo animation' />

      <div className='flex gap-3 mx-3 mt-3 flex-col'>
        <video autoPlay muted loop playsInline className='animate-visible'>
          <source
            src={`${BASE_PATH}/images/projects/sb/SB5.mp4`}
            type='video/mp4'
          />
        </video>
        <ResponsiveImage
          imageName='SB6'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>

      <SectionDivider label='Truck & merch' />

      <div className='flex gap-3 mx-3 mt-3'>
        <div className='flex-1'>
          <video autoPlay muted loop playsInline className='animate-visible'>
            <source
              src={`${BASE_PATH}/images/projects/sb/SB6.mp4`}
              type='video/mp4'
            />
          </video>
        </div>

        <div className='flex-1'>
          <ResponsiveImage
            rowCount={2}
            imageName='SB7'
            format='webp'
            alt='Proper Wild Banner'
            className='h-full'
          />
        </div>
      </div>

      <div className='mx-3 my-3'>
        <ResponsiveImage
          imageName='SB8'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          rowCount={2}
          imageName='SB9'
          format='webp'
          alt='Proper Wild Banner'
        />

        <ResponsiveImage
          rowCount={2}
          imageName='SB10'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          rowCount={2}
          imageName='SB11'
          format='png'
          alt='Proper Wild Banner'
        />

        <ResponsiveImage
          rowCount={2}
          imageName='SB12'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          rowCount={3}
          imageName='SB13'
          format='webp'
          alt='Proper Wild Banner'
          className='w-2/5'
        />
        <div className='w-[30%]'>
          <video autoPlay muted loop playsInline className='animate-visible'>
            <source
              src={`${BASE_PATH}/images/projects/sb/SB14.mp4`}
              type='video/mp4'
            />
          </video>
        </div>
        <ResponsiveImage
          rowCount={3}
          className='w-[30%]'
          imageName='SB15'
          format='webp'
          alt='Proper Wild Banner'
        />
      </div>
    </ImagePathProvider>
  );
};

export default Page;
