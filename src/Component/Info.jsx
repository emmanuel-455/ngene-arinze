import React from "react"
import Play from "../asset/play.png"
import Open from "../asset/nav icon.png"
import Close from "../asset/close.png"


function openIcon() {
  let bar = document.getElementById("bar");
  bar.style.display = "block";
}

function closeIcon() {
  let bar = document.getElementById("bar");
  bar.style.display = "none";
}

  
function Info() {
  
  return (
    <div className='bg-black relative md:h-lvh'>
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
      <div>
      <div className='flex relative md:hidden md:mr-8 mr-6 mt-3 justify-end' >
          <img src={Open} className='w-7 open mb-3' onClick={() =>
            openIcon()
          } alt="" />
        </div>

        <div className="w-full hidden mt-[-40px] h-lvh font-semibold text-xl fixed z-50 bg-black" id="bar">
          <div className="flex absolute right-0 mr-6 justify-end">
            <img src={Close} className='w-6 open mb-3' onClick={() =>
            closeIcon()
            } alt="" />
        </div>
          <div className="text-center">
          <p className="py-5"><a href="#Info">Info</a></p>
          <p className="py-5"><a href="#About">About us</a></p>
          <p className="py-5"><a href="#Project">Project</a></p>
          <p className="py-5"><a href="#Media">Media</a></p>
        </div>
        </div>
      </div>

      <div className='text-center '>
        <div className='md:mt-24 mt-[40px]'>
        <p className='font-normal text-xl'>Hello I'm</p>
      <p className='text-arinze-blue font-semibold md:text-[40px] text-[34px] mt-4'>Ngene Arinze</p>
        <p className=' mt-2 md:text-[20px] text-[16px] font-normal'>Frontend Engineer</p>
        <img src={Play} className='m-auto w-[60px] mt-[75px]' alt="" />
        <p className='font-normal md:text-[20px] text-[16px] mt-3'>Project</p>
      </div>
        <button
  class="cursor-pointer flex border-2 border-arinze-blue md:mt-20 mt-28 px-3 py-3 items-center rounded-md text-arinze-blue m-auto tracking-wider shadow-xl animate-bounce hover:animate-none"
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
          <a href="https://drive.google.com/file/d/1pGNSQjPPmNV9ixgm1VrpDjKKaQVSako1/view?usp=sharing" className='ml-2 text-arinze-blue font-medium text-[16px]'>Download Resume</a>
</button>

      </div>
    </div>
  )
}

export default Info
