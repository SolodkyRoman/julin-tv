'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';
import Slider from '@/components/Slider';
import MediaPreloader from '@/components/MediaPreloader';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const SLIDER_IMAGES = ['mh5', 'mh6', 'mh7'];

const Page = () => {
  return (
    <>
      <MediaPreloader />
      <ImagePathProvider path='images/projects/mh'>
      <ProjectInfo
        title='Madison Home'
        description='Madison Home is a luxury brand redefining home cleaning by transforming routine tasks into moments of quiet luxury. Their main products are laundry detergent sheets and wool dryer balls. The challenge was to craft a brand identity that embodies elegance while offering a serene approach to the everyday. The design achieves this through minimalist, yet nostalgic layouts that evoke feelings of safety, coziness, and purity. A delicate balance of simplicity and carefully chosen materials  — organic yet refined — enhances the perception of luxury, elevating the everyday into 
a sensory experience.'
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
    </>
  );
};

export default Page;
