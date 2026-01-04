import React from 'react';
import Image from 'next/image';
import './styles/home.css';
import homeImg from '../public/homeImg.png'
const page = () => {
  return (
    <>
   <section className="hero">
      <div className="overlay"></div>
      <div className="content-box">
        <div className="red-bracket left"></div>
        <h1 className="hero-heading">
          Ultraportable Drone for <br />
          the best Video
        </h1>
        <div className="red-bracket right"></div>
      </div>
      <div className="drone-container">
        <Image 
          src={homeImg} 
          alt="Drone" 
          width={800} 
          height={500} 
          className="floating-drone"
          priority 
        />
      </div>
    </section>
    </>
  );
};

export default page;
