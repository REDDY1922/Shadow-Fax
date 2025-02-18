import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RiderActivity.css";

function RiderActivity() {
   const [riderSummary, setRiderSummary] = useState([]);

   useEffect(() => {
      const fetchSummary = async () => {
         try {
            const response = await axios.get("http://localhost:8080/api/rider-activity/summary");
            setRiderSummary(response.data);
         } catch (error) {
            console.error("Error fetching rider activity", error);
         }
      };

      fetchSummary();
   }, []);

   return (
      <main className="rider-activity-main">
         <h1>Rider Activity</h1>
         <table className="activity-table">
            <thead>
               <tr>
                  <th>SI No</th>
                  <th>Rider Name</th>
                  <th>Out for Delivery</th>
                  <th>Delivered</th>
                  <th>Pending</th>
               </tr>
            </thead>
            <tbody>
               {riderSummary.map((rider, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{rider.riderName}</td>
                     <td>{rider.totalAssigned}</td>
                     <td>{rider.delivered}</td>
                     <td>{rider.pending}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </main>
   );
}

export default RiderActivity;
