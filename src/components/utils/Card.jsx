import React from "react";
import "animate.css";

const Card = () => {
	const name = "Dimas Satria";
	return (
		<>
			<div className='flex flex-col w-96 h-auto border border-transparent rounded-md card py-2 px-5 gap-10 animate__animated animate__fadeIn animate__delay-1s trans '>
				<div className="overflow-hidden flex flex-col h-auto gap-6">
					<h1 className='text-xl flex justify-start items-center font-semibold  border-y-[1px] border-t-0 animate__animated animate__fadeInLeft animate__delay-1s card-1 w-28  overflow-hidden'>
						About me:
					</h1>
					<h2 className='font-medium text-md animate__animated animate__fadeInUp animate__delay-1s  card-2'>
						Hello! I.m {name}, a dedicated Front-End Developer with a passion
						for creating seamless and engaging web experiences. My journey into
						web development has been a self-taught adventure, driven by a deep
						curiosity and a love for problem solving.
					</h2>
				</div>
			</div>
		</>
	);
};

export default Card;
