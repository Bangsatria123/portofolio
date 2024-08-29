import React from "react";
import html from "../image/porto/logo html.png"
import css from "../image/porto/css.png"
import js from "../image/porto/js.png"
import react from "../image/porto/react.png"
import bootstrap from "../image/porto/bootstrap.png"
import tailwind from "../image/porto/tailwind.png"
import ts from "../image/porto/Typescript_logo_2020.svg.png"



const Frontend = () => {
	return(
        <div className="flex mt-2 flex-col bg-[#ddd] bg-opacity-5 py-16 px-0 md:px-10 lg:px-16 rounded-lg h-[25em] lg:w-[35em] md:w-[25em] w-[20em] ">
        <h1 className="text-xl font-bold justify-center items-center flex">FrontEnd</h1>
        <div className="grid grid-cols-3 lg:gap-5 md:gap-3 gap-1 *:m-5 w-full *:justify-center *:items-center *:flex pe-5 " id="imageSkill">
            <img src={html} className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
            <img src={css}  className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
            <img src={js} className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
            <img src={react} className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
            <img src={bootstrap} className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
            <img src={tailwind} className="lg:w-[100px]  md:w-[90px] w-[75px] h-auto"/>
        </div>
    </div>
    )
};

export default Frontend;
