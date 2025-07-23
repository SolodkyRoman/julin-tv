'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import SectionDivider from '@/components/SectionDivider';
import ResponsiveImage from '@/components/ResponsiveImage';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import Slider from '@/components/Slider';
import HorizontalProgressiveScroll from '@/components/HorizontalProgressiveScroll';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const SLIDER_IMAGES = ['PW12_a', 'PW12_b', 'PW12_c', 'PW12_d', 'PW12_e'];

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/proper-wild'>
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

      <div className='flex gap-3 mx-3 mt-3'>
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

      <div className='grid grid-cols-2 gap-3 mx-3'>
        <ResponsiveImage
          imageName='PW11'
          format='png'
          alt='prope'
          rowCount={2}
          className='flex-1/2'
        />

        <Slider imgNames={SLIDER_IMAGES} rowCount={2} />
      </div>

      <div className='mx-3 my-3'>
        <HorizontalProgressiveScroll>
          <ResponsiveImage imageName='PW13' format='png' alt='prope' />
        </HorizontalProgressiveScroll>
      </div>

      <div className='mx-3 my-3'>
        <ResponsiveImage imageName='PW14' format='png' alt='prope' />
      </div>

      <SectionDivider label='Video Editing' />

      <div className='flex mx-3 my-3 gap-3 flex-col'>
        <div className='w-full'>
          <video autoPlay muted loop playsInline className='animate-visible'>
            <source
              src={`${BASE_PATH}/images/projects/proper-wild/PW15_1920x1080.mp4`}
              type='video/mp4'
              media='(min-width: 1200px)'
            />
            <source
              src={`${BASE_PATH}/images/projects/proper-wild/PW15_1280x720.mp4`}
              type='video/mp4'
              media='(min-width: 768px)'
            />
            <source
              src={`${BASE_PATH}/images/projects/proper-wild/PW15_853x480.mp4`}
              type='video/mp4'
              media='(min-width: 480px)'
            />
          </video>
        </div>

        <div className='flex mx-3 my-3 gap-3'>
          <div>
            <video autoPlay muted loop playsInline className='animate-visible'>
              <source
                src={`${BASE_PATH}/images/projects/proper-wild/PW17_479x852.mp4`}
                type='video/mp4'
              />
            </video>
          </div>
          <div>
            <video autoPlay muted loop playsInline className='animate-visible'>
              <source
                src={`${BASE_PATH}/images/projects/proper-wild/PW18_479x852.mp4`}
                type='video/mp4'
              />
            </video>
          </div>
          <div>
            <video autoPlay muted loop playsInline className='animate-visible'>
              <source
                src={`${BASE_PATH}/images/projects/proper-wild/PW19_479x852.mp4`}
                type='video/mp4'
              />
            </video>
          </div>
          <div>
            <video autoPlay muted loop playsInline className='animate-visible'>
              <source
                src={`${BASE_PATH}/images/projects/proper-wild/PW20_479x852.mp4`}
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>

      <div className='flex mx-3 mt-20 mb-3 gap-3'>
        <ResponsiveImage
          rowCount={2}
          imageName='PW21_final'
          format='png'
          alt='prope'
        />
        <ResponsiveImage
          rowCount={2}
          imageName='PW22'
          format='png'
          alt='prope'
        />
      </div>
    </ImagePathProvider>
  );
};

export default Page;
