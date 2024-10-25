import React from "react";
import Navbar from "./components/comon/Navbar";
import Home from "./pages/Home";
import Footer from "./components/comon/Footer";

function App() {
  return (
    <div className="w-screen min-h-screen font-poppins overflow-x-hidden">

      <Navbar/>
      <Home/>
      <Footer/>
  
    </div>
  );
}

export default App;
