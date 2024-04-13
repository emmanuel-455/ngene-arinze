import React, {useState} from "react"
import Play from "../asset/play.png"
import Open from "../asset/nav icon.png"
import Close from "../asset/close.png"
//import BackgroundDots from "../components/BackgroundDots";
import { motion } from 'framer-motion'

function Info() {
  const [open, setopen] = useState(false);

  function openIcon() {
    setopen(true)
  }
  function closeIcon() {
    setopen(false)
  }


  return (
    <div className='bg-black relative md:pt-14 mb-[200px]' id="Info">
      <div>
      <div className='flex relative md:hidden md:mr-8 mr-6 mt-3 justify-end' >
          <img src={Open} className='w-7 open fixed mb-3' onClick={() =>
            openIcon()
          } alt="" />
        </div>

        <div style={{ display:  open ? "block" : "none"}} className="w-full mt-[-40px] h-lvh font-medium text-xl fixed z-50 bg-black" id="bar">
          <div className="flex absolute right-0 mr-6 justify-end">
            <img src={Close} className='w-6 open mb-3' onClick={closeIcon} alt="" />
          </div>
          <div onClick={closeIcon} className="text-center mt-8">
          <p className="py-5"><a href="#Info">Info</a></p>
          <p className="py-5"><a href="#About">About me</a></p>
          <p className="py-5"><a href="#Proficiency">Proficiency</a></p>
          <p className="py-5"><a href="#Project">Project</a></p>
          <p className="py-5"><a href="#Media">Media</a></p>
        </div>
        </div>
      </div>

      <div className='text-center '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className='mt-5 md:mt-0 pt-[60px] md:pt-0'>
        <p className='font-medium text-[20px]' >Hello I'm</p>
      <p className='text-arinze-blue font-semibold md:text-[60px] text-[34px] mt-4'>Ngene Arinze</p>
        <p className=' mt-2 md:text-[20px] text-[15px] font-normal'>Frontend Engineer</p>
        <a href="#Project"><img src={Play} className='m-auto w-[60px] mt-[75px]' alt="" /></a>
        <p className='font-normal md:text-[20px] text-[15px] mt-3'><a href="#Project">Project</a></p>
      </motion.div>
        <motion.button
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: -0.1, type: 'spring', stiffness: 15 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(114,203,231)", textShadow: "0px 0px 2px rgb(114,203,231)"}}
  class="cursor-pointer flex border-2 border-arinze-blue md:mt-20 mt-[120px] px-3 py-3 items-center rounded-md text-arinze-blue m-auto tracking-wider shadow-xl"
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
          <a href="https://drive.google.com/file/d/1pGNSQjPPmNV9ixgm1VrpDjKKaQVSako1/view?usp=sharing" className='ml-2 text-arinze-blue font-medium text-[15px]'>Download Resume</a>
</motion.button>

      </div>
    </div>
  )
}

export default Info
