import React from "react";
import "animate.css";
import images1 from "../image/bg.png";

const Head = () => {
	return (
		<div className='flex flex-col gap-10 max-h-screen w-full overflow-hidden mt-10 head'>
			<div className='container  grid grid-cols-2 z-10 gap-14'>
				<div className='container justify-center items-center flex '>
					<img
						src={images1}
						width={500}
						height={500}
						className='rounded-full border-[.5em] border-[#bbb] shadow-red-700 shadow-inner'
					/>
				</div>
				<div
					className='m-2 flex flex-col gap-3 overflow-hidden  justify-center px-6 '
					id='name'>
					<div className='flex flex-col text-9xl gap-5'>
						<h1 className='px-5  font-semibold animate__animated animate__fadeInLeft q animate__delay-1s '>
							DIMAS
						</h1>
						<h1 className='px-5 font-semibold animate__fadeInRight animate__animated w animate__delay-1s '>
							SATRIA
							<span className='text-red-700 animate__animated animate__delay-2s animate__bounceIn '>
								.
							</span>
						</h1>
					</div>
					<div className='flex flex-col gap-9 head2'>
						<h1 className='text-5xl animate__animated animate__delay-1s animate__fadeIn'>
							Front-end Web Developer
						</h1>
						<h1 className='text-2xl animate__animated animate__delay-1s animate__fadeInUp'>
							self taught developer who focuses on javascript based web
							development.
						</h1>
					</div>
				</div>
			</div>
			<div className='w-full container absolute rounded-ss-full bg-white bg-opacity-[0.1] py-[16rem]'>
				<div className='flex justify-end  '></div>
			</div>
		</div>
	);
};

export default Head;
