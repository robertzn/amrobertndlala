import React from 'react'
import Logo from "../../images/logo.svg";
import {
  BrowserRouter as 
  NavLink,
} from "react-router-dom";

export const Nav = () => {
    return (
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
    )
}

export default Nav;
