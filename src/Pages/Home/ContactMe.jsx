import "../../styles/contact.css";
import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptedTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-form-container">
        <div className="form-content">
          <div>
            <p className="sub-title">Get In Touch</p>
            <h2>Contact Me</h2>
            <p className="text-lg">
              Thank you for reaching out to me. I appreciate your interest and will get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <label htmlFor="first-name" className="contact-label">
                <span className="text-md">First Name</span>
                <input
                  type="text"
                  className="contact-input text-md"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="last-name" className="contact-label">
                <span className="text-md">Last Name</span>
                <input
                  type="text"
                  className="contact-input text-md"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="email" className="contact-label">
                <span className="text-md">Email</span>
                <input
                  type="email"
                  className="contact-input text-md"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="phone-number" className="contact-label">
                <span className="text-md">Phone Number</span>
                <input
                  type="tel"
                  className="contact-input text-md"
                  name="phoneNumber"
                  id="phone-number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label htmlFor="message" className="contact-label">
              <span className="text-md">Message</span>
              <textarea
                className="contact-input text-md"
                id="message"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
              />
            </label>
            <label htmlFor="checkbox" className="checkbox-label">
              <input
                type="checkbox"
                name="acceptedTerms"
                id="checkbox"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
              />
              <span className="text-sm">I accept the terms</span>
            </label>
            <div>
              <button type="submit" className="btn btn-primary contact-form-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-image"></div>
    </section>
  );
}

export default ContactMe;
