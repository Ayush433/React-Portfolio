import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Work from "./Component/Work";
import Services from "./Component/Services";
import Contact from "./Component/ReachMe";
import { BrowserRouter } from "react-router-dom";
import ReachMe from "./Component/ReachMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Navbar />
        <Header />
        <Home />
        <Services />
        <Work />
        <ReachMe />
      </h1>
    </>
  );
}

export default App;
