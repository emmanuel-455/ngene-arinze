import React from 'react';

function ProjectCard({image, heading, site, source }) {
  return (
    <div className='p-5'>
      <img className='w-[450px] h-[160px]' src={image} alt="" />
      <div className=' w-[300px]'>
        <h2 className='text-xs'>{heading}</h2>
        <div className='flex justify-between'>
          <button><a href={site}>View site</a></button>
          <button><a href={source}>View source code</a></button>
        </div>
     </div>
    </div>
  );
}

export default ProjectCard;

