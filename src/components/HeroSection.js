import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom"; // Import Link for routing
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS

const HeroSection = () => {
  const [showPackages, setShowPackages] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const slides = [
    {
      type: 'wellness',
      image: "/images/wellness1.jpg",
      heading: "Luxury Wellness Redefined",
      paragraph: "Discover a haven of health, tranquility, and rejuvenation. Explore personalized packages tailored to your needs.",
      subText: "Escape the ordinary, find your peace, and transform your wellness.",
    },
    {
      type: 'country',
      image: "/images/country1.jpg", // Placeholder for country image
      country: "India",
      paragraph: "Experience the diversity and richness of culture while embracing wellness.",
    },
    {
      type: 'wellness',
      image: "/images/wellness2.jpg",
      heading: "Health Retreat Awaits",
      paragraph: "Embrace a journey to holistic wellness with our tranquil retreats.",
      subText: "Rejuvenate your mind, body, and soul with our exclusive health retreats.",
    },
    {
      type: 'country',
      image: "/images/country2.jpg", // Placeholder for country image
      country: "Malaysia",
      paragraph: "Breathe in the natural beauty and wellness of Malaysia.",
    },
    {
      type: 'wellness',
      image: "/images/wellness3.jpg",
      heading: "Stay Balanced, Stay Healthy",
      paragraph: "Join us for a path towards a balanced, healthy lifestyle.",
      subText: "Let our expert guides show you the way to ultimate health.",
    },
    {
      type: 'country',
      image: "/images/country3.jpg", // Placeholder for country image
      country: "Thailand",
      paragraph: "Find your balance amidst the vibrant culture and serene landscapes.",
    },
    {
      type: 'wellness',
      image: "/images/wellness4.jpg",
      heading: "Embrace a Life of Wellness",
      paragraph: "Transform your lifestyle with our expert-led programs.",
      subText: "Your journey to wellness begins here.",
    },
    {
      type: 'country',
      image: "/images/country4.jpg", // Placeholder for country image
      country: "Vietnam",
      paragraph: "Discover tranquility in Vietnam's breathtaking natural beauty.",
    },
    {
      type: 'wellness',
      image: "/images/wellness5.jpg",
      heading: "Journey Towards Wellness",
      paragraph: "Ignite your passion for health and wellness.",
      subText: "Step into a life of vitality.",
    },
    {
      type: 'country',
      image: "/images/country5.jpg", // Placeholder for country image
      country: "Indonesia",
      paragraph: "Unwind in Indonesia's beautiful resorts and wellness centers.",
    },
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
          {slides.map((slide, index) => (
            <div key={index} style={styles.carouselImageWrapper}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={styles.carouselImage}
              />
              <div style={styles.overlayText}>
                {slide.type === 'wellness' ? (
                  <>
                    <h2 style={styles.overlayHeading}>{slide.heading}</h2>
                    <p style={styles.overlayParagraph}>{slide.paragraph}</p>
                    <p style={styles.overlaySubText}>{slide.subText}</p>
                  </>
                ) : (
                  <>
                    <Link to={`/country/${slide.country.toLowerCase()}`} style={styles.countryLink}>
                      <h2 style={styles.countryOverlayHeading}>{slide.country}</h2>
                    </Link>
                    <p style={styles.countryOverlayParagraph}>{slide.paragraph}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </Carousel>

        {/* Title and Logo */}
        <div style={styles.titleContainer}>
          <div style={styles.logoContainer}>
            <img
              src="/images/images.jpg"
              alt="Wellness Logo"
              style={styles.logo}
            />
          </div>
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
                  {/* Use Links for navigations */}
                  <li style={styles.submenuItem}>
                    <Link to="/country/india" style={styles.submenuLink}>India</Link>
                  </li>
                  <li style={styles.submenuItem}>
                    <Link to="/country/malaysia" style={styles.submenuLink}>Malaysia</Link>
                  </li>
                  <li style={styles.submenuItem}>
                    <Link to="/country/thailand" style={styles.submenuLink}>Thailand</Link>
                  </li>
                  <li style={styles.submenuItem}>
                    <Link to="/country/vietnam" style={styles.submenuLink}>Vietnam</Link>
                  </li>
                  <li style={styles.submenuItem}>
                    <Link to="/country/indonesia" style={styles.submenuLink}>Indonesia</Link>
                  </li>
                </ul>
              )}
            </li>

            <li style={styles.menuItem}>About</li>
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
    textAlign: "center", // Add for responsive design
  },
  carouselImage: {
    maxWidth: "100%", // Add for responsive design
    height: "100vh",
    objectFit: "cover",
  },
  titleContainer: {
    position: "absolute",
    top: 50, // Adjusted for better alignment
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginRight: "15px",
  },
  logo: {
    width: "120px", // Enlarged logo size
    height: "auto",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontFamily: "'Playfair Display', serif",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
    color: "#fff",
    maxWidth: "700px", // Max-width added for responsive design
  },
  menuContainer: {
    position: "absolute",
    top: 200, // Adjusted for better alignment
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    background: "#001F3F", // Navy blue background
    padding: "10px 30px",
    borderRadius: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
  },
  menuList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "20px", // Adjusted for better alignment
    flexDirection: "column", // Change to column for responsive design
    alignItems: "center",
    fontFamily: "'Lora', sans-serif",
    fontSize: "1.2rem",
    color: "#fff",
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "30px", // Rounded buttons for sleekness
    transition: "background-color 0.3s ease-in-out",
    color: "#fff", // White color for menu items
    fontWeight: "bold",
    fontSize: "1.5rem", // Adjusted for better alignment
    marginBottom: "20px", // Add for spacing
  },
  submenuList: {
    listStyleType: "none",
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#222", // Darker background for the dropdown
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
    padding: "10px 15px",
    color: "#fff",
    background: "#001F3F", // Navy blue for submenu items
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    fontSize: "1.2rem", // Adjusted for better alignment
  },
  countryLink: {
    textDecoration: "none",
    color: "#fff", // Ensure the link color remains white
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    zIndex: 10,
    textAlign: "left",
    maxWidth: "400px",
  },
  overlayHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#001F3F", // Navy blue color for wellness
  },
  overlayParagraph: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#001F3F", // Navy blue color for wellness
  },
  overlaySubText: {
    fontSize: "1rem",
    marginTop: "10px",
    fontStyle: "italic",
    color: "#001F3F", // Navy blue color for wellness
  },
  countryOverlayHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff", // White color for country text
  },
  countryOverlayParagraph: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#fff", // White color for country text
  },
  mediaQueryLarge: {
    "@media (max-width: 1200px)": {
      menuContainer: {
        top: 100, // Adjusted for better alignment
      },
    },
  },
  mediaQueryMiddle: {
    "@media (max-width: 768px)": {
      menuContainer: {
        top: 100, // Adjusted for better alignment
        flexDirection: "column", // Change to column for responsive design
      },
      menuList: {
        flexDirection: "column", // Change to column for responsive design
      },
      menuItem: {
        marginBottom: "10px", // Adjusted for better alignment
      },
    },
  },
  mediaQuerySmall: {
    "@media (max-width: 576px)": {
      titleContainer: {
        top: 20, // Adjusted for better alignment
        fontSize: "1.5rem", // Adjusted for better alignment
      },
      logoContainer: {
        marginRight: 0, // Adjusted for better alignment
      },
      logo: {
        width: 60, // Adjusted for better alignment
      },
      pageTitle: {
        fontSize: "1.5rem", // Adjusted for better alignment
      },
      menuContainer: {
        top: 0, // Adjusted for better alignment
        padding: "0 20px", // Adjusted for better alignment
      },
      menuList: {
        gap: "10px", // Adjusted for better alignment
      },
      menuItem: {
        padding: "5px 10px", // Adjusted for better alignment
        fontSize: "1rem", // Adjusted for better alignment
      },
    },
    "@media (max-width: 480px)": {
      menuContainer: {
        padding: "0 10px", // Adjusted for better alignment
      },
      menuList: {
        gap: "5px", // Adjusted for better alignment
      },
      menuItem: {
        padding: "3px 5px", // Adjusted for better alignment
        fontSize: "0.9rem", // Adjusted for better alignment
      },
    },
  },
};

export default HeroSection;
