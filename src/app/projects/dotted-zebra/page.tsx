'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/dz'>
      <ProjectInfo
        title='Dotted Zebra'
        description='Dotted Zebra is a conceptual skincare brand created for adulteens—a bold, expressive generation that balances care with rebellion. The creative direction centers around the idea of skincare with a “wild heart.” While the core packaging remains minimal and clean, the identity brings playful energy through expressive visuals and storytelling. The concept also highlights the brand’s commitment to protecting endangered species, weaving purpose into its vibrant personality. All brand imagery and mockups were generated using AI as part of the experimental process.'
      />

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='dz1'
          format='webp'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='dz2'
          format='webp'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='dz3'
          format='webp'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='dz4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='dz5'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='mx-3 mt-3'>
        <ResponsiveImage
          imageName='dz6'
          format='webp'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='w-[70%] mx-auto my-6'>
        <ResponsiveImage
          imageName='dz7'
          format='webp'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='dz8'
          format='webp'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='dz9'
          format='webp'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='dz10'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='dz11'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex mx-3 my-3 gap-3'>
        <div className='flex-1/2'>
          <video autoPlay muted loop playsInline className='animate-visible'>
            <source
              src={`${BASE_PATH}/images/projects/dz/dz12.mp4`}
              type='video/mp4'
            />
          </video>
        </div>
        <ResponsiveImage
          imageName='dz13'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
          className='flex-1/2'
        />
      </div>
    </ImagePathProvider>
  );
};

export default Page;
