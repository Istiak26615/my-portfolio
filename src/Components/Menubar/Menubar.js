import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
      <div className="MenuBar-container menubar mt-2  d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
            
              <div className="logo-img">
              <Link to="/" className=" d-flex align-items-center items">
                <h3 className="logoname">Istiak Shamim Shishir</h3>
                </Link>
                
              </div>
              
            </div>
            <div className="col-md-8">
              <div className="menu-container">
                <ul className="d-flex align-items-center justify-content-end ">
                  
                  <Link to="/about" className="items">
                    <li>About me</li>
                  </Link>
                  <Link to="/projects" className="items">
                    <li>Skills</li>
                  </Link>
                  <Link to="/skills" className="items">
                    <li>Projects</li>
                  </Link>
                  <Link to="/contact" className="items">
                    <li>Contact</li>
                  </Link>
                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;