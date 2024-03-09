import React from 'react'
import Html from "../asset/html 1.png";
import CSS from "../asset/css 1.png"
import Boot from "../asset/bootstrap 1.png"
import Tailwind from "../asset/icons8-tailwind-css-48 1.png"
import Reactjs from "../asset/icons8-react-100 1.png"
import github from "../asset/icons8-github 1.png"
import typescript from "../asset/icons8-typescript-48 1.png"
import Redux from "../asset/icons8-redux-48 1.png"

function Proficiency() {
  return (
    <div id="Proficiency">
      <h1 className="font-medium text-center mb-20 text-xl">Proficiency</h1>
      <div>
        <div>
          <div>
            <img className='w-11' src={Html} alt="" />
            <p>HTML</p>
         </div>
          <div>
            <img className='w-11' src={CSS} alt="" />
            <p>CSS</p>
         </div>
          <div>
            <img className='w-11' src={CSS} alt="" />
            <p>CSS</p>
         </div>
          <div>
            <img className='w-11' src={Boot} alt="" />
            <p>JavaScript</p>
         </div>
          <div>
            <img className='w-11' src={Tailwind} alt="" />
            <p></p>
         </div>
          <div>
            <img className='w-11' src={Reactjs} alt="" />
            <p></p>
         </div>
          <div>
            <img className='w-11' src={github} alt="" />
            <p></p>
         </div>
          <div>
            <img className='w-11' src={typescript} alt="" />
            <p></p>
         </div>
          <div>
            <img className='w-11' src={Redux} alt="" />
            <p></p>
         </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Proficiency
