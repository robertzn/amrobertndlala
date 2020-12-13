import React from 'react';

const TouchMe = () => {
  return (
    <div>
      <div className='touch--me'>
        <section className='heading-primary fadeInUp '>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <div className='col-1-of-2'>
                <h3 className='heading-primary--main'>Let's work together</h3>
                <p className='text-intro'>
                  I'm currently looking for new software development
                  opportunities, my inbox is always open. Whether you have a
                  question or just want to say hi, I'll try my best to get back to
                  you!
                </p>
              </div>
              <div className='col-1-of-2'>
                <a className='hero__paragraph button' href='/#'>robert.ndlala@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TouchMe;