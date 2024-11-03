import React from 'react';

export default function Projects() {
    return (
        <div className="row">
          <div classNam="col-sm-1">
            <div className="container-fluid "></div>
          </div>
        <div className="col-sm-3">
          <div className="container-fluid ps-5 ">
            <h5>TTU Mobile</h5>
          <p>TTU Mobile is a breath of fresh air for students at Tennessee Tech.</p>
          <p> Presenting itself as a quality of life app, it’s a one-stop destination for all things Tennessee Tech, including information about student schedules, Cafeteria Menu, Registration, and providing easy access links to various campus resources.</p>
          <p>It’s a must have for all Tech students looking for ease of use with campus materials!</p>
          </div>
            </div>
            <div className="col-sm-1">
            <div
            style={{
              borderLeft: '2px solid #000',
              height: '350px',
              marginLeft: '15px',
            }}
          ></div>
            </div>
            <div className="col-sm-3">
          <h5>Parking Detection For Red Lots</h5>
          <p>Tennessee Tech has no way of detecting parking lot capacity currently. That is until the project to include parking detection for red lots.</p>
          <p>In combination with TTU Mobile, soon students will be able to check parking availability in red commuter lots, updating every time a car enters and leaves the lot. This will be an extremely useful tool for those students who commute and are in need of finding a parking spot!</p>
           </div>
            <div className="col-sm-1">
            <div
            style={{
              borderLeft: '2px solid #000',
              height: '350px',
              marginLeft: '50px',
            }}
          ></div>
            </div>
            <div className="col-sm-3 float-start">
          <h5>Name Pending</h5>
          <p>Name Pending is a web and mobile platform designed to help programmers learn new languages quickly with easy to read documentation for over 11 programming languages and optional programming challenges to reinforce concepts learned.</p>
          <p>Currently in development, this project aims to let programmers learn new technologies under the assumption they understand basic coding principles and translates those principals into real learning - fast.</p>
        </div>
        </div>
    );
}