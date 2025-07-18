'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import SectionDivider from '@/components/SectionDivider';
import ResponsiveImage from '@/components/ResponsiveImage';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import Slider from './Slider';

const Page = () => {
  return (
    <ImagePathProvider path='/images/projects/proper-wild'>
      <ProjectInfo
        title='Proper Wild'
        description='As the Senior Brand Designer at Proper Wild, I lead all design efforts, overseeing creative execution across both digital and print channels. My work includes digital ads, motion graphics, photo retouching, Amazon assets, email campaigns, and POS materials. I ensure consistent brand alignment across emails, social media, and printed collateral.'
      />

      <ResponsiveImage imageName='PW1' format='webp' alt='Proper Wild Banner' />

      <SectionDivider label='Ads' />

      <div className='flex gap-3 mx-3'>
        <ResponsiveImage
          imageName='PW2'
          format='png'
          rowCount={4}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='PW3'
          format='png'
          rowCount={4}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='PW4'
          format='png'
          rowCount={4}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='PW5'
          rowCount={4}
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3'>
        <ResponsiveImage
          imageName='PW6'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='PW7'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='PW8'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <SectionDivider label='Email Design' />

      <div className='flex gap-3 mx-auto w-[70%]'>
        <ResponsiveImage
          imageName='PW9'
          format='png'
          alt='prope'
          rowCount={3}
        />

        <ResponsiveImage
          imageName='PW10'
          format='png'
          alt='prope'
          rowCount={3}
        />
      </div>

      <SectionDivider label='Amazon Assets' />

      <div className='flex gap-3 mx-3 items-stretch'>
        <ResponsiveImage
          imageName='PW11'
          format='png'
          alt='prope'
          rowCount={2}
          className='flex-1/2'
        />

        <Slider />
      </div>
    </ImagePathProvider>
  );
};

export default Page;
