import React from "react";
import { Parallax } from "react-parallax";

//css
import "./Product.css";
import BG from "../../images/Prallax2.jpg";

const Product = () => {
  return (
    <Parallax strength={600} bgImage={BG}>
      <div className="w-full h-screen flex bg-[#1f1e1e] opacity-80 flex-col items-center">
        <div>
          <h1 className="text-[#fff] text-3xl sm:text-5xl text-center mt-14 uppercase">
            Our Product
          </h1>
        </div>

        <div>
          <p className="container text-[#fff] text-center my-10 px-5 lg:mx-14">
            SAF is striving for excellence in all endeavors. The finished
            leather of SAF is making difference wherever it reaches. We are
            contineously updated in response with the rapidly changing world
            fashion & trends. along with the state of the art machinery and
            technology.
          </p>
        </div>

        <div></div>
      </div>
    </Parallax>
  );
};

export default Product;
