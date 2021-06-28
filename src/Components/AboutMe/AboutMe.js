import React from 'react';
import myPhoto from '../../images/me.jpg';
import { MdRadioButtonChecked } from 'react-icons/md';
const AboutMe = (props) => {
  return (
    <div>
      <div className='about__me_section'>
        <section className='heading-primary fadeInUp '>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <h3 className='Heading-sc-3p94va-0 fGYjRx'>{props.header}</h3>
              <div className='col-1-of-2'>
                <p className='hero__paragraph'>{props.greeting}</p>
                <p className='hero__paragraph'>{props.introAboutMe}</p>
                  <p className='hero__paragraph'>Shortly after graduating from
                  <a className="btn-text" target="_blank" href='http://www.pearsoninstitute.africa' rel="noreferrer" > cti education group </a> I joined a software development team
                    at <a className="btn-text" target="_blank" href='http://www.emalangenitech.co.za/' rel="noreferrer">  Emalangeni Technologies</a> where I worked on a wide variety of interesting and
                  meaningful projects on a daily basis.
                  </p>
                 <span className='secondary-heading'>
                  Here are a few technologies I've been working with recently:
                </span>
                   <div className='skills'>
                  <div className='about-skill'>
                    <span className='skill-item'>
                      {' '}
                      <MdRadioButtonChecked /> JavaScript (ES5
                      +)
                    </span>
                    <span className='skill-item'>
                      <MdRadioButtonChecked />
                      React
                    </span>
                  </div>
                  <div className='about-skill'>
                    <span className='skill-item'>
                      <MdRadioButtonChecked /> Angular
                    </span>
                    <span className='skill-item'>
                      <MdRadioButtonChecked /> PHP
                    </span>
                  </div>
                  <div className='about-skill'>
                    <span className='skill-item'>
                      <MdRadioButtonChecked /> Java
                    </span>
                    <span className='skill-item'>
                      <i class='fas fa-play'></i>
                      <MdRadioButtonChecked /> HTML5
                    </span>
                  </div>
                  <div className='about-skill'>
                    <span className='skill-item'>
                      <MdRadioButtonChecked /> Node.js
                    </span>
                    <span className='skill-item'>
                     <MdRadioButtonChecked /> (S)CSS
                    </span>
                  </div>
                </div>
              </div>
              
              <div className='col-1-of-2 my__p-c'>
                <section className='imgrb-box'>
                  <div className='top'>
                    <div className='top-image '>
                      <pre className='img--caver fade'>
                        <img src={myPhoto} alt='robert' />
                      </pre>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutMe;
/*
Inspired and efficient full stack developer with 3+ years experience in application layers, presentation layer, and databases, looking to Secure a Software development role or similar position to further develop knowledge in a more practical and fast paced environment. I have strong technical skills and interpersonal skills. Eager to learn and be challenged to grow and improve my communication and gain more professional IT skills. Helvetica neue
*/
