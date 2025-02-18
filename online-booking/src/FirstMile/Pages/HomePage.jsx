import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faChartLine, faBuilding, faBox, faCheckCircle, faMedal } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, description }) => (
  <div className="card">
    <FontAwesomeIcon icon={icon} size="2x" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

function HomePage() {
  const navigate = useNavigate();
  function openLogin(){
    navigate("/firstmilelogin");
  }
  const cardData = [
    { 
      icon: faHeadset, 
      title: "Support", 
      description: "24/7 customer support for all queries and issues." 
    },
    { 
      icon: faChartLine, 
      title: "Sales", 
      description: "Boost your business with our sales-driven strategies." 
    },
    { 
      icon: faBuilding, 
      title: "OnBoarding", 
      description: "Seamless onboarding process for new users." 
    },
    { 
      icon: faBox, 
      title: "Product", 
      description: "Reliable and high-quality logistics services." 
    },
    { 
      icon: faMedal, 
      title: "Quality", 
      description: "Delivering excellence with top-notch standards." 
    },
    { 
      icon: faCheckCircle, 
      title: "Result", 
      description: "Guaranteed positive outcomes with our services." 
    },
  ];

  return (
    <main className="hero-page">
      <section className="heropage-main">
        <h1 className="homepage-heading">Fast & trusted transportation service.</h1>
        <p className="homepage-content">
          Experience seamless logistics and efficient delivery services tailored to your needs.
        </p>
        <button className="heropage-button" onClick={openLogin}>Get Started</button>
        <img src="/FirstMileImages/HeroPageimage.jpg" alt="Hero Page" className="heropage-image" />
      </section>

      <section className="heropage-section">
        <h2>Make every step user-centric</h2>
        <p>Our solutions are designed with the customer in mind.</p>
        <div className="card-container">
          {cardData.map((item, index) => (
            <Card 
               key={index} 
               icon={item.icon} 
               title={item.title} 
               description={item.description} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
