'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';
import Slider from '@/components/Slider';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const SLIDER_IMAGES = ['mh5', 'mh6', 'mh7'];

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/mh'>
      <ProjectInfo
        title='Madison Home'
        description='Dotted Zebra is a conceptual skincare brand created for adulteens—a bold, expressive generation that balances care with rebellion. The creative direction centers around the idea of skincare with a “wild heart.” While the core packaging remains minimal and clean, the identity brings playful energy through expressive visuals and storytelling.
The concept also highlights the brand’s commitment to protecting endangered species, weaving purpose into its vibrant personality. All brand imagery and mockups were generated using AI as part of the experimental process.'
      />

      <div className='mx-3 mt-3'>
        <ResponsiveImage
          imageName='mh1'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='mh2'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh3'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='mx-3 mt-3 aspect-[3/2]'>
        <Slider imgNames={SLIDER_IMAGES} />
      </div>

      <div className='flex flex-col gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='mh8'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh9'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh10'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='mh11'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh12'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='mh13'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='mx-3 mt-3'>
        <video autoPlay muted loop playsInline className='animate-visible'>
          <source
            src={`${BASE_PATH}/images/projects/mh/mh14.mp4`}
            type='video/mp4'
          />
        </video>
      </div>
    </ImagePathProvider>
  );
};

export default Page;
