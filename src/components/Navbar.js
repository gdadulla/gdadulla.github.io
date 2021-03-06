import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import { SidebarData } from './SidebarData';
import "./Navbar.css";
function Navbar() {

    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>  
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FiIcons.FiChevronRight onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className={sidebar ? 'exit-menu-bars active' : 'exit-menu-bars'}>
                            <FiIcons.FiChevronLeft/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <> 
                             
                             <li key={index} className={item.cName}>
                                <a onClick={() => window.location.href=item.path}>
                                    <span>{item.title}</span>
                                </a>
                             </li>
                             
                             {/* TO DO FOR navbar 
                             
                                - Add dropdown for sub menu items
                                - Style them
                                - yuh
                                - here it is, commented out because i think it ruins the flow of the site.
                             {item.sub.map((sub, i) => {
                                        return (
                                        <li key={i} className={sub.cName}>
                                        <Link to={sub.path}>
                                            <span>{sub.title}</span>
                                        </Link>
                                        </li>
                                        );
                                    })}
                             */}
                             
                                    
                                    
                            </>
                        );
                    })}
                </ul>
                
                <div className="favicon">
                    <a href="https://www.instagram.com/germ_ine/?hl=en" target="_blank"><img src="instagram.png"></img></a>
                    <a href="https://www.linkedin.com/in/gdadulla1124/" target="_blank"><img src="linkedin.png"></img></a>
                    <a href="https://github.com/gdadulla"><img src="github.png" target="_blank"></img></a>
                </div>
            </nav>
           

        </>
    );
}

export default Navbar;