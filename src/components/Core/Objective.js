import React from 'react';

//component
import QualityCard from '../extra/QualityCard';

//photo
import objetive from "../../images/objective.jpg";

const Objective = () => {
  return (
    <div className='container pb-10'>

        <div>
            <p className=" text-[#7a462a] text-3xl sm:text-5xl text-center mt-14 uppercase">objective</p>
        </div>

        <div className='md:flex items-center justify-center space-x-7 my-14'>

            <div className='md:w-[35%]'>
                <img src={objetive} alt="BG" className='w-full shadow-md'/>
            </div>

            <div className='flex-col space-y-4 sm:mt-4 md:mt-0'>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Quality control plans assure the process of specified requirement.</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Concentrating on prevention methods to confirm the desired quality</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Ensuring only the best products to reach our Customers</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Our SAF family consist lots of skilled members who are catering adorably to all our customers needs</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Adhering to all environmental concerns, we strive to leave a positive economical footprint</p>
                </div>

                <div className='flex items-center space-x-2'>
                    {/* <p className='w-3 h-1 bg-black'></p> */}
                    <svg width="12" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66634 2.20817C1.46565 2.20817 1.2973 2.14017 1.1613 2.00417C1.02577 1.86864 0.958008 1.70053 0.958008 1.49984C0.958008 1.29914 1.02577 1.1308 1.1613 0.994795C1.2973 0.859268 1.46565 0.791504 1.66634 0.791504H7.33301C7.5337 0.791504 7.70181 0.859268 7.83734 0.994795C7.97334 1.1308 8.04134 1.29914 8.04134 1.49984C8.04134 1.70053 7.97334 1.86864 7.83734 2.00417C7.70181 2.14017 7.5337 2.20817 7.33301 2.20817H1.66634Z" fill="#666666"/>
                    </svg>
                    <p>Maintaining ethical ingoing and outgoing traceability</p>
                </div>
                
            </div>

        </div>

        <QualityCard />

    </div>
  )
}

export default Objective;