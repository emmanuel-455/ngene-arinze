import React from 'react';

function ProjectCard({image, heading, context, site, source }) {
  return (
    <div className='p-5'>
      <img className='w-[400px] h-[170px]' src={image} alt="" />
      <div className=' w-[300px]'>
        <h2>{heading}</h2>
        <p>{context}</p>
        <div className='flex justify-between'>
          <button><a href={site}>View</a></button>
          <button><a href={source}>View Source Code</a></button>
        </div>
     </div>
    </div>
  );
}

export default ProjectCard;

