import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Basketpage.css";

function Basketpage() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = (e) => {
    let input = e.target.value.toUpperCase();
    if (input.length <= 10) {
      setVehicleNumber(input);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    if (!regex.test(vehicleNumber)) {
      setError("Invalid format! Use TS09OG1234");
      return;
    }

    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 10000);
  };

  return (
    <main className="main">
      <div className="header-section">
        <h1>Welcome User, These are your Exports Information</h1>
        <p>All your booking information will be shown here</p>
      </div>

      <section className="booking-section">
        <div className="booking-div">
          <h1>Total Booked</h1>
          <Link to="/basket">10</Link>
        </div>
      </section>

      <section className="trip-section">
        <form onSubmit={handleSubmit} className="trip-form">
          <input
            type="text"
            value={vehicleNumber}
            onChange={handleChange}
            placeholder="TS09CX1234"
            className="input-field"
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="submit-button">
            Start Trip
          </button>
        </form>
      </section>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="tick-mark">✔</div>
            <h2>Trip Started!</h2>
            <p>Vehicle {vehicleNumber} is confirmed.</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Basketpage;
