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
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                             </li>
                             
                             {/* TO DO FOR navbar 
                             
                                - Add dropdown for sub menu items
                                - Style them
                                - yuh
                             
                             */}
                             
                                    {item.sub.map((sub, i) => {
                                        return (
                                        <li key={i} className={sub.cName}>
                                        <Link to={sub.path}>
                                            <span>{sub.title}</span>
                                        </Link>
                                        </li>
                                        );
                                    })}
                                    
                            </>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;