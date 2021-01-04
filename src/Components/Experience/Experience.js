import React, { PureComponent } from 'react';
import { MdRadioButtonChecked } from 'react-icons/md';
import VerticalTabs from '../VerticalTabs';
import VerticalTabsItem from '../VerticalTabsItem';

export default class Experience extends PureComponent {
  render() {
    return (
      <div className='experience'>
        <div className='my__experience'>
          <section className='heading-primary fadeInUp '>
            <div className='bg-gradient-v wrap size-80'>
              <div className='row'>
                <h3 className='Heading-sc-3p94va-0 fGYjRx'>
                Where I've Worked
                </h3>

                <VerticalTabs >
                  <VerticalTabsItem  label={<div className='hero__paragraph'>C & K Moneyline</div>}>
                    <span className='tab-primary'>
                      <li className='tab-primary--main'>
                        Intermediate Developer <span className='comp__n'>@ C & K Moneyline</span>
                      </li>
                      <li className='tab-primary--sub'>Mar 2014 – Jul 2016</li>
                      <ul>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                         <p className='hero__paragraph'>
                         Write modern, performant, maintainable code for a 
                         diverse array of client and internal projects
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                         <p className='hero__paragraph'>
                         Work with a variety of different languages, platforms, frameworks, 
                         and content management systems such as JavaScript, TypeScript, 
                         HTML5, CSS3, AngularJS, foundation, SASS, RequireJS, React, NodeJS,
                        Communicate with multi-disciplinary teams of engineers, designers, producers, 
                        and clients on a daily basis
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                         <p className='hero__paragraph'>
                         Designing application icons and images using Adobe Photoshop and Illustrator.
                        </p>
                        </li>                        
                      </ul>
                    </span>
                  </VerticalTabsItem>

                  <VerticalTabsItem  label={<div className='hero__paragraph'>Incredible Graphical Technologies</div>}
                  >
                    <span className='tab-primary'>
                      <li className='tab-primary--main'>
                      Junior Developer <span className='comp__n'>@ Incredible Graphical Tech</span>
                      </li>
                      <li className='tab-primary--sub'>Mar 2014 – Jul 2016</li>
                      <ul>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                         <p className='hero__paragraph'>
                         Write modern, performant, maintainable code for a 
                         diverse array of client and internal projects
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Work with a variety of different languages, platforms, frameworks, 
                            and content management systems such as JavaScript, TypeScript, 
                            HTML5, CSS3, AngularJS, foundation, SASS, RequireJS, React, NodeJS,
                            Communicate with multi-disciplinary teams of engineers, designers, producers, 
                            and clients on a daily basis
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Worked with a team of three creative and 
                            detail-oriented graphic designer to build 
                            marketing websites and digital brand management, 
                            such as logo design, Business card, and layout design
                            Adobe suite, such as XD, Photoshop and Illustrator.
                        </p>
                        </li>
                      </ul>
                    </span>
                  </VerticalTabsItem>
                  <VerticalTabsItem label={<div className='hero__paragraph'>Opex Business Solution</div>}>
                    <span className='tab-primary'>
                      <li className='tab-primary--main'>
                      Junior Developer  <span className='comp__n'>@ Opex Business Solution</span>
                      </li>
                      <li className='tab-primary--sub'>Mar 2014 – Jul 2016</li>
                      <ul>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Design and Maintain Dashboard Applications that can be hosted on 
                            local servers/ Remote servers using variety of different 
                            languages such HTML, CSS, Sass, JavaScript, jQuery, and PHP
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            To maintain/create websites including updating all of 
                            OPEX websites and domains / New or Existing clients.
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Implement Analytics received from a Local Server /Data source
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Allow growth on the dashboard for other integrations of Applications
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            To offer support and training on developed applications to clients.
                        </p>
                        </li>                        
                      </ul>                                     
                    </span>
                  </VerticalTabsItem>
                  <VerticalTabsItem label={<div className='hero__paragraph'>Emalangeni Technologies</div>}>
                    <span className='tab-primary'>
                      <li className='tab-primary--main'>
                      Intern <span className='comp__n'>@ Emalangeni Technologies</span>
                      </li>
                      <li className='tab-primary--sub'>Mar 2014 – Jul 2016</li>
                      <ul>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Developed and maintained code for in-house and client 
                            websites primarily using HTML, CSS, Sass, JavaScript, jQuery,
                            and PHP
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Developed and maintained java fx application that 
                            handle user requests and used various controllers 
                            to delegate requests flow to the back-end using the MVC patterns applications
                          </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Participated in the design and development of 
                            database schema and Entity-Relationship diagrams 
                            of the back-end Oracle database tables for the 
                            application.                           
                        </p>
                        </li>
                        <li className='tab-primary--description--sub'>
                          <span className='icon'>
                          <MdRadioButtonChecked />
                          </span>
                          <p className='hero__paragraph'>
                            Manually tested sites in various browsers and 
                            mobile devices to ensure cross-browser 
                            compatibility and responsiveness                        
                        </p>
                        </li> 
                      </ul>                   
                    </span>
                  </VerticalTabsItem>
                </VerticalTabs>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

//export default Experience;

/*export default TouchMe;
/*

/*
class Experience extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Tab 1</Tab>
          <Tab tabFor="vertical-tab-two">Tab 2</Tab>
          <Tab tabFor="vertical-tab-three">Tab 3</Tab>
        </TabList>
        <TabPanel tabId="vertical-tab-one">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
}
*/
