
import React from "react";
import Learning from "./Learning";

export default function LearningList(props) {
  const LearningList = props.data.map(event => (
    <Learning
      id={event.id}
      year={event.year}
      schoolName={event.schoolName}
      qualification={event.qualification}
    />
  ));

    return (
        <div>
            {LearningList}
        </div>
        );
}