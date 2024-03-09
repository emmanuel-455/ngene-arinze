import React from 'react'
import Html from "../asset/html.png";
import CSS from "../asset/css.png"
import JS from "../asset/JS.png"
import Boot from "../asset/Bootstrap.png"
import Tailwind from "../asset/Tailwind.png"
import Reactjs from "../asset/React.png"
import github from "../asset/GitHub.png"
import typescript from "../asset/Tailwind.png"
import Redux from "../asset/Redux.png"
import Node from "../asset/node-js.png"
import Postgres from "../asset/Postgres.png"

function Proficiency() {
  return (
    <div id="Proficiency">
      <h1 className="font-medium text-center mb-20 text-xl">Proficiency</h1>
      <div className='flex justify-between w-[40%] m-auto'>
        <div>
          <div className='flex items-center'>
            <img className='w-11' src={Html} alt="" />
            <p>HTML</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={CSS} alt="" />
            <p>CSS</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={JS} alt="" />
            <p>JavaScript</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={Boot} alt="" />
            <p>Bootstrap</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={Tailwind} alt="" />
            <p>Tailwind CSS</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={Reactjs} alt="" />
            <p>ReactJS</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={github} alt="" />
            <p>GitHub</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={typescript} alt="" />
            <p>TypeScript</p>
         </div>
          <div className='flex items-center'>
            <img className='w-11' src={Redux} alt="" />
            <p>Redux</p>
         </div>
        </div>
        <div>
          <div className='flex items-center'>
            <p>NodeJS</p>
            <img className='w-11' src={Node} alt="" />
          </div>
          <div className='flex items-center'>
            <p>Postgres</p>
            <img className='w-11' src={Postgres} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proficiency
