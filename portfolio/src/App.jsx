import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="w-screen h-screen bg-[#fdfff4] text-[#00997e] pt-20 flex justify-center overflow-x-hidden">
      <div className="max-w-[600px] h-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App
