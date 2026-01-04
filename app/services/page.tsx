"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/services.css";

const page = () => {
  // Har card ki expand state track karne ke liye object state
  const [expandedServices, setExpandedServices] = useState<
    Record<number, boolean>
  >({});

  const toggleService = (index: number) => {
    setExpandedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const maxChars = 70;

  const servicesData = [
    {
      title: "Professional Photography",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
    {
      title: "Aerial Surveillance",
      img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=880",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
    {
      title: "Customized Commands",
      img: "https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?q=80&w=1332",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
    {
      title: "Industrial Inspection",
      img: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=600",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
    {
      title: "Drone Delivery",
      img: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=600",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
    {
      title: "Motion Tracking",
      img: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?q=80&w=600",
      text: "Our team has decades of film and tech experience. We know how to deliver amazing results every time. Our workflow focuses on precision, creativity, and client satisfaction to ensure premium visual output for every project.",
    },
  ];

  return (
    <section className="srv-section" id="services" style={{ padding: "100px 0" }}>
      <div className="srv-container">
        <div className="srv-header">
          <div className="srv-left">
            <div className="srv-subtitle">
              <span className="srv-red-line"></span> All Services
            </div>
            <h2 className="srv-main-title">Explore Our Main Services</h2>
          </div>
          <div className="srv-right">
            <p>
              We provide expert inspection services for your organization's
              mission critical assets using drone technology.
            </p>
          </div>
        </div>

        <div className="srv-grid">
          {servicesData.map((item, index) => {
            const isFull = expandedServices[index];
            const displayText = isFull
              ? item.text
              : item.text.substring(0, maxChars) + "...";

            return (
              <div className="srv-item" key={index}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                <div className="srv-overlay">
                  <div className="srv-hover-box">
                    <h3>{item.title}</h3>
                    <p className="srv-text">{displayText}</p>
                    <a
                      href="#"
                      className="srv-read-more"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleService(index);
                      }}
                    >
                      {isFull ? "Read Less —" : "Read More —"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
