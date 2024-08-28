import React from "react";
import "animate.css";
import images1 from "../image/bg.png";

const Head = () => {
	return (
		<div className='flex flex-col gap-10 min-h-screen w-full overflow-hidden mt-10 head'>
			<div className='container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 z-10 gap-14'>
				<div className='justify-center items-center flex animate__animated animate__fadeIn animate__delay-1s '>
					<img
						src={images1}
						width={500}
						height={500}
						className='rounded-full translate-x-7 md:translate-x-0 lg:translate-x-0'
					/>
				</div>
				<div
					className='m-2 flex flex-col gap-3 overflow-hidden  justify-center px-6 '
					id='name'>
					<div className='flex flex-row md:flex-col lg:flex-col text-3xl md:text-9xl lg:text-9xl gap-1 md:gap-5 lg:gap-5'>
						<h1 className='px-0 md:px-5 lg:px-5  font-semibold animate__animated animate__fadeInLeft q animate__delay-1s '>
							DIMAS
						</h1>
						<h1 className='px-5 font-semibold animate__fadeInRight animate__animated w animate__delay-1s '>
							SATRIA
							<span className=' animate__animated animate__delay-2s animate__bounceIn '>
								.
							</span>
						</h1>
					</div>
					<div className='flex flex-col gap-9 head2'>
						<h1 className='text-2xl md:text-4xl lg:text-5xl animate__animated animate__delay-1s animate__fadeIn'>
							Frontend Web Developer
						</h1>
						<h1 className='text-2xl animate__animated animate__delay-1s animate__fadeInUp'>
							self taught developer who focuses on javascript based web
							development.
						</h1>
					</div>
				</div>
			</div>
			<div className='w-full container absolute rounded-ss-full bg-white bg-opacity-[0.1] py-[16rem] hidden md:hiden lg:flex'>
				<div className='flex justify-end  '></div>
			</div>
		</div>
	);
};

export default Head;
