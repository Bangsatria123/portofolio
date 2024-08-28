import React from "react";
import "animate.css";
import images from "../image/bg.png";

const Card = () => {
	const name = "Dimas Satria";
	return (
		<div className='w-full flex justify-center items-center'>
			<div className='container  w-full h-screen flex '>
				<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
					<div className='flex-col justify-center items-center hidden md:flex sm:flex'>
						<div className='flex rounded-full  bg-white bg-opacity-5 animate__animated animate__fadeIn animate__delay-1s imgabout '>
							<img
								src={images}
								alt=''
								className='transform scale-x-[-1] rounded-full animate__animated animate__fadeIn animate__delay-1s imgabout2'
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className='flex flex-col justify-center items-center p-20'>
						<div className='flex flex-col p-5 bg-white bg-opacity-5 overflow-hidden rounded-md gap-5'>
							<h1 className='text-3xl flex justify-start items-center font-semibold  border-y-[1px] border-t-0 animate__animated animate__fadeInLeft animate__delay-1s card-1 w-52  overflow-hidden'>
								About me:
							</h1>
							<h2 className='font-medium text-xl animate__animated animate__fadeInUp animate__delay-1s  card-2'>
								Hello! I.m {name}, a dedicated Front-End Developer with a
								passion for creating seamless and engaging web experiences. My
								journey into web development has been a self-taught adventure,
								driven by a deep curiosity and a love for problem solving.
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
