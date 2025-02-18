import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faUser } from '@fortawesome/free-solid-svg-icons';  
import "./CreateRunsheet.css";

function CreateRunsheet() {
   const [lrNumber, setLrNumber] = useState('');
   const [selectedRider, setSelectedRider] = useState('');
   const [isOpen, setIsOpen] = useState(false);

   const handleChange = (e) => {
      setLrNumber(e.target.value); 
   }

   const handleRiderChange = (value) => {
      setSelectedRider(value);
      setIsOpen(false); 
   }

   const toggleScanner = () => {
      console.log('Scanner triggered');
   }

   return (
      <main className="create-runsheet-page">
         <div className="create-runsheet">
            <h1>Create Run-sheet</h1>
         </div>
         <section className='runsheet-section'>
            <form action="" method="post" className='runsheet'>
               <input 
                  type="text" 
                  name="lrnumber" 
                  value={lrNumber} 
                  onChange={handleChange}  
                  placeholder='LR Number'
                  autoFocus
               />
               <input type="submit" value="Submit" />
            </form>
         </section>
         <div className="scanner-icon">
            <FontAwesomeIcon 
               icon={faQrcode} 
               size='3x' 
               onClick={toggleScanner} 
               style={{ cursor: 'pointer' }}
            />
         </div>
         <div className="rider-names">
            <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
               <div className="selected-option">
                  {selectedRider ? (
                     <>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
                        {selectedRider}
                     </>
                  ) : (
                     'Select Rider'
                  )}
               </div>
               {isOpen && (
                  <div className="dropdown-options">
                     <div className="dropdown-option" onClick={() => handleRiderChange('Sai')}>
                        Sai
                     </div>
                     <div className="dropdown-option" onClick={() => handleRiderChange('Babu')}>
                        Babu
                     </div>
                     <div className="dropdown-option" onClick={() => handleRiderChange('Vishnu')}>
                        Vishnu
                     </div>
                     <div className="dropdown-option" onClick={() => handleRiderChange('Sanju')}>
                        Sanju
                     </div>
                  </div>
               )}
            </div>
            <button className="select-button">Select</button>
         </div>
      </main>
   );
}

export default CreateRunsheet;
