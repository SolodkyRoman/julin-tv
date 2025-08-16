'use client';

import ResponsiveImage from '@/components/ResponsiveImage';
import MediaPreloader from '@/components/MediaPreloader';

type Project = {
  name: string;
  link?: string;
};

const InfoBlock = ({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) => (
  <div className='w-full md:w-[270px] mb-4'>
    <div className='border-b-1 pb-2 mb-2 cursor-text'>{title}</div>
    {projects.map(project => (
      <div key={project.name}>
        {project.link ? (
          <a
            href={project.link}
            target='_blank'
            className='cursor-button font-bold'
          >
            {project.name}
          </a>
        ) : (
          <span className='cursor-text'>{project.name}</span>
        )}
      </div>
    ))}
  </div>
);

const Page = () => {
  return (
    <>
      <MediaPreloader />
      <div className='pt-8 mx-auto px-3 max-w-[1600px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
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
            className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 md:mt-12'
            style={{ lineHeight: 1.3 }}
          >
            <InfoBlock
              title='Clients'
              projects={[
                { name: 'Proper Wild' },
                { name: 'Unicef' },
                { name: 'Warner Brothers Gaming' },
                { name: 'Suntouched' },
              ]}
            />
            <InfoBlock
              title='Work Featured'
              projects={[
                {
                  name: 'Mindsparke Mag',
                  link: 'https://mindsparklemag.com/design/elia-tonic-water',
                },
                {
                  name: 'Packaging of the World',
                  link: 'https://packagingoftheworld.com/2023/05/peppy-teenage-makeup-identity-packaging.html',
                },
              ]}
            />
            <InfoBlock
              title='Services'
              projects={[
                { name: 'Brand Identity' },
                { name: '360 Campaign' },
                { name: 'Art Direction' },
                { name: 'AI image/video generation' },
                { name: 'Packaging Design' },
                { name: 'Illustration' },
                { name: 'Motion Design' },
                { name: 'Email Design' },
                { name: 'Digital Content' },
                { name: 'Merch Design' },
              ]}
            />
          </div>

          <div className='mt-5'>
            <span className='cursor-text'>
              For all project enquiries, you can email me at{' '}
            </span>
            <a
              href='mailto:yuliya.tverdohlib@gmail.com'
              className='cursor-button font-bold'
            >
              yuliya.tverdohlib@gmail.com
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
