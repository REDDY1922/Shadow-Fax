import React, { useState } from "react";
import "./ForgotPassword.css";

const SuccessOverlay = ({ onClose }) => (
  <div className="overlay">
    <div className="overlay-content">
      <h2>Password Reset Successful</h2>
      <p>You can now continue to log in with your new password.</p>
      <button onClick={onClose}>Go to Login</button>
    </div>
  </div>
);

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess(true);
  };

  return (
    <main className="reset-password-page">
      <section className="login-info">
        <div className="left-container">
          <h1>Welcome to our community</h1>
          <p>
            We care about every worker in our worldwide supply chain... what we will not do—and never have done—is stand still or turn a blind eye to problems in our supply chain.
          </p>
        </div>
        <div className="left-container-footer">
          <p>Digitization within transport and logistics means seamless service to our customers and visibility in the supply chain.</p>
          <h4>Shadowfax</h4>
          <h6>Sai, Siddipet Transport Company</h6>
        </div>
      </section>

      <section className="password-reset">
        <h1>Reset Here</h1>
        <p>Please enter your email address to receive password reset instructions.</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Enter New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      {success && <SuccessOverlay onClose={() => (window.location.href = "/firstmilelogin")} />}
    </main>
  );
};

export default ForgotPassword;
