import React from "react";
import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import Footer from "../components/Footer";
import "./CSS/HomePage.css";
import ladakh_image from "../assets/images/ladakh.png.jpg";
import insta_icon from "../assets/images/instagram_icon.png";
import whatsapp_icon from "../assets/images/whatsapp_icon.png";
import Discover from "../components/Discover";

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      <div className="home-page-container">
        <div className="home-page-left">
          <h1>Work from ladakh</h1>
          <p>India's first true digital tourism ecosystem</p>
          <div>
            <img src={insta_icon} alt="Insta_icon" />
            <img src={whatsapp_icon} alt="whatsapp_icon" />
          </div>
        </div>
        <div className="home-page-right">
          <img src={ladakh_image} alt="ladakh_image" />
        </div>
      </div>

      <Discover />
      <ServiceList />

      <Footer />
    </div>
  );
}

export default HomePage;
