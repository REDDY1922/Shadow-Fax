import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders/pending-count");
        setPendingOrdersCount(response.data.count);
      } catch (error) {
        console.error("Error fetching pending orders count", error);
      }
    };

    fetchPendingOrders();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <main className="dashboard-container">
      <form onSubmit={handleSearchSubmit} className="dashboard-form" aria-label="Search Form">
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Search here" 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>

      <div className="pending-orders">
        <h2>Pending Orders</h2>
        <Link 
          to="/PendingOrders" 
          className="pending-orders-link" 
          aria-label={`View ${pendingOrdersCount} pending orders`}
        >
          {pendingOrdersCount}
        </Link>
      </div>

      <div className="dashboard-button">
        <Link to='/create-runsheet'>
          Create Runsheet
        </Link>
      </div>
    </main>
  );
}

export default Dashboard;
