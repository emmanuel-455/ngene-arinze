import React from 'react'
import Play from "../asset/play.png"

function Info() {
  return (
    <div className='bg-black relative h-lvh'>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-12'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-[47%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 right-14'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[255px] left-[22%]'></div>
      <div className='w-[40px] h-[40px] absolute blur-xl rounded-full bg-arinze-blue top-[220px] left-[48.4%]'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[260px] right-[23%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] left-12'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] left-[45%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] right-8'></div>

      <div className='text-center mt-[50px]'>
      <p className='font-semibold text-2xl'>Hello I'm</p>
      <p className='text-arinze-blue font-semibold text-[40px] mt-6'>Ngene Arinze</p>
        <p className='text-A-writeup mt-6 text-[20px] font-light'>Frontend Engineer</p>
        <img src={Play} className='m-auto mt-10' alt="" />
        <p className='font-thin text-[15px]'>Project</p>
      </div>
    </div>
  )
}

export default Info
