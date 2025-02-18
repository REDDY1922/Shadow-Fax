import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PendingOrdersContext = createContext();

export const PendingOrdersProvider = ({ children }) => {
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders/pending-count");
        setPendingOrdersCount(response.data.count);
      } catch (error) {
        console.error("Error fetching pending orders count:", error);
      }
    };

    fetchPendingOrders();
  }, []);

  const updatePendingOrders = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/orders/increase-count");
      setPendingOrdersCount(response.data.count);
    } catch (error) {
      console.error("Error updating pending orders count:", error);
    }
  };

  return (
    <PendingOrdersContext.Provider value={{ pendingOrdersCount, updatePendingOrders }}>
      {children}
    </PendingOrdersContext.Provider>
  );
};
