import React, { useState } from "react";
import Navbar from './../Navbar';
import "./Tickets.css";
import useFadeIn from './../hooks/UseFadeIn';
import { useNavigate } from "react-router-dom";

function Tickets() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    tickets: 1,
    email: "",
    date: "",
  });
  const [warning, setWarning] = useState("");
  const addToRefs = useFadeIn();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWarning("This service is currently unavailable");
    setTimeout(() => {
      navigate("/");
    }, 5000); // Redirect after 10 seconds
  };

  const totalCost = formData.tickets * 10; // 10 AZN per ticket

  return (
    <div className="Tickets">
      <Navbar />
      <div className="tickets-header">
        <h1 className="h__catorze">Purchase Tickets</h1>
      </div>
      <div className="tickets-form fadable" ref={addToRefs}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tickets">Number of Tickets</label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              min="1"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Select Event</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <p className="p__catorze">
              Total Cost: {totalCost} AZN ({formData.tickets} ticket
              {formData.tickets > 1 ? "s" : ""} x 10 AZN)
            </p>
          </div> */}
          <button type="submit" className="button button-tickets">
            Proceed to Payment
          </button>
          {warning && <p className="warning">{warning}</p>}
        </form>
      </div>
    </div>
  );
}

export default Tickets;