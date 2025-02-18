import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Bookingpage.css";

function Bookingpage() {
   return (
      <main className='default-booking'>
         <div className='booking-page'>
            <div className="outer-search-container">
               <div className="inner-search-container">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
               </div>
            </div>
            <h2>No Orders Found</h2>
            <p>Please create one.</p>
            <Link to='/createbooking' className='create-booking-link'>
               <button aria-label="Create Booking">
                  + Create Booking
               </button>
            </Link>
         </div>
      </main>
   );
}

export default Bookingpage;