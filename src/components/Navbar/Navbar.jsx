import React from "react";
import 'animate.css'
const Navbar = () => {
	return (
		<div className='animate__animated animate__fadeInDown p-10 px-10 w-full mb-5 bg-black bg-opacity-[0.1] fixed top-0 z-50 backdrop-blur-[2px]'>
			<div className='flex justify-between '> 
				<a href="#" className='text-2xl'>
					Dimas <span className='text-red-700'>Satria</span>
				</a>
				<div className='text-xl flex gap-10'>
					<a href='#' className='hover:text-red-700 duration-700 '>
						Home
					</a>
					<a href='#about' className='hover:text-red-700 duration-700 '>
						About
					</a>
					<a href='#about' className='hover:text-red-700 duration-700 '>
						About
					</a>
					<a href='#about' className='hover:text-red-700 duration-700 '>
						About
					</a>
					<a href='#about' className='hover:text-red-700 duration-700 '>
						About
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
