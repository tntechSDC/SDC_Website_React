import React from 'react';
import officerPhoto from '../images/officers.jpg';

export default function AboutUs() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="row">
                <div className="col-sm-6">
                <img src={officerPhoto} className="rounded" alt="Officers" style={{ width: '700px'}}/>

                </div>
                <div className="col-sm-6">
                    <h3>About Us</h3>
                    <p>The Tennessee Tech Software Development Club was founded with the one key idea as its principal: that computer science students need more opportunities to shine and the community to grow.</p>
                    <p>We focus on being the catalyst for others to learn, meet new people, and ultimately, find a sense of place on campus.</p>
                    <p>Holding events regularly with new-technology competitions on the way, we strive to give a sense of comfort to those in want of opportunities for growth. </p>
                    <p>This club is not only a place to sharpen one’s skills and learn about different and exciting technologies, but it allows students to lay the foundations for successful careers out of college.</p>
                </div>
            </div>
        </div>
    );
}