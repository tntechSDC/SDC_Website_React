import React from 'react';
import FunctionalNavbar from '../components/functionalNav.js';
import backgroundImage from '../images/backgroundImageSDC.png';


export default function ContactUs() {
    return (
        <div>
            <FunctionalNavbar />
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}>
                
                    <h1 className="container-fluid text-white fs-1" style={{ padding: '8rem', fontSize: '50-px' }} >Contact Us</h1>
                </div>
        </div>
        
    )
}