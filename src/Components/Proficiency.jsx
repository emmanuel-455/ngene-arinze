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
      <h1 className="font-medium text-center pt-16 mb-28 text-xl">Proficiency</h1>
      <div className='flex justify-between mb-36 w-[90%] md:w-[40%] m-auto border-2 rounded-md border-arinze-blue px-7 py-3'>
        <div className='text-sm text-A-writeup'>
          <div className='flex items-center py-2'>
            <img className='w-7' src={Html} alt="" />
            <p className='ml-4'>HTML</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={CSS} alt="" />
            <p className='ml-4'>CSS</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={JS} alt="" />
            <p className='ml-4'>JavaScript</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={Boot} alt="" />
            <p className='ml-4'>Bootstrap</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={Tailwind} alt="" />
            <p className='ml-4'>Tailwind CSS</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={Reactjs} alt="" />
            <p className='ml-4'>ReactJS</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={github} alt="" />
            <p className='ml-4'>GitHub</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={typescript} alt="" />
            <p className='ml-4'>TypeScript</p>
         </div>
          <div className='flex items-center py-2'>
            <img className='w-7' src={Redux} alt="" />
            <p className='ml-4'>Redux</p>
         </div>
        </div>
        <div className='text-sm text-A-writeup'>
          <div className='flex items-center py-2'>
            <p className='mr-4'>NodeJS</p>
            <img className='w-7' src={Node} alt="" />
          </div>
          <div className='flex items-center py-2'>
            <p className='mr-4'>Postgres</p>
            <img className='w-7' src={Postgres} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proficiency
