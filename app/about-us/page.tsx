"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/about.css';

const page = () => {
  // About section ke liye state
  const [isAbtExpanded, setIsAbtExpanded] = useState(false);

  // Quality cards ke liye individual states (3 cards ke liye)
const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

const toggleCard = (index: number) => {
  setExpandedCards((prev) => ({
    ...prev,
    [index]: !prev[index] // Sirf current index ko toggle karega
  }));
};

  const maxChars = 60;
  const qualityData = [
    {
      title: "How To Use Battery",
      icon: "fas fa-certificate",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, numquam perspiciatis id voluptatibus qui eligendi, porro quaerat facilis mollitia ipsum amet inventore libero doloremque dolorem doloribus. Facilis tempore voluptatum iste!"
    },
    {
      title: "How To Play Video",
      icon: "fas fa-gem",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, numquam perspiciatis id voluptatibus qui eligendi, porro quaerat facilis mollitia ipsum amet inventore libero doloremque dolorem doloribus. Facilis tempore voluptatum iste!"
    },
    {
      title: "How To Use Controler",
      icon: "fas fa-shield-alt",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, numquam perspiciatis id voluptatibus qui eligendi, porro quaerat facilis mollitia ipsum amet inventore libero doloremque dolorem doloribus. Facilis tempore voluptatum iste!"
    }
  ];

  return (
    <>
      {/* --- ABOUT SECTION --- */}
      <div id="about" style={{ padding: "100px 0" }}>

      <section className="abt-section">
        <div className="abt-container">
          <div className="abt-wrapper">
            <div className="abt-image-side">
              <div className="abt-red-frame">
                <Image
                  src="/homeImg.png"
                  alt="Drone HD 4K"
                  width={500}
                  height={400}
                  className="abt-drone-img"
                />
                <div className="abt-frame-content">
                  <h2 className="abt-hd-text">HD 4K</h2>
                  <p className="abt-res-text">RESOLUTION!</p>
                </div>
              </div>
            </div>

            <div className="abt-content-side">
              <div className="abt-subtitle">
                <span className="abt-red-line"></span> ABOUT
              </div>
              <h2 className="abt-main-title">
                Specializing in Drone Services, and Aerial Photography
              </h2>

              <p className="abt-description">
                There are many variations of passages of lorem Ipsum available,
                but the majority have suffered alteration in some form...
                
                {isAbtExpanded && (
                  <span>
                    {" "}but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly.
                  </span>
                )}

                {!isAbtExpanded && (
                  <span
                    className="abt-read-link"
                    onClick={() => setIsAbtExpanded(true)}
                    style={{ color: "#e32626", cursor: "pointer", fontWeight: "bold", marginLeft: "5px" }}
                  >
                    Read More...
                  </span>
                )}
              </p>
              <div className="abt-feature-list" style={{ marginTop: "30px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUALITY SECTION --- */}
      <section className="qual-section">
        <div className="qual-container">
          <div className="qual-header">
            <div className="qual-subtitle">
              <span className="qual-line"></span> About Quality <span className="qual-line"></span>
            </div>
            <h2 className="qual-main-title">
              We're about Quality <br /> and Trust.
            </h2>
          </div>

          <div className="qual-cards-wrapper">
            {qualityData.map((card, index) => {
              const isFull = expandedCards[index];
              const displayText = isFull 
              ? card.text 
              : card.text.substring(0, maxChars) + "...";

              return (
                <div className="qual-card" key={index}>
                  <div className="qual-icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="qual-text">{displayText}</p>

                  <a 
                    href="#" 
                    className="qual-read-more" 
                    onClick={(e) => { e.preventDefault(); toggleCard(index); }}
                  >
                    {isFull ? "Read Less —" : "Read More —"}
                  </a>

                  <div className="qual-bracket-bottom"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
              </div>
    </>
  );
};

export default page;