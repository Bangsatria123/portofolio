import React from "react";
import next from "../image/porto/next-removebg-preview.png"
import sql from '../image/porto/MySQL.png'
import prisma from "../image/porto/images-removebg-preview.png"
import ts from "../image/porto/Typescript_logo_2020.svg.png"




const Backend = () => {
	return (
		<div>
			<div className='h-[25em] w-[35em] flex mt-2 flex-col bg-[#ddd] bg-opacity-5 p-16 rounded-lg'>
				<h1 className='text-xl font-bold justify-center items-center flex'>
					BackEnd
				</h1>
				<div
					className='container flex  h-[10rem] items-center justify-center gap-5 *:m-5 w-full *:justify-center *:items-center *:flex'
					id='imageSkill'>
					<img src={next} width={100} height={100} />
					<img src={sql} width={100} height={100} />
					<img src={prisma} width={100} height={100} />
					<img src={ts} width={100} height={100} />
					</div>
			</div>
		</div>
	);
};

export default Backend;
