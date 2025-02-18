import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LastMileLogin.css"; 

function LastMileLogin() {
   const navigate = useNavigate();
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [error , setError] = useState("");

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
      navigate('/dashboard'); 
   };

   return (
      <main className="login-page">
         <section className="login-info">
            <div className="left-container">
               <h1>Welcome to our community</h1>
               <p>We care about every worker in our worldwide supply chain... what we will not do -- and never have done - is standing still or turning a blind eye to problems in our supply chain.</p>
            </div>
            <div className="left-container-footer">
               <p>Digitization within the transport and logistics means seamless service to our customers, visibility in the supply chain.</p>
               <h4>Complete Name</h4>
               <h6>Co-Founder, Company name</h6>
            </div>
         </section>
         <section className="last-mile-login">
            <h1>Login as Last Mile</h1>
            <p>Welcome back. Enter your credentials to access your account</p>
            <form onSubmit={handleFormSubmit} className="login-form">
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
               />
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
               {error && <p className="error-message" aria-live="polite">{error}</p>}
               <Link to="/forgot-password">Forgot Password?</Link> 
               <input type="submit" value="Login" />
            </form>
         </section>
         <section className="last-mile-login-button">
            <Link to="/firstmilelogin" className="button-link">
               Login to First Mile
            </Link>
         </section>
      </main>
   );
}

export default LastMileLogin