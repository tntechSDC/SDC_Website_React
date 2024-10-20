import React from 'react';
import officerPhoto from '../images/officers.jpg';

export default function AboutUs() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="row">
                <div className="col-sm-8">
                <img src={officerPhoto} className="rounded" alt="Officers" style={{ width: '700px'}}/>

                </div>
                <div className="col-sm-4">
                    <h3>About Us</h3>
                    <p>Lorem Ipsom</p>
                </div>
            </div>
        </div>
    );
}