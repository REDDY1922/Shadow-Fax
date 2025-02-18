import React, { useState, useEffect } from "react";
import "./CloseRunsheet.css";

function CloseRunsheet() {
   const [selectedRider, setSelectedRider] = useState("");
   const [lrNumber, setLrNumber] = useState("");
   const [pendingOrders, setPendingOrders] = useState(0);
   const [amountCollected, setAmountCollected] = useState(0);

   useEffect(() => {
      const fetchPendingOrders = async () => {
         try {
            const response = await fetch("http://localhost:8080/api/orders/pending");
            const data = await response.json();
            setPendingOrders(data.count);
         } catch (error) {
            console.error("Error fetching pending orders:", error);
         }
      };

      fetchPendingOrders();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!selectedRider || !lrNumber.trim()) return;
      setPendingOrders((prev) => Math.max(0, prev - 1));
      setAmountCollected((prev) => prev + 500); 
      setLrNumber("");
   };

   return (
      <main className="runsheet-closure-main">
         <div className="closure-heading">
            <h1>Close Runsheet</h1>
            <p>Choose the rider to close the Runsheet</p>
         </div>
         
         <form onSubmit={handleSubmit} className="runsheet-form">
            <select 
               name="select-riders" 
               value={selectedRider} 
               onChange={(e) => setSelectedRider(e.target.value)}
            >
               <option value="" disabled>Select Rider</option>
               <option value="sanju">Sanju</option>
               <option value="sai">Sai</option>
               <option value="babu">Babu</option>
               <option value="vishnu">Vishnu</option>
            </select>
            
            <label>Enter the LR Number</label>
            <input 
               type="text" 
               value={lrNumber} 
               onChange={(e) => setLrNumber(e.target.value)} 
               placeholder="Enter LR number" 
            />
            
            <input type="submit" value="Submit" />
         </form>

         <table>
            <thead>
               <tr>
                  <th>Pending</th>
                  <th>Amount Collected</th>
                  <th>Close Runsheet</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{pendingOrders}</td>
                  <td><input type="number" required placeholder="Enter Collected Money"/></td>
                  <td><button onClick={() => alert("Runsheet Closed!")} className="runsheet-button">Click Here</button></td>
               </tr>
            </tbody>
         </table>
      </main>
   );
}

export default CloseRunsheet;
