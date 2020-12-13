import React from 'react';

const Heading = (props)  => {
    return (
        <div>
            <div className='about--education--intro'>
                <span className='jxlTta'>+27 (0)71 285 2172</span>
                <span className='yyh'>+27 (0)81 370 0463</span>
                <section className='heading-primary fadeInUp '>
                    <div className='bg-gradient-v wrap size-80'>
                        <div className='row'>
                            <div className='about--education--cover'>
                                <div className='about--education--cover--intro'>
                                  <span className='about--education--cover--intro--header'>
                                      <div className='col'>
                                          <h3>{props.headerOne}</h3>
                                          <p className='secondary-heading-lnger'>{props.headerTwo}</p>
                                          <p>{props.headerThree}</p>
                                          </div>
                                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Heading;
