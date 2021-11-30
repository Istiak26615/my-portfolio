import React from 'react';
import { Card } from 'react-bootstrap';
import './Skill.css'

const Skill = (props) => {
    const{name, technologies, description,image}=props.skill
    return (
        <div className="col-md-3 skill justify-content-center">
             
              <Card style={{ width: '18rem', height:"100%"}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>Description: {description}</small><br/>
                    <small>Technologies: {technologies}</small></span><br/>
                    </Card.Text>  
                </Card.Body>
                
                </Card>
                
            </div>
    );
};

export default Skill;