'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/ae'>
      <ProjectInfo
        title='Aesté'
        description='Aesté is a high-end home scent brand concept focused on elevating everyday rituals through fragrance. I developed the creative direction, identity, and packaging design, drawing inspiration from the poetic beauty of a blooming flower. The visual language and animations explore the slow, elegant blooming—mirroring the experience of filling a space with luxurious scent.'
      />

      <div className='grid grid-cols-2 gap-3 mx-3'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible w-full'
        >
          <source
            src={`${BASE_PATH}/images/projects/ae/ae1.mp4`}
            type='video/mp4'
          />
        </video>
        <ResponsiveImage imageName='ae2' format='png' rowCount={2} alt='' />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='ae3'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='ae4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='ae5'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='ae6'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='ae7'
          format='png'
          rowCount={2}
          alt='Proper Wild Insta Ad 1'
        />
      </div>
    </ImagePathProvider>
  );
};

export default Page;
