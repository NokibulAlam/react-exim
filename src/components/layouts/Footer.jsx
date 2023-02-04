import React from "react";
import Logo from "../../images/Logo 2.png";

const Footer = () => {
  return (
    <div className="w-full pt-16 text-white bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <div className="mb-5">
          <img src={Logo} alt="" />
        </div>
        <div>
          {/* <sh1 className='text-[#5f3925] mb-5'>Ayesha Leather</sh1> */}
        </div>
      </div>
      <div className="w-full bg-[#3f2213] h-10">
        <p className="text-center pt-2">
          © copyright 2023 Ayesha Leather | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
