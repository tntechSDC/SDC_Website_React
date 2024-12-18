import React from "react"; //this is for class components
import Navbar from '../components/navbar.js';
import transparentLogo from '../images/Favicon.png';
import firstMeeting from "../images/firstMeeting.png";
import Projects from '../components/projects.js';
import AboutUs from '../components/about_us.js';

function HomePage() {
    return (
      <div>
        <div className="container-fluid pt-5" style={{ backgroundColor: "#8e7cc3" }}>
        <img src={transparentLogo} className="rounded float-start" alt="Club Logo" style={{ width: '150px', borderRadius: '10px' }}/>
          <div className="container-fluid p-5 me-5 text-white" style={{ backgroundColor: "#8e7cc3" }}>
            <h5 style={{fontSize: 18, marginBottom: 0.5}}>Tennessee Technological University</h5>
            <h1 style={{fontSize: 50}}>Software Development Club</h1>
          </div>
        </div>
        <Navbar />
        <div className="container-fluid ps-5 pe-3 pt-1 pb-1" style={{ backgroundColor: "#999999" }}>
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
        <div className="container-fuild pt-2" style={{ backgroundColor: "#B3B3B3" }}>
        <div className="containter-fluid pe-5 ps-5 pt-3 pb-5">
          <div className="row">
            <div className="col-sm-3">
              <div className="float-end">
                <h3>Current Projects</h3>
              </div>
            </div>
          </div>
        </div>
          <Projects />
          <AboutUs />
        </div>
        
      </div>
    );
  }
  
  export default HomePage;