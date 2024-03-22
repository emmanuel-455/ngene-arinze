import React from 'react'

function BackgroundDots() {
  return (
 
    <div className='hidden md:block'>
      <div className='w-[80px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-12'></div>
      <div className='w-[40px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-[49%]'></div>
      <div className='w-[80px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 right-14'></div>
      <div className='w-[40px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[180px] left-[26%]'></div>
      <div className='w-[40px] h-[40px] absolute blur-xl rounded-full bg-arinze-blue top-[310px] left-[48.4%]'></div>
      <div className='w-[40px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[180px] right-[26%]'></div>
      <div className='w-[80px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-0 left-12'></div>
      <div className='w-[40px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue bottom-0 left-[47%]'></div>
      <div className='w-[80px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-0 right-8'></div>
      </div>
    
  )
}

export default BackgroundDots
