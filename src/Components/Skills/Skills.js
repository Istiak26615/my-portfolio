import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';

const Skills = () => {
    const[skills, setSkills]=useState([])
    useEffect(()=>{
        fetch('./skills.JSON')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
    return (
        <div className=" container skills justify-content-center">
            <h1 className="text-center">Projects</h1>
                  
        <div className="row">       
            {
                skills.map(skill=><Skill key={skill.id} skill={skill}></Skill>)
            }
        </div>
        </div>
    );
};

export default Skills;



