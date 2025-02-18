import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBasketShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import "./Sidepanel.css";

function Sidepanel() {
   const [activeLink, setActiveLink] = useState('/bookingpage'); 
   const [isOpen, setIsOpen] = useState(false); 
   const togglePanel = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <div className="hamburger-menu" onClick={togglePanel}>
            <FontAwesomeIcon icon={faBars} size="2x" />
         </div>

         <section className={`sidepanel ${isOpen ? 'open' : ''}`}>
            <div className="sidepanel-logo">
               <img src="/" alt="AbcSystems Logo" />
               <h1>Shadowfax</h1>
            </div>
            <div className="sidepanel-nav-links">
               <Link
                  to="/bookingpage"
                  className={activeLink === '/bookingpage' ? 'selected' : ''}
                  onClick={() => setActiveLink('/bookingpage')}
               >
                  <div>
                     <FontAwesomeIcon icon={faHome} size="2x" />
                     <span>Booking</span>
                  </div>
               </Link>
               <Link
                  to="/basketpage"
                  className={activeLink === '/basketpage' ? 'selected' : ''}
                  onClick={() => setActiveLink('/basketpage')}
               >
                  <div>
                     <FontAwesomeIcon icon={faBasketShopping} size="2x" />
                     <span>Basket</span>
                  </div>
               </Link>
            </div>
         </section>
      </>
   );
}

export default Sidepanel;
