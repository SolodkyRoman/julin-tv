'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/fo'>
      <ProjectInfo
        title='Forra'
        description='Aesté is a high-end home scent brand concept focused on elevating everyday rituals through fragrance. I developed the creative direction, identity, and packaging design, drawing inspiration from the poetic beauty of a blooming flower. The visual language and animations explore the slow, elegant blooming—mirroring the experience of filling a space with luxurious scent.'
      />

      <ResponsiveImage imageName='fr1' format='png' alt='' />

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='fr2'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='fr3'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='fr4'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <ResponsiveImage
        className='mx-3 my-3'
        imageName='fr5'
        format='png'
        alt='Proper Wild Insta Ad 1'
      />

      <div className='flex gap-3 mx-3 mt-3'>
        <ResponsiveImage
          imageName='fr6'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='fr7'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
        <ResponsiveImage
          imageName='fr8'
          format='png'
          rowCount={3}
          alt='Proper Wild Insta Ad 1'
        />
      </div>

      <ResponsiveImage
        className='mx-3 mt-3'
        imageName='fr9'
        format='png'
        alt='Proper Wild Insta Ad 1'
      />
    </ImagePathProvider>
  );
};

export default Page;
