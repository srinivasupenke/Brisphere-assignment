import React, { useState } from "react";
import "../assets/styles/BookingForm.css";
function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Booking created:", data));
  };

  return (
    <section id="book">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <label>Check-In Date</label>
        <input type="date" name="checkIn" onChange={handleChange} required />

        <label>Check-Out Date</label>
        <input type="date" name="checkOut" onChange={handleChange} required />

        <label>Guests</label>
        <input type="number" name="guests" min="1" onChange={handleChange} />

        <label>Rooms</label>
        <input type="number" name="rooms" min="1" onChange={handleChange} />

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;
