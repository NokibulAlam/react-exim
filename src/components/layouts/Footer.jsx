import React from 'react';
import Logo from '../../images/Exim Leather Logo-01.png';

const Footer = () => {
    return (
        <div className='w-full pt-16 text-white bg-white'>
            <div className='max-w-[1240px] mx-auto flex flex-col items-center'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h1 className='text-[#5f3925] mb-5'>Exim Leather</h1>
                </div>
            </div>
            <div className='w-full bg-[#3f2213] h-10'>
                <p className='text-center pt-2'>© copyright 2022 Exim Leather | All Rights Reserved</p>
            </div>
        </div>
  )
}

export default Footer;