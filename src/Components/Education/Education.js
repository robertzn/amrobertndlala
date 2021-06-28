import React from 'react';
import LearningList from "./LearningList";
import { LearningData } from "./LearningData";
import ContinouslyLearningList from "./ContinouslyLearningList";
import { ContinouslyLearningData } from "./ContinouslyLearningData";
import {
  developments,
  designs,
  ides,
  servers,
  FrontEndWebDevelopments,
  INPROGRESSLEARNINGs,
  BackendWebDevelopments,
} from './Skills';

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


function FrontEndWebDevelopmentsList(props) {
  const FrontEndWebDevelopments = props.FrontEndWebDevelopments;
  const listItems = FrontEndWebDevelopments.map((FrontEndWebDevelopment) =>
    <ul key={FrontEndWebDevelopment.toString()}>
      {FrontEndWebDevelopment}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>Front End Web Development</span>
      <p>{listItems}</p>
    </div>
  );
}

function BackendWebDevelopmentsList(props) {
  const BackendWebDevelopments = props.BackendWebDevelopments;
  const listItems = BackendWebDevelopments.map((BackendWebDevelopment) =>
    <ul key={BackendWebDevelopment.toString()}>
      {BackendWebDevelopment}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>Backend_Web_Development</span>
      <p>{listItems}</p>
    </div>
  );
}

function INPROGRESSLEARNINGsList(props) {
  const INPROGRESSLEARNINGs = props.INPROGRESSLEARNINGs;
  const listItems = INPROGRESSLEARNINGs.map((INPROGRESSLEARNING) =>
    <ul key={INPROGRESSLEARNING.toString()}>
      {INPROGRESSLEARNING}
    </ul>
  );
  return (
    <div className='about--container'>
      <span className='about--a'>IN PROGRESS LEARNING</span>
      <p>{listItems}</p>
      <hr className='divider' />
      
      <span className='about--a'>Deployment & Versioning</span>
      <p>GitHub Pages, Heroku</p>
      <p>Source Code Versioning Control - GIT</p>
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




const Education = ({ year, schoolName, qualification, id } ) => {

  //const { year, schoolName, qualification, id } = props;
  return (
    <div>
      <div className='about--education'>
        <section className='heading-primary fadeInUp '>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <h3 className='Heading-sc-3p94va-0 fGYjRx'>Education</h3>
              <div className='about--bg'>

                <div className='col-1-of-3 bg'>
                  <span className='hero__paragraph heading'>Continously learning&mdash;</span>
                  <LearningList data={LearningData} />
                  <hr className='divider' />
                  <ContinouslyLearningList data={ContinouslyLearningData} />                 
                </div>

                <div className='col-1-of-3 bg'>
                  <span className='hero__paragraph heading'>Let’s see what he’s got&mdash;</span>
                  <DevelopmentsList className='about--bs hero__paragraph' developments={developments} />
                  <hr className='divider' />
                  <FrontEndWebDevelopmentsList className='about--bs hero__paragraph' FrontEndWebDevelopments={FrontEndWebDevelopments} />
                  <hr className='divider' />
                  <BackendWebDevelopmentsList className='about--bs hero__paragraph' BackendWebDevelopments={BackendWebDevelopments} />
                  <hr className='divider' />
                  <ServersList className='about--bs hero__paragraph' servers={servers} />
                </div>
                
                <div className='col-1-of-3 bg'>
                  <span className='hero__paragraph heading'>Skillset&mdash;</span>
                  <DesignList  className='about--bs hero__paragraph' designs={designs} />
                  <hr className='divider'/>
                  <IDEsList className='about--bs hero__paragraph' ides={ides} />  
                  <hr className='divider'/>
                  <INPROGRESSLEARNINGsList  className='about--bs hero__paragraph' INPROGRESSLEARNINGs={INPROGRESSLEARNINGs} />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;

/*
<h4 className='hero__header'>
                The vision is to continuously build
                on my skillset making software
                development the sole focus 
              </h4>
              <p className='paragraph'>
                Becoming competent across modern web technologies, 
                producing highly interactive interfaces and pairing 
                high quality design, being pixel perfect, while meeting
                the highest quality standards of software development.
              </p>*/