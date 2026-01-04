"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import '../styles/contact.css';

// TypeScript Interface for Form Data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Interface for Errors
interface FormErrors {
  [key: string]: string;
}

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Real-time input handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Real-time error removal logic
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newErrors: FormErrors = {};
    let isFormValid = true;

    // Validation Logic
    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof FormData].trim() === "") {
        newErrors[key] = "This field is required";
        isFormValid = false;
      }
    });

    setErrors(newErrors);

    if (isFormValid) {
      alert("Success! Your message has been sent successfully.");
      // Form Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="cont-main-container" id="contact" style={{ padding: "100px 0" }}>
      {/* Map Section */}
      <div className="cont-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.028448897579!2d-118.2571216!3d34.0688827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c657a7f43371%3A0x367f3798544e45!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="cont-flex-wrapper" style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        {/* Info Area */}
        <div className="cont-info-area" style={{ flex: 1 }}>
          <h2 className="cont-heading">Contact Info..</h2>
          <div className="cont-border-card">
            <div className="cont-info-item">
              <strong>Phone number</strong>
              <p>(+291) 0987 654 321</p>
            </div>
            <div className="cont-info-item">
              <strong>Email address</strong>
              <p>thewebmax@gmail.com</p>
            </div>
            <div className="cont-info-item">
              <strong>Address info</strong>
              <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
            </div>
            <div className="cont-info-item">
              <strong>Opening Hours</strong>
              <p>Mon-Fri: 9 am – 6 pm</p>
              <p>Saturday: 9 am – 4 pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="cont-form-area" style={{ flex: 1 }}>
          <h2 className="cont-heading">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="cont-form-group">
            {[
              { id: "name", type: "text", placeholder: "Name" },
              { id: "email", type: "email", placeholder: "Email" },
              { id: "phone", type: "tel", placeholder: "Phone" },
              { id: "subject", type: "text", placeholder: "Subject" },
            ].map((field) => (
              <div key={field.id} className="cont-input-wrapper" style={{ marginBottom: "1rem" }}>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="cont-input-field"
                  value={formData[field.id as keyof FormData]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: errors[field.id] ? "1px solid #d93025" : "1px solid #ccc",
                  }}
                />
                {errors[field.id] && (
                  <span className="cont-error-msg" style={{ color: "#d93025", fontSize: "12px" }}>
                    {errors[field.id]}
                  </span>
                )}
              </div>
            ))}

            <div className="cont-input-wrapper" style={{ marginBottom: "1rem" }}>
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                className="cont-input-field"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: errors.message ? "1px solid #d93025" : "1px solid #ccc",
                }}
              ></textarea>
              {errors.message && (
                <span className="cont-error-msg" style={{ color: "#d93025", fontSize: "12px" }}>
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="cont-submit-btn" style={{ padding: "10px 20px", cursor: "pointer" }}>
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;