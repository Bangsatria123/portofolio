import React from "react";
import next from "../image/porto/next-removebg-preview.png"
import sql from '../image/porto/MySQL.png'
import prisma from "../image/porto/images-removebg-preview.png"
import ts from "../image/porto/Typescript_logo_2020.svg.png"




const Backend = () => {
	return (
		<div>
			<div className=' flex mt-2 flex-col bg-[#ddd] bg-opacity-5  py-16 px-0 md:px-10 lg:px-16 h-[25em] lg:w-[35em] md:w-[25em] w-[20em] rounded-lg'>
				<h1 className='text-xl font-bold justify-center items-center flex'>
					BackEnd
				</h1>
				<div
					className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:translate-x-0 md:translate-x-5 translate-x-5  h-[10rem] items-center justify-center *:m-5 w-full *:justify-center *:items-center *:flex'
					id='imageSkill'>
					<img src={next} className="w-[75px] md:w-[90px] lg:w-[100px] h-auto" />
					<img src={sql} className="w-[75px] md:w-[90px] lg:w-[100px] h-auto" />
					<img src={prisma} className="w-[75px] md:w-[90px] lg:w-[100px] h-auto" />
					<img src={ts} className="w-[75px] md:w-[90px] lg:w-[100px] h-auto" />
					</div>
			</div>
		</div>
	);
};

export default Backend;
