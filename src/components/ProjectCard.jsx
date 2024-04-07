import React from 'react';

function ProjectCard({image, heading, context }) {
  return (
    <div className=' px-14'>
      <img className='w-full' src={image} alt="" />
      <div className=' w-[300px]'>
        <h2>{heading}</h2>
        <p>{context}</p>
        <button><a href="hg">m</a></button>
     </div>
    </div>
  );
}

export default ProjectCard;

