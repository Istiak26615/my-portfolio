import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div>
        <div className="row d-flex justify-content-between align-items-center banner">
            <div className="col-md-4 about-description">
                  <h2>Hi!</h2>
                 <h4>I am Shishir,a passionate MERN developer</h4>
                 <a href="https://drive.google.com/file/d/1e-eaFpYI8h-x_jbyB0Z7yoqLkM532luq/view?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">My Resume</a>
            </div>
            <div className="col-md-6 about">
                <img className="bannerimg"  src="https://www.cmarix.com/blog/wp-content/uploads/2019/09/MEAN-vs-MERN.jpg" alt="" />
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default Banner;