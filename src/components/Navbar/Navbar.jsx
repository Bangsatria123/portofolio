import React, { useState } from "react";
import "animate.css";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='animate__animated animate__fadeInDown p-3 md:p-5 lg:p-10 px-10 w-full mb-5 bg-black bg-opacity-[0.1] fixed top-0 z-50 backdrop-blur-[5px]'>
			<div  className="lg:flex-row md:flex-col flex-col flex justify-between gap-10 ">
				<div className='flex justify-between'>
					<a href='#' className='text-xl md:text-xl lg:text-2xl'>
						Dimas <span className=''>Satria</span>
					</a>
					<div className=' bg-white bg-opacity-5 lg:hidden'>
						<button onClick={toggleMenu}>
							{isOpen ?  <X size={20}/>:<List size={20}/>  }
						</button>
					</div>
				</div>
				<div id="asal" className={`text-xl flex flex-col md:flex-col lg:flex-row gap-10 ${isOpen ? "" : "md:hidden hidden lg:flex flex-col md:flex-col lg:flex-row"}`}>
					<a href='#' className='hover:text-[#65D6FF] duration-700'>
						Home
					</a>
					<a href='#about' className='hover:text-[#65D6FF] duration-700'>
						About
					</a>
					<a href='#skills' className='hover:text-[#65D6FF] duration-700'>
						Skills
					</a>
					<a href='#Contact' className='hover:text-[#65D6FF] duration-700'>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
