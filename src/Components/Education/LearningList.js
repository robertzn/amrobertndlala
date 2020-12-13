//import React from 'react';
import Education from "./Education";
//import {LearningSub} from "./Learning";


export const LearningList = ({LearntSub}) => {
    return (
        <div>
            {
                LearntSub.map((i) => {

        return (
        <Education                
            key={i}
            id={LearntSub[i].id}
            year={LearntSub[i].year}
            schoolName={LearntSub[i].schoolName}
            qualification={LearntSub[i].qualification}
            />
        );       
    })
            }
        </div>
    );
}

export default LearningList;
/*
*/