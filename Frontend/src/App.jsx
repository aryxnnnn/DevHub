import Navbar from "./comps/Navbar"
import Footer from "./comps/Footer";
import { Outlet } from "react-router-dom";
import "./index.css"

function App() {

  return <>
    <Navbar/> 
    <main className="min-h-screen flex flex-col">
      <Outlet></Outlet>
    </main>
    <Footer/>
  </> 
}

export default App
