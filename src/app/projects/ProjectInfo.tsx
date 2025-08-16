'use client';

import { ReactNode } from 'react';

type ProjectInfoProps = {
  title: string;
  description: string | ReactNode;
};

const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <div className='py-12 md:py-18 px-4 flex flex-col md:flex-row gap-6 md:gap-0'>
      <div className='flex-1'>
        <div className='text-[32px]'>
          <span className='cursor-text' data-cursor-height={35}>
            {title}
          </span>
        </div>
      </div>
      <div className='flex-1'>
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </div>
  );
};

export default ProjectInfo;
