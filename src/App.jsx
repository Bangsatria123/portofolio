import "./App.css";
import Head from "./components/head";
import Card from "./components/utils/Card";

function App() {
  return (
    <section className="bg-slate-900 text-[#dddd] h-screen flex w-full">
      <div className="flex justify-center items-center w-full gap-10">
        <Head />
        <Card/>
      </div>
    </section>
  );
}

export default App;
