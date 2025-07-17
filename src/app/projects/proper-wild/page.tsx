'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import SectionDivider from '@/components/SectionDivider';

const Page = () => {
  return (
    <>
      <ProjectInfo
        title='Proper Wild'
        description='As the Senior Brand Designer at Proper Wild, I lead all design efforts, overseeing creative execution across both digital and print channels. My work includes digital ads, motion graphics, photo retouching, Amazon assets, email campaigns, and POS materials. I ensure consistent brand alignment across emails, social media, and printed collateral.'
      />
      <img
        src='/images/projects/proper-wild/PW1-3840.webp'
        srcSet='
        /images/projects/proper-wild/PW1-3840.webp 3840w,
        /images/projects/proper-wild/PW1-2560.webp 2560w,
        /images/projects/proper-wild/PW1-1920.webp 1920w,
        /images/projects/proper-wild/PW1-1280.webp 1280w,
        /images/projects/proper-wild/PW1-720.webp 720w'
        alt='Proper Wild Project Image 1'
      />

      <SectionDivider label='Ads' />

      <img
        src='/images/projects/proper-wild/PW2-960.webp'
        srcSet='
          /images/projects/proper-wild/PW2-320.webp  320w,
          /images/projects/proper-wild/PW2-460.webp  460w,
          /images/projects/proper-wild/PW2-640.webp  640w,
          /images/projects/proper-wild/PW2-960.webp  960w'
        sizes='
          (min-width:3840px) 960px,   /* on 4K+ screens, use the 960px file */
          (min-width:2560px) 640px,   /* on 2560px+ screens, use the 640px file */
          (min-width:1920px) 460px,   /* on 1920px+ screens, use the 460px file */
          (min-width:1280px) 320px,   /* on 1280px+ screens, use the 320px file */
          25vw              /* on smaller screens, use 25vw */
        '
        alt='Proper Wild Project Image 2'
      />
    </>
  );
};

export default Page;
