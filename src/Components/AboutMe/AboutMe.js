import React from 'react';
import myPhoto from '../../images/robb.jpg';
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
                  <a className="btn-text" href='https://www.pearsoninstitute.africa'> cti education group </a> I joined a software development team at
                  <a className="btn-text" href='https://www.emalangenitech.co.za/'> Emalangeni Technologies</a> where I work on a wide variety of interesting and
                  meaningful projects on a daily basis.
                  </p>
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
