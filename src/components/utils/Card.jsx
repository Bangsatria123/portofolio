import React from "react";
import "animate.css"

const Card = () => {
    const name = 'Dimas Satria'
	return (
		<>
			<div className='flex flex-col w-96 h-auto border border-transparent rounded-md card py-2 px-5 gap-10 animate__animated animate__fadeIn animate__delay-1s trans'>

            <h1 className="text-xl flex justify-start items-start font-semibold  border-y-2 border-t-0 animate__animated animate__fadeInUp animate__delay-1s card-1 ">
                About me:
            </h1>
            <h2 className="font-medium text-md animate__animated animate__fadeIn animate__delay-1s  card-2">
            Hello! I’m {name}, a dedicated Front-End Developer with a passion for creating seamless and engaging web experiences. My journey into web development has been a self-taught adventure, driven by a deep curiosity and a love for problem-solving.
            </h2>


            </div>
		</>
	);
};

export default Card;
