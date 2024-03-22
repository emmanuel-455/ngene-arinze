import React from 'react'

function About() {
  return (
    <div id="About">
      <h1 className="font-medium text-center pt-20 md:pt-36 mb-20 text-xl">About Me</h1>
      <div className="md:flex grid items-center md:justify-evenly flex-wrap md:mt-[150px] md:mb-20 mb-12 m-auto">
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Experience</p>
          <p className="text-[15px] text-A-writeup">2+ Years</p>
        </div>
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Projects</p>
          <p className="text-[15px] text-A-writeup">50+ Completed</p>
        </div>
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Clients</p>
          <p className="text-[15px] text-A-writeup">100+ World Wide</p>
        </div>
      </div>
      <p className="md:w-[60%] p-4 text-[15px] md:mb-[200px] mb-28 text-A-writeup text-center m-auto">Experienced and results-oriented Frontend Developer, having 2 years of experience. Offering a strong attention to details and accuracy, excellent problem-solving skills, and the important ability to work in fast-paced team environment. I am the reliable individual with a determination to meet and exceed all the assigned results </p>
    </div>
  )
}

export default About
