import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skill.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = (props) => {
    AOS.init();
    const{id,name,projectType, technologies, description,image}=props.skill
    return (
        
        <div data-aos="flip-left" className="m-5 col-md-9 skill justify-content-center">
            
             
              {/* <Card style={{ width: '18rem', height:"100%"}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <div className="text-center m-1 p-1">
                <h3>{name}</h3>
                    <small>{projectType}</small><br/>
                    <Link to={`/projectDetails/${id}`} >
                    <button className="btn btn-primary m-1 p-1">View Details</button>
                </Link>
                </div>
                
                </Card> */}
                <div className='d-flex'>
                    <img className="card-img" src={image} alt=""></img>
                    <div className="text-center details">
                <h3>{name}</h3>
                    <small>{projectType}</small><br/>
                    <Link to={`/projectDetails/${id}`} >
                    <button className="btn btn-primary ">View Details</button>
                </Link>
                </div>
                </div>
                
            </div>
           
    );
};

export default Skill;