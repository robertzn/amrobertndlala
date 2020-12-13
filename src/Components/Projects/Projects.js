import React, { useState } from 'react';
import icon from '../../images/folder-open.svg';
import { MdLaunch } from 'react-icons/md';

const Projects = (props) => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <div className='project-features'>
        <section className='section-features'>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <h3 className='Heading-sc-3p94va-0 fGYjRx'>
                Selected Works
              </h3>
              <div className='row'>
                <div className='col-1-of-3'>
                  <div className='feature-box'>
                    <span className='show--project'><MdLaunch />
                    </span>
                    <span className='feature-box--icon '><img src={icon } alt='robert' />
                    </span>
                    <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}
                    </h3>
                    <p className='feature-box__text'>{props.ApplicationDiscription}
                    </p>
                    <p className='feature-box__text'>{props.ApplicationTech}</p>
                  </div>
                </div>


              <div className='col-1-of-3'>
                <div className='feature-box'>

                    <span className='show--project'>
                      <MdLaunch />
                    </span>
                  <span className='feature-box--icon '>
                      <img src={icon } alt='robert' />
                    </span>

                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    {props.ApplicationName}
                  </h3>
                  <p className='feature-box__text'>
                    {props.ApplicationDiscription}

                  </p>
                  <p className='feature-box__text'>
                    {props.ApplicationTech}
                  </p>
                </div>
              </div>

              <div className='col-1-of-3'>
                <div className='feature-box'>

                    <span className='show--project'>
                      <MdLaunch />
                    </span>
                  <span className='feature-box--icon '>
                      <img src={icon } alt='robert' />
                    </span>

                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    {props.ApplicationName}
                  </h3>
                  <p className='feature-box__text'>
                    {props.ApplicationDiscription}

                  </p>
                  <p className='feature-box__text'>
                    {props.ApplicationTech}
                  </p>
                </div>
              </div>
            </div>

            </div>


            <div className='row'>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
            </div>

            <div className='show-hide-project'>
              {showText && (
                <div>
                  <div className='row'>
                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <div className='feature-box__btn__lst'>
              <button
                onClick={() => setShowText(!showText)}
                className='btn btn--full' href='/#'
              >
                View More Projects
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
