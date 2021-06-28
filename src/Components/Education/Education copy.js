import React from 'react';
import {
  developments,
  designs,
  ides,
  servers,
} from './Skills';


function DevelopmentsList(props) {
  const developments = props.developments;
  const listItems = developments.map((development) =>
    <ul key={development.toString()}>
      {development}
    </ul>
  );
  return (
    <p>{listItems}</p>
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
    <p>{listItems}</p>
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
    <p>{listItems}</p>
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
    <p>{listItems}</p>
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
                  
                <span className='hero__paragraph heading'>
                    &mdash;  Continously learning
                </span>
                  
                 <div className='about--container'>
                  <p className='hero__paragraph heading_two'>November 2013</p>
                  <p className='about--b heading-tertiary'>Lugebhuta High School</p>
                  <span className='hero__paragraph'>Matric (Grade 12) </span>
                  </div>
                  <div className='about--container'>
                  <p className='hero__paragraph heading_two'>November 2014</p>
                  <p className='about--b heading-tertiary'>CTI Education Group</p>
                  <span className='hero__paragraph'>Certificate in Information Technology </span>
                  </div>
                  <div className='about--container'>
                  <p className='hero__paragraph heading_two'>November 2017</p>
                  <p className='about--b heading-tertiary'>CTI Education Group</p>
                  <span className='hero__paragraph'>BSc in Information Technology</span>
                </div>
                  <hr className='divider' />

                  <div className='about--container'>
                      <p className='hero__paragraph heading_two'>2018</p>
                      <p className='about--b heading-tertiary'>Java Master class</p>
                      <span className='hero__paragraph heading_tree'>By Tim Buchalka (Learn Promming)</span>
                  </div>
                  
                  <div className='about--container'>
                      <p className='hero__paragraph heading_two'>2019</p>
                      <p className='about--b heading-tertiary'>PHP Master class</p>
                      <span className='hero__paragraph heading_tree'>By Eduwin Diaz (CodingFaculty)</span>
                  </div>
                  
                  <div className='about--container'>
                      <p className='hero__paragraph heading_two'>2019</p>
                      <p className='about--b heading-tertiary'>Web Developer Bootcamp</p>
                      <span className='hero__paragraph heading_tree'>By Colt (Udemy)</span>
                  </div>
                  
                  <div className='about--container'>
                      <p className='hero__paragraph heading_two'>2020</p>
                      <p className='about--b heading-tertiary'>Modern React with Redux Courses</p>
                      <span className='hero__paragraph heading_tree'>by Stephen Grider (Udemy)</span>
                  </div>
                  
                  
              </div>

              <div className='col-1-of-3 bg'>
                <span className='hero__paragraph heading'> &mdash; Let’s see what he’s got.</span>
                
                <div className='about--container'>
                    <span className='about--a'>DEVELOPMENT</span>
                    <DevelopmentsList  className='about--bs hero__paragraph' developments={developments} />
                </div>

                  <hr className='divider'/>

                <div className='about--container'>
                    <span className='about--a'>Server</span>
                    <ServersList  className='about--bs hero__paragraph' servers={servers} />
                </div>
              
              </div>
              <div className='col-1-of-3 bg'>
               <span className='hero__paragraph heading'>
                  &mdash; Skillset
                </span>

                <div className='about--container'>
                    <span className='about--a'>DESIGN </span>
                    <DesignList  className='about--bs hero__paragraph' designs={designs} />
                </div>

                  <hr className='divider'/>
                   <div className='about--container'>
                    <span className='about--a'>IDEs</span>
                    <IDEsList  className='about--bs hero__paragraph' ides={ides} />
                    <span className='about--bs heading-tertiary'>Source Code Versioning Control - GIT.GIT</span>
                  </div>
                  <hr className='divider'/>
                  <div className='about--container'>
                  <span className='about--a'>IN PROGRESS</span>
                    <p>IN PROGRESS LEARNING .AWS – ANGULAR & FIREBASE
                    APPLICATION TO RANDOMLY DISPLAY INSPIRATIONAL QUOTES
                    </p>
                </div>
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