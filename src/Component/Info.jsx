import React from 'react'
import Play from "../asset/play.png"
import Nav from "../asset/nav icon.png"


function Info() {
  return (
    <div className='bg-black relative h-lvh'>
      <div className='hidden md:block'>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-12'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-0 left-[47%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue top-0 right-14'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[255px] left-[22%]'></div>
      <div className='w-[40px] h-[40px] absolute blur-xl rounded-full bg-arinze-blue top-[230px] left-[48.4%]'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue top-[260px] right-[23%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] left-12'></div>
      <div className='w-[70px] h-[70px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] left-[45%]'></div>
      <div className='w-[100px] h-[100px] absolute blur-3xl rounded-full bg-arinze-blue bottom-[90px] right-8'></div>
      </div>
      <div className='flex md:hidden mr-8 mt-6 justify-end' >
        <img src={Nav} className='w-9' alt="" />
      </div>
      <div className='text-center '>
        <div className='md:mt-24 mt-[40px]'>
        <p className='font-semibold text-2xl'>Hello I'm</p>
      <p className='text-arinze-blue font-semibold text-[40px] mt-4'>Ngene Arinze</p>
        <p className='text-A-writeup mt-2 text-[20px] font-light'>Frontend Engineer</p>
        <img src={Play} className='m-auto mt-16' alt="" />
        <p className='font-thin text-[20px] mt-3 text-A-writeup'>Project</p>
      </div>
        <button
  class="cursor-pointer flex border-2 border-arinze-blue mt-20 px-5 py-3 items-center rounded-md text-arinze-blue m-auto tracking-wider shadow-xl animate-bounce hover:animate-none"
>
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
          </svg>
          <p className='ml-2 text-arinze-blue font-medium text-lg'>Download Resume</p>
</button>

      </div>
    </div>
  )
}

export default Info
