import logo from "./logo.svg";
import "./App.css";
import React from "react"; //this is for class components
import Navbar from './components/navbar.js';
import transparentLogo from './images/Favicon.png';
import firstMeeting from "./images/firstMeeting.png";
import Projects from './components/projects.js';
import AboutUs from './components/about_us.js';
import ContactUs from './components/contact_us.js';

//colors 
// yellow is #f3d586
// purple is #8e7cc3
// grey is #999999

function App() {
  return (
    <div className="App">
      <div className="container-fluid pt-5" style={{ backgroundColor: "#8e7cc3" }}>
      <img src={transparentLogo} className="rounded float-start" alt="Club Logo" style={{ width: '150px', borderRadius: '10px' }}/>
        <div className="container-fluid p-5 me-5 text-white" style={{ backgroundColor: "#8e7cc3" }}>
          <h5 style={{fontSize: 18, marginBottom: 0.5}}>Tennessee Technological University</h5>
          <h1 style={{fontSize: 50}}>Software Development Club</h1>
        </div>
      </div>
      <Navbar />
      <div className="container-fluid ps-5 pe-5 pt-1 pb-1" style={{ backgroundColor: "#999999" }}>
      <img src={firstMeeting} className="rounded mx-auto d-block" alt="first meeting" style={{ width: '1000px', borderRadius: '50px' }}/>
      </div>
      <div className="container-fluid p-3" style={{ backgroundColor: "#f3d586" }}>
        <div className="row">
          <div className="col-sm-4">
            <div className="float-end">
              <div className="row">
                <div className="col">
                  <h3>Weekly Meetings</h3>
                </div>
                <div className="col">
                <div
            style={{
              borderLeft: '2px solid #000',
              height: '100px',
              marginLeft: '20px',
            }}
          ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="container">
              <p>Community Meetings - Tuesday 4:00pm in LSC 1201</p>
              <p>New Technology Lectures - Monday  6:00pm in Brun 320</p>
            </div>
          </div>
        </div>
      </div>
      <div className="containter-fluid pe-5 ps-5 pt-3 pb-5">
        <div className="row">
          <div className="col-sm-3">
            <div className="float-end">
              <h4>Current Projects</h4>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
