'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';

const Page = () => {
  return (
    <ImagePathProvider path='images/projects/fo'>
      <ProjectInfo
        title='Forra'
        description='I developed the identity and packaging for Forra, a mushroom tincture brand that merges scientific precision with organic roots. The concept balances a clean, minimal aesthetic—using green to reference the natural world and silver as a distinctive highlight. A custom typographic logo and subtle mushroom imagery further emphasize the brand’s organic foundation.'
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
