import React from 'react';
//import myPro1 from '../../images/pro/pro1.jpg';
import vs from '../../images/pro/vs.png';
//import bc2 from '../../images/pro/bc2.PNG';
import pv1 from '../../images/pro/pv1.PNG';
import bcr from '../../images/pro/bcr.PNG';

export const ShowProjects = () => {
  return (
    <div>

      <div className='my--project--preview'>
        <section className='heading-primary fadeInUp '>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <h3 className='Heading-sc-3p94va-0 fGYjRx'>
                Some Things I've Built
              </h3>
              <div className='grid vertical-align ShowProject'>
                <div className='column ShowProjects'>
                  {/*<p class='text-introm'>Individual Projects</p>*/}

                  <div className='ShowProjectDescriptionContainer'>
                    <div className='ShowProjectDescription--right'>
                      <p >
                        <span>Personal Website V1</span>
                      </p>
                      <p>
                        Personal Website V1
                        Second iteration of my personal website. 
                        Designed and developed with a conscious effort to a
                        void using any superfluous frameworks like Bootstrap.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='column ShowProjectsImage'>
                  <pre className='img--caver'>
                    <img src={pv1} className='my__pro1' alt='logo' />
                  </pre>
                </div>
              </div>

              <div className='grid vertical-align ShowProject'>
                <div className='column ShowProjectsImage'>
                  <pre className='img--caver'>
                    <img src={bcr} className='my__pro1' alt='logo' />
                  </pre>
                </div>
                <div className='column ShowProjects'>
                  {/*<p class='text-introm'>Individual Projects</p>*/}
                  <div className='ShowProjectDescriptionContainer'>
                   
                    <div className='ShowProjectDescription--left'>
                      <p>
                        <span>Business card</span>
                      </p>
                      <p>
                        The business cards were
                        printed on a 520gsm cotton
                        stock, printed by Stitch Press.
                        The concept was created and
                        briefed into a Melbourne based
                        designer, Lachlan Philp for
                        the custom caligraphy to be
                        created.
                        The holographic foiling catches
                        light, giving the card a varying
                        finish depending on the angle
                        it is viewed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid vertical-align ShowProject'>
                <div className='column ShowProjects'>
                  <div className='ShowProjectDescriptionContainer'>
                    <div className='ShowProjectDescription--right'>
                      <p>
                        <span>IDEs</span>
                      </p>
                      <p>
                        A minimal, dark blue theme for VS Code, 
                        Sublime Text, Atom, iTerm, and more. 
                        Available on Visual Studio Marketplace, 
                        Package Control, Atom Package Manager, and npm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='column ShowProjectsImages'>
                  <pre className='img--caver'>
                    <img src={vs} className='my__pro1' alt='logo' />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
      </div> 
  );
};

export default ShowProjects;
