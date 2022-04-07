import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { Routes ,Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter as  Routes, Route} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(20 31 67)";
      showAlert("Dark Mode is Enable", "success");
      document.title = "TextUtiles - Dark Mode";
      setInterval(() => {
        document.title = "TextUtiles - Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtiles - Install TextUtiles";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enable", "success");
      document.title = "TextUtiles - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar
        title="TextDesiging"
        mode={mode}
        toggleMode={toggleMode}
        about="About TextUtiles"
      />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtiles - Covernt Words Upper to Lower, Lower to Upper, Removing Extra Space , Word Count " mode={mode}/>} />
      </Routes>
        {/* <About/> */}
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
