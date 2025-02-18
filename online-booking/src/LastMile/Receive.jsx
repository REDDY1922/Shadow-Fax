import React, { useState } from "react";
import axios from "axios";
import VehicleReachedOverlay from "./VehicleReachedOverlay"; 
import "./Receive.css";

const Receive = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;

    if (!vehicleRegex.test(vehicleNumber)) {
      setError("Invalid vehicle number format. Use TS09CX1234.");
      return;
    }

    setError(""); 

    try {
      const response = await axios.get(`http://localhost:8080/api/vehicles/verify/${vehicleNumber}`);
      if (response.data) {
        setMessage("✅ Vehicle number verified!");
        setShowOverlay(true); 
      } else {
        setMessage("❌ Vehicle number does not match.");
      }
    } catch (err) {
      setMessage("⚠️ Error verifying vehicle number.");
    }
  };

  return (
    <main className="receive-main">
      <form onSubmit={handleSubmit} className="receive-form">
        <input 
          type="text" 
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
        />
        <input type="submit" value="Verify Vehicle" />
      </form>

      {error && <p className="error-message">{error}</p>} 
      {message && <p className="message">{message}</p>} 

      {showOverlay && (
        <VehicleReachedOverlay onClose={() => setShowOverlay(false)} />
      )}
    </main>
  );
};

export default Receive;
