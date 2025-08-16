'use client';

import ProjectInfo from '@/app/projects/ProjectInfo';
import { ImagePathProvider } from '@/providers/ImagePathProvider';
import ResponsiveImage from '@/components/ResponsiveImage';
import MediaPreloader from '@/components/MediaPreloader';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  return (
    <>
      <MediaPreloader />
      <ImagePathProvider path='images/projects/playground'>
      <ProjectInfo
        title='Play'
        description='In my free time, I love experimenting with motion design, music poster, crafting printed zines, and creating playful content for my blog.'
      />

      <div className='flex gap-3 mx-3 items-stretch'>
        <div className='w-[55%]'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='animate-visible w-full h-full'
          >
            <source
              src={`${BASE_PATH}/images/projects/playground/1.mp4`}
              type='video/mp4'
            />
          </video>
        </div>
        <ResponsiveImage
          imageName='2'
          format='png'
          rowCount={2}
          alt=''
          className='w-[45%]'
        />
      </div>

      <div className='flex gap-3 mx-3 items-start mt-3'>
        {/* First two items share remaining space and stretch to match last item's height */}
        <div className='flex-1 self-stretch overflow-hidden'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='animate-visible w-full h-full object-cover'
          >
            <source
              src={`${BASE_PATH}/images/projects/playground/3.mp4`}
              type='video/mp4'
            />
          </video>
        </div>

        <div className='flex-1 self-stretch overflow-hidden'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='animate-visible w-full h-full object-cover'
          >
            <source
              src={`${BASE_PATH}/images/projects/playground/4.mp4`}
              type='video/mp4'
            />
          </video>
        </div>

        {/* Last item determines both width and height naturally */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='animate-visible shrink-0'
        >
          <source
            src={`${BASE_PATH}/images/projects/playground/5.mp4`}
            type='video/mp4'
          />
        </video>
      </div>
      </ImagePathProvider>
    </>
  );
};

export default Page;
