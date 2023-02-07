import React from "react";
// import { Parallax } from "react-parallax";

//css
import "./Product.css";

//images
import { Products } from "../extra/ProductsImages";

const Product = () => {
  return (
    <div className="parallax w-full flex flex-col items-center pb-14 relative">
      <div>
        <h1 className="text-[#fff] text-3xl sm:text-5xl text-center mt-14 uppercase">
          Our Product
        </h1>
      </div>

      <div>
        <p className="container text-[#fff] text-center my-10 px-5 lg:mx-14">
          AYESHA is striving for excellence in all endeavors. The finished
          leather of AYESHA is making difference wherever it reaches. We are
          contineously updated in response with the rapidly changing world
          fashion & trends. along with the state of the art machinery and
          technology.
        </p>
      </div>

      <div className="container px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {Products.map(({ name, img }, i) => (
          <div className="overlay" key={i}>
            <img src={img} alt={name} className="w-full" />
          </div>
        ))}
      </div>

      <div>
        <span className="block pb-10"></span>
      </div>
    </div>
  );
};

export default Product;
