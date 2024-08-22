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
        <div className="flex mt-2 flex-col bg-[#ddd] bg-opacity-5 p-16 rounded-lg h-[25em] w-[35em]">
            <h1 className="text-xl font-bold justify-center items-center flex">FrontEnd</h1>
            <div className="container grid grid-cols-3 gap-5 *:m-5 w-full *:justify-center *:items-center *:flex" id="imageSkill">
                <img src={html} width={100} height={100} className=""/>
                <img src={css} width={100} height={100} className=""/>
                <img src={js} width={100} height={100} className=""/>
                <img src={react} width={100} height={100} className=""/>
                <img src={bootstrap} width={100} height={100} className=""/>
                <img src={tailwind} width={100} height={100} className=""/>
            </div>
        </div>
    )
};

export default Frontend;
