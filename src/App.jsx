import { Navbar } from "./components/Navbar";
import Alert from "./components/Alert";

export default function App() {
  return (
    <>
      <Navbar bgColor="#0F172B" textColor="white" />
      <div className="pl-24 pt-[50px] flex items-center gap-9"> 
      </div>
      <Alert />
    </>
  );
}
