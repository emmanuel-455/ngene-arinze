import React from 'react'

function Navbar() {
  return (
    <div className='flex border-b border-arinze-blue md:border-0 justify-between px-4 py-5 items-center md:py-5 md:px-11'>
      <div>
        <p className='text-arinze-blue font-semibold text-[20px] w-28'>Arinze Ngene.</p>
      </div>
      <div className='hidden md:block font-medium text-[15px]'>
        <a href="" className='px-4'>Info</a>
        <a href="" className='px-4'>About Me</a>
        <a href="" className='px-4'>Projects</a>
        <a href="" className='px-4'>Media</a>
      </div>
      <button className='bg-arinze-blue text-black px-5 py-2 font-semibold md:text-[15px] md:py-2 md:px-8 rounded-3xl'>Contact info</button>
    </div>
  )
}

export default Navbar