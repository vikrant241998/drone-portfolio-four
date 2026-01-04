"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/footer.css';
// React Icons
import { 
  FaLocationDot, 
  FaEnvelope, 
  FaPhone, 
  FaFacebookF, 
  FaLinkedinIn 
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="footer-main">
      <div className="footer-top-section">
        <div className="footer-container">
          
          {/* Get in Touch */}
          <div className="footer-column">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <FaLocationDot />
                <p>
                  92 Princess Road, parkvenue <br />
                  Greater London, NW18JR, UK
                </p>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope />
                <p>contact123@gmail.com</p>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <p>(+291) 912-3456-073</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-column">
            <h3 className="footer-title">Useful links</h3>
            <ul className="footer-links-list">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="footer-column">
            <h3 className="footer-title">Recent Post</h3>
            {[
              { id: 1, date: "25 May", text: "Planning approved for restoration town hall." },
              { id: 2, date: "28 Dec", text: "Planning approved for restoration town hall." },
            ].map((post) => (
              <div key={post.id} className="footer-post">
                <Image 
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600" 
                  alt="Post" 
                  width={65} 
                  height={65} 
                />
                <div className="footer-post-content">
                  <span className="footer-post-date">{post.date}</span>
                  <p>{post.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-text">
              Join our subscribers list to get the latest news, updates and
              special offers delivered directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div className="footer-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                />
                <button type="submit" className="footer-subscribe-btn">
                  Subscribe
                </button>
              </div>
              {error && <span style={{ color: 'red', fontSize: '12px', marginTop: '5px', display: 'block' }}>{error}</span>}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-container footer-bottom-flex">
          <div className="footer-logo">
            <span className="footer-bracket">[</span>
            <span className="footer-logo-text">DRONZA</span>
            <span className="footer-bracket">]</span>
          </div>
          <div className="footer-policy-links">
            <Link href="/terms">Terms & Condition</Link> / 
            <Link href="/privacy">Privacy Policy</Link> /
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="footer-social-icons">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaXTwitter /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className="footer-copyright-text">
        © 2025 Your Company. Designed By{" "}
        <span className="footer-red-text">Thewebmax</span>
      </div>
    </footer>
  );
}