import React from 'react'

function About() {
  return (
    <div id="About">
      <h1 className="font-normal text-center mb-20 text-xl">About me</h1>
      <div className="flex justify-evenly items-center flex-wrap mb-20 m-auto">
        <div className="text-center md:border-s-4 py-5 px-7 md:border-arinze-blue md:pl-16">
          <p className="mb-3">Experience</p>
          <p>2+ Years</p>
        </div>
        <div className="text-center md:border-s-4 py-5 px-7 md:border-arinze-blue md:pl-16">
          <p className="mb-3">Projects</p>
          <p>50+ Completed</p>
        </div>
        <div className="text-center md:border-s-4 py-5 px-7 md:border-arinze-blue md:pl-16">
          <p className="mb-3">Clients</p>
          <p>100+ World Wide</p>
        </div>
      </div>
      <p className="w-[] text-center m-auto">Experienced and results-oriented Frontend Developer, having 2 years of experience. Offering a strong attention to details and accuracy, excellent problem-solving skills, and the important ability to work in fast-paced team environment. I am the reliable individual with a determination to meet and exceed all the assigned results </p>
      
    </div>
  )
}

export default About
