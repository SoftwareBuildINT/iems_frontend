import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar bgColor="#0F172B" textColor="white" />
      <div className="pl-24 pt-[200px] flex items-center gap-9">
        <div className="bg-lime-600 h-9 w-9 flex items-center rounded-full" > 
          <img src="src/assets/img/signage.svg" alt="signage" className="pl-2"/>
        </div>

        <img src="src/assets/img/ac.svg" alt="signage" />
        <img src="src/assets/img/ups.svg" alt="signage" />
        <img src="src/assets/img/atm.svg" alt="signage" />
      </div>
    </>
  );
}
