import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS

const HeroSection = () => {
  const [showPackages, setShowPackages] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const images = [
    "/images/wellness1.jpg",
    "/images/wellness2.jpg",
    "/images/wellness3.jpg",
    "/images/wellness4.jpg",
  ];

  return (
    <div>
      <div style={styles.heroContainer}>
        {/* Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={800}
          style={{ height: "100%" }}
        >
          {images.map((image, index) => (
            <div key={index} style={styles.carouselImageWrapper}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={styles.carouselImage}
              />
              {index === 0 && (
                <div style={styles.overlayText}>
                  <h2 style={styles.overlayHeading}>
                    Luxury Wellness Redefined
                  </h2>
                  <p style={styles.overlayParagraph}>
                    Discover a haven of health, tranquility, and rejuvenation.
                    Explore personalized packages tailored to your needs.
                  </p>
                </div>
              )}
              {index === 1 && (
                <div style={styles.overlayText}>
                  <h2 style={styles.overlayHeading}>Health Retreat Awaits</h2>
                  <p style={styles.overlayParagraph}>
                    Embrace a journey to holistic wellness with our tranquil
                    retreats.
                  </p>
                </div>
              )}
              {index === 2 && (
                <div style={styles.overlayText}>
                  <h2 style={styles.overlayHeading}>
                    Stay Balanced, Stay Healthy
                  </h2>
                  <p style={styles.overlayParagraph}>
                    Join us for a path towards a balanced, healthy lifestyle.
                  </p>
                </div>
              )}
            </div>
          ))}
        </Carousel>

        {/* Title */}
        <div style={styles.titleContainer}>
          <h1 style={styles.pageTitle}>Wellness Plus Health 4 All</h1>
        </div>

        {/* Menu */}
        <div style={styles.menuContainer}>
          <ul style={styles.menuList}>
            {/* Packages Menu */}
            <li
              style={styles.menuItem}
              onMouseEnter={() => setShowPackages(true)}
              onMouseLeave={() => setShowPackages(false)}
            >
              Packages
              {showPackages && (
                <ul style={{ ...styles.submenuList, ...styles.submenuListVisible }}>
                  <li style={styles.submenuItem}>Wellness Retreat</li>
                  <li style={styles.submenuItem}>Fitness Programs</li>
                  <li style={styles.submenuItem}>Yoga and Meditation</li>
                  <li style={styles.submenuItem}>Luxury Spa Treatments</li>
                </ul>
              )}
            </li>

            {/* Countries Menu */}
            <li
              style={styles.menuItem}
              onMouseEnter={() => setShowCountries(true)}
              onMouseLeave={() => setShowCountries(false)}
            >
              Countries
              {showCountries && (
                <ul style={{ ...styles.submenuList, ...styles.submenuListVisible }}>
                  <li style={styles.submenuItem}>India</li>
                  <li style={styles.submenuItem}>Malaysia</li>
                  <li style={styles.submenuItem}>Thailand</li>
                  <li style={styles.submenuItem}>Vietnam</li>
                  <li style={styles.submenuItem}>Indonesia</li>
                </ul>
              )}
            </li>

            <li style={styles.menuItem}>Dining</li>
            <li style={styles.menuItem}>Contact</li>
            <li style={styles.menuItem}>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  heroContainer: {
    position: "relative",
    height: "100vh",
    color: "#fff",
    fontFamily: "'Lora', sans-serif",
    overflow: "hidden",
  },
  carouselImageWrapper: {
    position: "relative",
  },
  carouselImage: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  titleContainer: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontFamily: "'Playfair Display', serif",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
    color: "#fff",
  },
  menuContainer: {
    position: "absolute",
    top: "100px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  menuList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontFamily: "'Lora', sans-serif",
    fontSize: "1.2rem", // Enlarged font size
    color: "#fff",
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
  },
  submenuList: {
    listStyleType: "none",
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "5px",
    display: "none",
    zIndex: 1000,
    opacity: 0,
    transform: "translateY(-10px)",
    transition: "all 0.3s ease-in-out",
  },
  submenuListVisible: {
    display: "block",
    opacity: 1,
    transform: "translateY(0)",
  },
  submenuItem: {
    padding: "10px 15px", // Enlarged padding for better visibility
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
  overlayText: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    zIndex: 10,
    textAlign: "left",
  },
  overlayHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  overlayParagraph: {
    fontSize: "1rem",
  },
};

export default HeroSection;

