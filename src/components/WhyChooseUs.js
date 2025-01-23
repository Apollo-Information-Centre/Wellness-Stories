import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include carousel styles

const WhyChooseUs = () => {
  return (
    <div>
      {/* Add Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Why Choose Us Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "50px 20px",
          background: "linear-gradient(to bottom, #141414, #000)",
          color: "#fff",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Text Box */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          <h2
            style={{
              color: "#FFC107",
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "20px",
            }}
          >
            Why Choose Us
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              fontFamily: "'Lora', serif",
            }}
          >
            Experience unparalleled luxury and personalized care that elevates
            your wellness journey. Our unique services blend innovation with
            tradition to provide you with a holistic approach to health and
            well-being.
          </p>
        </div>

        {/* Sliding Images */}
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
            animation: "slideIn 2s ease-in-out",
          }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
          >
            <div style={{ position: "relative" }}>
              <img
                src="/images/why1.jpg"
                alt="Exclusive Services"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Exclusive Services
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/images/why2.jpg"
                alt="Expert Care"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Expert Care
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/images/why3.jpg"
                alt="Personalized Attention"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Personalized Attention
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Wellness Packages Section */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh", // Ensure enough space
          color: "#fff",
          fontFamily: "'Lora', serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "url('/images/wellness-bg.jpg') no-repeat center center/cover",
          padding: "50px 20px",
          gap: "20px",
        }}
      >
        {/* Text Content */}
        <div
          style={{
            flex: 1,
            background: "rgba(0, 0, 0, 0.6)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              color: "#FFC107",
              marginBottom: "20px",
            }}
          >
            Wellness Packages
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              fontFamily: "'Lora', serif",
            }}
          >
            Discover tailor-made wellness experiences, including yoga retreats,
            spa therapies, and detox plans, designed to rejuvenate and restore
            balance in your life.
          </p>
        </div>

        {/* Sliding Boxes */}
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
            animation: "slideIn 2s ease-in-out",
          }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
          >
            <div style={{ position: "relative" }}>
              <img
                src="/images/package1.jpg"
                alt="Yoga Retreats"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Retreats
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/images/package2.jpg"
                alt="Spa Therapies"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Therapies
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/images/package3.jpg"
                alt="Detox Plans"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontFamily: "'Lora', serif",
                }}
              >
                Detox Plans
              </p>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;