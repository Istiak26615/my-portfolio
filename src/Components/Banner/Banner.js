import React from 'react';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    AOS.init();
    return (
        <div className="container">
            <div>
        <div className="row d-flex justify-content-between align-items-center banner">
            <div className="col-md-4 about-description">
                  <h2 data-aos="fade-down">Hi!</h2>
                 <h4 data-aos="fade-up">I am Shishir,a passionate MERN developer</h4>
                 <a data-aos="fade-up" href="https://drive.google.com/file/d/1e-eaFpYI8h-x_jbyB0Z7yoqLkM532luq/view?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">My Resume</a>
            </div>
            <div className="col-md-6 about">
                <img data-aos="fade-down" className="bannerimg"  src="https://www.cmarix.com/blog/wp-content/uploads/2019/09/MEAN-vs-MERN.jpg" alt="" />
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default Banner;