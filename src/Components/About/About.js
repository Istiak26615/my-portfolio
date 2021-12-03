import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();
    return (
        <div>
            
            <div className="container">
        <div className="m-5 row d-flex justify-content-between align-items-center">
            <div className="col-md-6 about">
                <img data-aos="fade-right" className=" about-image" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/71307438_2419000931678254_266118325438775296_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=ihYfd-TgLZ0AX8Nzlns&_nc_ht=scontent.fdac5-2.fna&oh=a3fe6c032a94cd423fec658a82b03db8&oe=61CCBD9C" alt="" />
            </div>
            <div data-aos="fade-left" className="col-md-5 about-description">
                  <h2>About Me</h2>
                  <p>I am a learner. I am learning everyday, and I want to learn new technologies. I have made some projects based on what I have learnt. Now I want to explore my knowledge in a place where I can experience something new and learn from the experts.</p>
                  <a href="https://www.linkedin.com/in/istiak-shamim-shishir-44643316a/" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Hire Me</a>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;