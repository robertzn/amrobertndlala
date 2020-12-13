import React from 'react';

const Hero = (props) => {
  return (
    <div className='hero-full-container'>
      <span className='jxlTta fadeInUp'>+27 (0)71 285 2172</span>
      <span className='yyh fadeInUp'>+27 (0)81 370 0463</span>
      <div className='hero__context'>
        <section className='heading-primary fadeInUp '>
          <div className='bg-gradient-v wrap size-80'>
            <div className='hero__section'>
              <div className='row'>
                <p className='text-context'>{props.greeting}</p>
                <h1 className='heading-primary--main'>{props.myName}</h1>
                <h4 className='hero__header'>{props.whatDo}</h4>
                <p className='hero__paragraph size-70'>{props.introAboutMe}</p>
                <a className='btn btn--hero btn--animated' href='/#'>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
