'use client';

import Link from 'next/link';

export type ProjectPresentation = {
  description: string;
  id: string;
  labels: Array<{
    text: string;
    color: string;
  }>;
  title: string;
};

const Project = ({ title, description, id, labels }: ProjectPresentation) => {
  return (
    <div className='flex py-8 border-b-1 last:border-b-0'>
      <div className='flex-1 px-8 '>
        <Link href={`/projects/${id}`}>
          <img
            src={`images/projects/${id}/thumbnail.png`}
            alt='Project Placeholder'
            className='w-full h-auto'
          />
        </Link>
      </div>
      <div className='flex-1 px-8'>
        <h2 className='text-[32px]'>{title}</h2>
        <div className='flex mt-5'>
          {labels.map(({ text, color }, index) => (
            <div className={`px-8 py-2 mr-3 font-medium ${color}`} key={index}>
              {text}
            </div>
          ))}
        </div>
        <p className='mt-8 font-medium text-xl'>{description}</p>
      </div>
    </div>
  );
};

export default Project;
