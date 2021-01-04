import React from "react";
import ContinouslyLearning from "./ContinouslyLearning";

export default function ContinouslyLearningList(props) {
  const ContinouslyLearningList = props.data.map(event => (
    <ContinouslyLearning
      id={event.id}
      year={event.year}
      schoolName={event.schoolName}
      qualification={event.qualification}
    />
  ));

  return <div>{ContinouslyLearningList}</div>;
}