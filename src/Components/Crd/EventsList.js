import React from "react";
import Card from "./Card";

export default function EventsList(props) {
  const eventsList = props.data.map(event => (
    <Card
      id={event.id}
      project={event.project}
      title={event.title}
      location={event.location}
      description={event.description}
      tech={event.tech}
    />
  ));

  return <div>{eventsList}</div>;
}
