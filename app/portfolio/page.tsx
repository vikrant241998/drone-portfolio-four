"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/portfolio.css"; // Normal CSS import

// TypeScript interface for data
interface GalleryItem {
  id: number;
  category: "nature" | "landscape" | "outdoors";
  src: string;
  title: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, category: "nature", src: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?q=80&w=600", title: "Forest Drone View" },
  { id: 2, category: "landscape", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", title: "Mountain Range" },
  { id: 3, category: "outdoors", src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e", title: "City Skyline" },
  { id: 4, category: "nature", src: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=600", title: "Green Fields" },
  { id: 5, category: "outdoors", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", title: "Desert Drone" },
  { id: 6, category: "landscape", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", title: "Lake View" },
];

const DroneGallery = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = filter === "all" 
    ? galleryData 
    : galleryData.filter((item) => item.category === filter);

  const categories = ["all", "nature", "outdoors", "landscape"];

  return (
    <section className="gallery-section" id="portfolio" style={{ padding: "100px 0" }}>
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item">
            {/* Next.js Image Component */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            <div className="hover-overlay">
              <span className="category-tag">{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DroneGallery;