import React from "react";
import "animate.css";

const Head = () => {
  return (
      <>
        <div className="m-2 flex flex-col gap-3 overflow-hidden  justify-center" id="name">
          <h1 className="px=5 text-7xl font-semibold animate__animated animate__fadeInLeft q animate__delay-1s ">DIMAS</h1>
          <h1 className="px-5 text-7xl font-semibold animate__fadeInRight animate__animated w animate__delay-1s ">SATRIA<span className="text-red-700 animate__animated animate__delay-2s animate__bounceIn ">.</span></h1>
        </div>
      </> 
  );
};

export default Head;
