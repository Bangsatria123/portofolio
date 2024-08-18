import "./App.css";
import Head from "./components/utils/head";
import Card from "./components/utils/Card";
import CardSocial from "./components/utils/CardSocial";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<section className='bg-slate-900 text-[#dddd] *:mb-5 flex w-full flex-col overflow-hidden'>
				<div id='navbar'>
					<Navbar />
				</div>
				<div className='flex flex-col items-center justify-center w-full gap-10 h-screen z-20'>
					<div className='flex justify-center items-center'>
						<Head />
					</div>
				</div>
				<div id="about">
					<Card />
				</div>
				{/* <div className='flex justify-center items-center w-full gap-10'>
					<CardSocial />
				</div> */}
			</section>
		</>
	);
}

export default App;
