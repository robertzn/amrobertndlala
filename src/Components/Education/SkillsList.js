import Education from "./Components/Education/Education";
import {skills} from "./Components/Education/Skills";
import React from "react";

const Skillslist = ({skills}) => {
    const skillcomponent = skills.map(({user, i} ) => {
        return < skills id={skills[i].id} SkillName={skills[i].SkillName}/>
    })
    return(
        <div>{skillcomponent}</div>
    );
}

export default Skillslist;




