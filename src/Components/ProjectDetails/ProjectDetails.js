import React from 'react';
import { useParams } from 'react-router';
import projectsData from '../../Data/Data';

const ProjectDetails = () => {
    let { id } = useParams();
    const projects=projectsData.find(pj=>pj.id===id)
    
    return (
        <div className="text-center container">
            <h1>{projects.name}</h1>
            
           <b>Type:</b> {projects.projectType}<br/>
           <b>Description:</b>{projects.description}<br/>
           <b>Technology used:</b> {projects.technologies}<br/>
           <a href={projects.livelink} className=" m-2 btn btn-primary btn-lg active" role="button" aria-pressed="true">live link</a>
           <a href={projects.gitlink} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Github</a>


        </div>
    );
};

export default ProjectDetails;