import React from 'react';
import ProjectCard from '../components/ProjectCard';


function Project(props) {
  return (
    <div id='Project'>
      <h1 className="font-medium text-center mb-28 text-xl">Project</h1>
      <div className='flex overflow-x-auto'>
        {props.ProjectContent.map((card) => (
          <ProjectCard
            key={card.id} // Remember to add a unique key prop
            image={card.image}
            heading={card.heading}
            context={card.context}
            site={card.site}
            source={card.source}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
