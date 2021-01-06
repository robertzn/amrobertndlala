import React from "react";
import Hero from "./Components/Hero/Hero";
import Heading from './Components/Heading/Heading';
import TouchMe from "./Components/TouchMe/TouchMe";
import Experience from "./Components/Experience/Experience";
import ShowProjects from "./Components/ShowProjects/ShowProjects";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  NavLink,
} from "react-router-dom";

import Logo from "./images/logo.svg";
import "./style.scss";
import "./css/webslides.scss";
import "./sass/main.scss";




/*
function LongContent() {
  return (
    <div>
      <ScrollToTopOnMount />

      <h1>Here is my long content page</h1>
      <p>...</p>
    </div>
  );
}*/

const App = (props) => {
  
  
  return (
    
      
            <div>
              <Router>
               <ScrollToTop smooth />
              <Route exact path="/Hero">
              
                 <Hero
                     greeting="Hi my name is"
                     myName="Robert Ndlala"
                     whatDo="I design and build softwares."
                     introAboutMe="I am a full stack developer with 3+ years experience, based in South Africa, specializing in building, research (include occasionally designing) exceptional websites, applications, and everything in between."
                 />
                 <AboutMe
                     header="About Me"
                     greeting="Hello!  I'm Robert, a software developer based in Pretoria South Africa."
                     introAboutMe="I'm coming from a full stack background (which includes research and UX/UI designer)  it has taken the past
                     2 years of my career to figure out where I belong.
                    I enjoy creating softwares that live on the internet, whether
                    that be websites, applications, or anything in between."
                 />

                <TouchMe />
               
             </Route>
             

               <Route exact path="/Education">
                 <Heading

                     headerOne=' The vision is to continuously build on my
                             skillset making software development the sole focus.'
                     headerTwo='Becoming competent across modern web technologies,
                             producing highly interactive interfaces and pairing high
                             quality design, being pixel perfect, while meeting the
                             highest quality standards of development'
                     headerThree='I always fully immerse myself to any working environment which I show through work ethic and commitment, whether
                               it be working closely within a team or being delligated a list of
                               individual tasks, it is always important to me that I
                               deliver the highest quality standard of work.'
                   />
                         
               <Education />
                 <Experience/>
               </Route>
               <Route exact path="/Projects">
                 <Heading
                     headerOne='My passion lies in the aesthetics of design,
                                seamless animations and interaction between 
                                users and application.'
                     headerTwo='Learning about design and development patterns,
                                typographic relationships, training the eye to 
                                see whitespace and writing clean code has been 
                                part of this journey. It is incredibly rewarding 
                                to witness and be responsible for a design to 
                                transition to a digital presence, giving it life.'
                     headerThree=''

                 />
                 <Projects
                     ApplicationName='Java FX Applications'
                     ApplicationDiscription='Learn the core Java skills, Architecting Robust Java Applications,
                      Learned industry best practices in Java
                      Available On Local Host.'
                     ApplicationTech='SpringBoot, JavaFX , SL'>

                 </Projects>
                 <ShowProjects/>
                 <TouchMe />
                 
              </Route>
             
                <Redirect to="/Hero" />
               <Footer/>
          
           
               <div className="div__nav">
              <span className="header__background">
                <img
                    src="img/header-circle.svg"
                    alt=""
                    className="header__image"
                />
              </span>
                 <header className="section">
                   <div className="section-full wrap size-80">
                     <div className="nav-main">
                       <label htmlFor="show-menu" className="show-menu">
                         <div className="nav-icon"></div>
                       </label>
                       
                       <img
                           src={Logo}
                           alt="Robert logo"
                           className="nav-main__logo"
                       />
                       <input type="checkbox" id="show-menu" role="button"/>
                       <ul className="nav-main__menu fadeInUp" id="menu">
                         <li className="nav-main__menu-item">
                            
                        <NavLink
                               exact
                               to="/Hero"
                               className="nav-main__menu-item"
                           >
                             Home
                           </NavLink>
                         </li>
                         <li className="nav-main__menu-item">
                           
                           <NavLink
                               exact
                               to="/Education"
                               className="nav-main__menu-item"
                           >
                               Experience
                           </NavLink>
                             
                         </li>
                         <li className="nav-main__menu-item">
                           <NavLink
                               exact
                               to="/Projects"
                               className="nav-main__menu-item"
                           >
                             Projects
                           </NavLink>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </header>
              </div>
        </Router>
    </div>      
    
   );
};

export default App;
