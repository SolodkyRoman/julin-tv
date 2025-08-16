'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';
import SectionDivider from '@/components/SectionDivider';
import MediaPreloader from '@/components/MediaPreloader';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <>
      <MediaPreloader />
      <ImagePathProvider path='images/projects/gd'>
      <ProjectInfo
        title='Glassdoor'
        description='As a Brand Designer at Glassdoor, I contributed to a wide range of creative initiatives, from ideating and brainstorming email and blog campaigns to designing social content, digital banners, custom illustrations, and motion assets.'
      />

      <SectionDivider label='Motion assets' />

      <div className='grid grid-cols-2 gap-3 mx-3'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible w-full'
        >
          <source
            src={`${BASE_PATH}/images/projects/gd/1.mp4`}
            type='video/mp4'
          />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible w-full'
        >
          <source
            src={`${BASE_PATH}/images/projects/gd/2.mp4`}
            type='video/mp4'
          />
        </video>
      </div>

      <div className='mx-3 mt-15'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible w-full'
        >
          <source
            src={`${BASE_PATH}/images/projects/gd/3.mp4`}
            type='video/mp4'
          />
        </video>
      </div>

      <SectionDivider label='Blog assets & illustrations' />

      <div className='grid grid-cols-2 gap-3 mx-3'>
        <ResponsiveImage
          imageName='3'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='grid grid-cols-3 gap-3 mt-3 mx-3'>
        <ResponsiveImage
          imageName='5'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='6'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='7'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <SectionDivider label='Email design & illustration' />

      <div className='grid grid-cols-3 gap-3 mt-3 mx-3'>
        <ResponsiveImage
          imageName='8'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='9'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='10'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>
    </ImagePathProvider>
    </>
  );
};

export default Page;
