'use client';

type ProjectInfoProps = {
  title: string;
  description: string;
};

const ProjectInfo = ({ title, description }: ProjectInfoProps) => {
  return (
    <div className='py-18 px-4 flex'>
      <div className='flex-1'>
        <h1 className='font-medium text-[32px]'>{title}</h1>
      </div>
      <div className='flex-1'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
