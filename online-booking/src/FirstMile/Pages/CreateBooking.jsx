import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barcode from "react-barcode";
import "./Createbooking.css";

export default function CreateBooking() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    noOfGoods: "",
    amount: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateLRNumber = () => {
    return `HYD${Math.floor(10000 + Math.random() * 90000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lrNumber = generateLRNumber();

    const bookingDetails = { ...formData, lrNumber };

    navigate("/printpage", { state: bookingDetails });
  };

  return (
    <main className="booking-page-container">
      <section className="booking-info">
        <div className="left-container">
          <h1>Welcome to Our Community</h1>
          <p>
            We care about every worker in our worldwide supply chain. What we will not do—and never have done—is stand still or turn a blind eye to problems in our supply chain.
          </p>
          <div className="left-container-footer">
            <p>
              Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain.
            </p>
            <h4>Shadowfax</h4>
            <h6>Sai , Siddipet Transport Company</h6>
          </div>
        </div>
      </section>
      <section className="form-section">
        <h1>Create a Booking</h1>
        <form className="create-booking-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your Name" />

          <label>Contact Number</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required placeholder="Enter Contact Number" />

          <label>Number of Goods</label>
          <input type="number" name="noOfGoods" value={formData.noOfGoods} onChange={handleInputChange} required placeholder="Enter Number of Goods" />

          <label>Total Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required placeholder="Enter Amount" />

          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
}