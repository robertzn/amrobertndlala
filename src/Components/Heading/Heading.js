import React from 'react';


const Heading = (props)  => {
    return (
        <div>
            
            <div className='about--education--intro'>
                <section className='heading-primary fadeInUp '>
                    <div className='bg-gradient-v wrap size-80'>
                        <div className='row'>
                            <div className='about--education--cover'>
                                <div className='about--education--cover--intro'>
                                  <span className='about--education--cover--intro--header'>
                                      <div className='col'>
                                            <h3>{props.headerOne}</h3>
                                            <hr className='divider' />
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
