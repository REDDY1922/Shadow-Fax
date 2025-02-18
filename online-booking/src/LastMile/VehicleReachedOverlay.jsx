import React from "react";
import "./VehicleReachedOverlay.css"; 

const VehicleReachedOverlay = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>🚚 Vehicle Reached Safely</h2>
        <div className="lorry-animation">
          <img src="/path-to-your-lorry-animation.gif" alt="Lorry Animation" />
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VehicleReachedOverlay;
