import React from 'react';


//photo
import objetive from "../../images/objective.jpg";

const Objective = () => {
  return (
    <div className='container'>

        <div>
            <p className=" text-[#7a462a] text-3xl sm:text-5xl text-center mt-14 uppercase">objective</p>
        </div>

        <div className='flex'>

            <div className='w-[30%]'>
                <img src={objetive} alt="BG" className='w-full'/>
            </div>

            <div>
                <p>Hello</p>
            </div>

        </div>
    </div>
  )
}

export default Objective;