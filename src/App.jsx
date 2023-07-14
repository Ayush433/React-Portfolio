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
import Contact from "./Component/Contact";
import { BrowserRouter } from "react-router-dom";
import ReachMe from "./Component/ReachMe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
