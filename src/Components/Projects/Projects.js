import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './Projects.css'

const Projects = () => {
    return (
        <div>
        <div className="col-md-6 skillLine container">
            <h3>Html</h3>
            <LinearProgress color="primary" variant="determinate" value={80}/><p>80%</p>
            <h3>CSS</h3>
            <LinearProgress color="primary" variant="determinate" value={90}/><p>90%</p>
            <h3>Bootstrap</h3>
            <LinearProgress color="primary" variant="determinate" value={85}/><p>85%</p>
            <h3>Tailwind</h3>
            <LinearProgress color="primary" variant="determinate" value={70}/><p>70%</p>
            <h3>Javascript</h3>
            <LinearProgress color="primary" variant="determinate" value={75}/><p>75%</p>
            <h3>React</h3>
            <LinearProgress color="primary" variant="determinate" value={75}/><p>75%</p>
            <h3>Node</h3>
            <LinearProgress color="primary" variant="determinate" value={60}/><p>60%</p>
            <h3>Expressjs</h3>
            <LinearProgress color="primary" variant="determinate" value={60}/><p>60%</p>
            <h3>MongoDB</h3>
            <LinearProgress color="primary" variant="determinate" value={65}/><p>65%</p>
            
        </div>
        </div>
        )
};

export default Projects;