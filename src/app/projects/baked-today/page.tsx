'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/bt'>
      <ProjectInfo
        title='Baked Today'
        description='Direction and identity for Bake Today—an easy and delicious baking mix designed to bring fresh, nutritious, and flavorful breakfasts to every family. The brand identity is built around bright, bold color pairings, with red as the primary brand color to evoke the warmth of freshly prepared food. The logo features custom lettering that is both memorable and distinctive, serving as a signature element of the brand. Simple, playful illustrations complement the design, adding charm and approachability to the overall aesthetic.'
      />

      <div className='flex flex-col gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='bt1'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='bt2'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='bt4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='bt5'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='bt6'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='bt7'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />

        <ResponsiveImage
          imageName='bt8'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='mx-3 mt-3'>
        <ResponsiveImage
          imageName='bt9'
          format='png'
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex mx-3 my-3 gap-3'>
        <ResponsiveImage
          imageName='bt10'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
          className='flex-1/2'
        />
        <div className='flex-1/2'>
          <video autoPlay muted loop playsInline className='animate-visible'>
            <source
              src={`${BASE_PATH}/images/projects/bt/bt11.mp4`}
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </ImagePathProvider>
  );
};

export default Page;
