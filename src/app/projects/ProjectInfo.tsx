'use client';

import { ReactNode } from 'react';

type ProjectInfoProps = {
  title: string;
  description: string | ReactNode;
};

const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <div className='py-18 px-4 flex'>
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
