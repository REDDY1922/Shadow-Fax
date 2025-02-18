import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FirstMileLogin.css";

function FirstMileLogin() {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         setError("Please enter a valid email address.");
         return;
      }

      if (password.length < 8) {
         setError("Password must be at least 8 characters long.");
         return;
      }

      setError("");
      navigate("/bookingpage");
   };

   return (
      <main className="login-page">
         <section className="login-info">
            <div className="left-container">
               <h1>Welcome to our community</h1>
               <p>We care about every worker in our worldwide supply chain... what we will not do -- and never have done - is standing still or turning a blind eye to problems in our supply chain.</p>
            </div>
            <div className="left-container-footer">
               <p>Digitization within transport and logistics means seamless service.</p>
               <h4>Complete Name</h4>
               <h6>Co-Founder, Company Name</h6>
            </div>
         </section>

         <section className="first-mile-login">
            <h1>Login as First Mile</h1>
            <p>Welcome back. Enter your credentials to access your account.</p>

            <form onSubmit={handleFormSubmit} className="firstmile-login-form">
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />

               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />

               {error && <p className="error-message" aria-live="polite">{error}</p>}

               <Link to="/forgot-password">Forgot Password?</Link>
               <input type="submit" value="Login" />
            </form>
         </section>

         <section className="last-mile-login-button">
            <Link to="/lastmilelogin" className="button-link">
               Login to Last Mile
            </Link>
         </section>
      </main>
   );
}

export default FirstMileLogin;
