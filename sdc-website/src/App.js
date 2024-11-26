import "./App.css";
import React from "react"; //this is for class components
import HomePage from "./pages/home.js";
import ContactUs from "./pages/contactUs.js";
import Sponsorship from "./pages/sponsorship.js";
import { Route, Routes } from 'react-router-dom';

//colors 
// yellow is #f3d586
// purple is #8e7cc3
// grey is #999999

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App;
