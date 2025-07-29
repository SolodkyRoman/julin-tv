'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';
import SectionDivider from '@/components/SectionDivider';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/sl'>
      <ProjectInfo
        title='Sid Lee'
        description='While working at Sid Lee as a social graphic designer, I contributed to the launch of Hogwarts Legacy by creating motion assets for its social media campaigns. I also designed thematic social and in-game visuals for Multiversus, utilizing After Effects and Cinema 4D to bring dynamic concepts to life.'
      />

      <SectionDivider label='Social media assets' />

      <div className='grid grid-cols-2 gap-3 mx-3'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible w-full'
        >
          <source
            src={`${BASE_PATH}/images/projects/sl/sl1.mp4`}
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
            src={`${BASE_PATH}/images/projects/sl/sl1.mp4`}
            type='video/mp4'
          />
        </video>
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='sl3'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='sl4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='sl5'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='sl6'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='sl7'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='sl8'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <SectionDivider label='In-game visuals' />

      <ResponsiveImage
        className='mx-3 mt-3'
        imageName='sl10'
        format='png'
        alt='Proper Wild Insta Ad 1'
      />
    </ImagePathProvider>
  );
};

export default Page;
