import "./App.css";
import Head from "./components/utils/head";
import Card from "./components/utils/Card";
import CardSocial from "./components/utils/cardSocial";
import Bg from "./components/utils/Bg";

function App() {
	return (
		<>
			
			<section className='bg-slate-900 text-[#dddd] flex w-full gap-[5rem] m-auto flex-col overflow-hidden '>
				<div className='flex flex-col justify-center items-center w-full gap-10 h-screen z-20'>
					<div className='flex'>
						<Head />
						<Card />
					</div>
					<div className='flex justify-center items-center w-full gap-10'>
						<CardSocial />
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
