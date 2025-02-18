import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTruck, faClipboardList, faBars } from '@fortawesome/free-solid-svg-icons';
import "./LastMileSidePanel.css";

const menuItems = [
   { path: "/dashboard", label: "Dashboard", icon: faHome },
   { path: "/receive", label: "Receive", icon: faTruck },
   { path: "/rider-activity", label: "Rider Activity", icon: faClipboardList },
   { path: "/close-runsheet", label: "Close RunSheet", icon: faClipboardList }
];

function LastMileSidePanel() {
   const location = useLocation();
   const [isOpen, setIsOpen] = useState(false);
   const [activeLink, setActiveLink] = useState(location.pathname);

   const togglePanel = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <div className="hamburger-menu" onClick={togglePanel} aria-label="Toggle Side Panel">
            <FontAwesomeIcon icon={faBars} size="2x" />
         </div>

         <nav className={`sidepanel ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
            <div className="sidepanel-logo">
               <img src="/" alt="AbcSystems Logo" />
               <h1>Shadow fax</h1>
            </div>
            <div className="sidepanel-nav-links">
               {menuItems.map((item) => (
                  <Link 
                     key={item.path} 
                     to={item.path} 
                     className={activeLink === item.path ? 'selected' : ''}
                     onClick={() => {
                        setActiveLink(item.path);
                        setIsOpen(false);
                     }}
                  >
                     <div>
                        <FontAwesomeIcon icon={item.icon} size="2x" className="fa-icon" />
                        <span>{item.label}</span>
                     </div>
                  </Link>
               ))}
            </div>
         </nav>
      </>
   );
}

export default LastMileSidePanel;
