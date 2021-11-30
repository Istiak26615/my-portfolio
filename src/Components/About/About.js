import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-5 about">
                <img className="about-image" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/71307438_2419000931678254_266118325438775296_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=ihYfd-TgLZ0AX8Nzlns&_nc_ht=scontent.fdac5-2.fna&oh=a3fe6c032a94cd423fec658a82b03db8&oe=61CCBD9C" alt="" />
            </div>
            <div className="col-md-5 about-description">
                  <h2>About Me</h2>
                  <p>I am a learner. I am learning everyday, and I want to learn new technologies. I have made some projects based on what I have learnt. Now I want to explore my knowledge in a place where I can experience something new and learn from the experts.</p>
                  <a href="https://drive.google.com/file/d/1e-eaFpYI8h-x_jbyB0Z7yoqLkM532luq/view?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Hire Me</a>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;