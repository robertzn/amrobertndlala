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


function DevelopmentsList(props) {
  const developments = props.developments;
  const listItems = developments.map((development) =>
    <ul key={development.toString()}>
      {development}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>DEVELOPMENT</span>
      <p>{listItems}</p>
    </div>
  );
}

function DesignList(props) {
  const designs = props.designs;
  const listItems = designs.map((design) =>
    <ul key={design.toString()}>
      {design}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>DESIGN</span>
      <p>{listItems}</p>
      </div>
  );
}


function IDEsList(props) {
  const ides = props.ides;
  const listItems = ides.map((ide) =>
    <ul key={ide.toString()}>
      {ide}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>IDEs</span>
      <p>{listItems}</p>
      <span className='about--a'>Versioning</span>
      <p>GIT</p>
      <hr className='divider' />
      
      <span className='about--a'>Deployment</span>
      <p>GitHub Pages, Heroku</p>

      <hr className='divider' />
      
      <span className='about--a'>IN PROGRESS LEARNING.</span>
      <p>AWS – ANGULAR, FIREBASE, 
         APPLICATION TO RANDOMLY DISPLAY INSPIRATIONAL QUOTES
      </p>
    </div> 
  );
}

function ServersList(props) {
  const servers = props.servers;
  const listItems = servers.map((server) =>
    
    <ul key={server.toString()}>
      {server}
      </ul>
      
  );
  return (
    <div className='about--container'>
      <span className='about--a'>Server</span>
      <p>{listItems}</p>
    </div>
  );
}





