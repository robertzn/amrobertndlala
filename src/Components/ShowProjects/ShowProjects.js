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
                        <span>Intuitive markup</span>
                      </p>
                      <p>
                        A nicer look at your GitHub profile and 
                        repository stats with data visualizations 
                        of your top languages and stars. Sort 
                        through your top repos by number of stars, 
                        forks, and size.
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
                        <span>Intuitive markup</span>
                      </p>
                      <p>
                        A web app for visualizing personalized 
                        Spotify data. View your top artists, 
                        top tracks, recently played tracks, and 
                        detailed audio information about each track. 
                        Create and save new playlists of recommended 
                        tracks based on your existing playlists 
                        and more.
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
                        <span>Intuitive markup</span>
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
