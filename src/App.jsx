import "./App.css";
import Head from "./components/utils/head";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about";
import Skill from "./components/skills";
import Contact from "./components/contact";
import Project from "./components/project";

function App() {
	return (
		<>
			<div className='bg-slate-900 text-[#dddd] *:mb-5 m-auto flex w-full flex-col overflow-hidden gap-20'>
				<div id='navbar'>
					<Navbar />
				</div>
				<div className='flex flex-col items-center justify-center w-full gap-10 h-screen z-20'>
					<div className='flex justify-center items-center'>
						<Head />
					</div>
				</div>
				<div id="about">
					<About/>
				</div>
				<div id="skills">
					<Skill/>
				</div>
				<div id="Project">
					<Project/>
				</div>
				<div id="Contact">
					<Contact/>
				</div>
			</div>
		</>
	);
}

export default App;
