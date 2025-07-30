'use client';

import CommonLayout from '@/components/CommonLayout';
import ResponsiveImage from '@/components/ResponsiveImage';

const InfoBlock = ({
  title,
  projects,
}: {
  title: string;
  projects: string[];
}) => (
  <div className='w-[270px] mb-4'>
    <div className='border-b-1 pb-2 mb-2 cursor-text'>{title}</div>
    {projects.map(project => (
      <div key={project}>
        <span className='cursor-text'>{project}</span>
      </div>
    ))}
  </div>
);

const Page = () => {
  return (
    <CommonLayout>
      <div className='pt-8 mx-auto px-3 max-w-[1600px]'>
        <div className='grid grid-cols-2 gap-12'>
          <ResponsiveImage
            rowCount={2}
            imageName='me'
            alt='me'
            path='images'
            format='png'
          />

          <div className='mt-5'>
            <span className='cursor-text'>
              Yuliya is a graphic designer and art director focused on helping
              brands build visual narratives. Over the past six years, she has
              helped brands discover their unique aesthetic, maintain it, and
              challenge norms across digital and print. Yuliya finds inspiration
              in art, tangible objects, nature escapes, and animals. In her free
              time, she works on personal projects—experimenting with branding,
              zines, motion, and contributing to her design blog.
            </span>
            <div
              className='grid grid-cols-2 gap-3 mt-12'
              style={{ lineHeight: 1.3 }}
            >
              <InfoBlock
                title='Clients'
                projects={[
                  'Proper Wild',
                  'Unicef',
                  'Warner Brothers Gaming',
                  'Suntouched',
                ]}
              />
              <InfoBlock
                title='Work Featured'
                projects={['Mindsparke Mag', 'Packaging of the World']}
              />
              <InfoBlock
                title='Services'
                projects={[
                  'Brand Identity',
                  '360 Campaign',
                  'Art Direction',
                  'AI image/video generation',
                  'Packaging Design',
                  'Illustration',
                  'Motion Design',
                  'Email Design',
                  'Digital Content',
                  'Merch Design',
                ]}
              />
            </div>

            <div className='mt-5'>
              For all project enquiries, you can email me at{' '}
              <a href='mailto:yuliya.tverdohlib@gmail.com'>
                yuliya.tverdohlib@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Page;
