import React from "react";
import "animate.css";

const Head = () => {
  return (
      <>
        <div className="m-2 flex flex-col gap-3" id="name">
          <h1 className="px=5 text-7xl font-semibold animate__animated animate__fadeInDown Dimas animate__delay-1s ">DIMAS</h1>
          <h1 className="px-5 text-7xl font-semibold animate__fadeInUp animate__animated Satria animate__delay-1s ">SATRIA<span className="text-red-700 animate__animated animate__delay-2s animate__bounceIn ">.</span></h1>
        </div>
      </> 
  );
};

export default Head;
