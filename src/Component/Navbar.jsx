import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-5 px-11'>
      <div>
        <p className='text-arinze-blue font-semibold text-[18px] w-20'>Arinze Ngene</p>
      </div>
      <ul className='flex gap-8 font-medium text-[15px]'>
        <li><a href="">Info</a></li>
        <li><a href="">About Me</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Media</a></li>
      </ul>
      <button className='bg-arinze-blue text-black font-semibold text-base py-2 px-8 rounded-3xl'>Contact info</button>
    </div>
  )
}

export default Navbar
