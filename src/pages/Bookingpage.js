// src/HotelBooking.js
import React, { useState } from "react";

import "./CSS/Bookingpage.css";
import Header from "../components/Header";
import check_icon from "../assets/images/check.png";
import Footer from "../components/Footer";

const HotelBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: 1,
    children: 0,
    rooms: 1,
    checkInDate: "",
    checkOutDate: "",
  });
  const [error, setError] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBooking = () => {
    const today = new Date().toISOString().split("T")[0];
    const { checkInDate, checkOutDate } = formData;

    if (checkInDate < today || checkOutDate < today) {
      setError("Please Enter the Details .");
    } else if (checkInDate >= checkOutDate) {
      setError("Check-out date must be after the check-in date.");
    } else {
      setError("");
      setBookingConfirmed(true);
    }
  };

  if (bookingConfirmed) {
    return (
      <>
        <Header />
        <div className="booking-success">
          <div className="confirmation-card">
            <div className="booking-details">
              <div className="details-one ">
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  {formData.adults} Adult(s) & {formData.children} Child(ren)
                </p>
              </div>
              <hr className="vl" />
              <hr className="hr" />
              <div className="details-two">
                <img src={check_icon} alt="check-icon" />
                <div>
                  <h3>Order Complete</h3>
                  <p>
                    Have questions? <p>contact us</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-check-details">
            <div className="dates">
              <p> Check-In:</p>
              <p>
                <strong>{formData.checkInDate}</strong>
              </p>
            </div>
            <hr className="vl" />
            <div className="dates">
              <p> Check-Out:</p>
              <p>
                <strong>{formData.checkOutDate}</strong>
              </p>
            </div>
            <hr className="vl" />
            <div className="dates">
              <p>Rooms: </p>
              <p>
                <strong> {formData.rooms}</strong>
              </p>
            </div>

            <button className="total-amount">₹12,430</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="hotel-booking">
        <h2>Book Your Stay</h2>

        <div className="form">
          <div className="forminput-containerone">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="forminput-containertwo">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="+91-7666483933"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group details">
              <label>Adults: </label>
              <input
                type="number"
                name="adults"
                min="1"
                value={formData.adults}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group details">
              <label>Children: </label>
              <input
                type="number"
                name="children"
                min="0"
                value={formData.children}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group details">
              <label>Rooms</label>
              <input
                type="number"
                name="rooms"
                min="1"
                value={formData.rooms}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="forminput-containerone">
            <div className="form-group">
              <label>Check-In Date</label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Check-Out Date</label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {error && <p className="error">{error}</p>}
          <div className="button-container">
            <button onClick={handleBooking} className="book-button">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HotelBooking;
