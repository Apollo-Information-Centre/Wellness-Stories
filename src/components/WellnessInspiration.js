import React from "react";

const WellnessInspiration = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/inspiration-bg.jpg') center/cover no-repeat",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "3.5rem",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          textShadow: "3px 3px 12px rgba(0, 0, 0, 0.7)",
          marginBottom: "1.5rem",
          color: "#ffd700", // Golden color
        }}
      >
        Wellness Inspirations
      </h2>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "'Lora', serif",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Step into a realm of stories that motivate, educate, and inspire. From
        cultivating healthy habits to embracing a holistic lifestyle, let us
        guide you on your journey to wellness.
      </p>

      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {[{
            title: "Nutrition Tips",
            content:
              "Discover healthy eating habits that nourish your body and mind, and take your wellness journey to the next level.",
          },
          {
            title: "Fitness Inspiration",
            content:
              "Explore stories of strength, determination, and perseverance to inspire your fitness goals and lifestyle changes.",
          },
          {
            title: "Mindfulness Practices",
            content:
              "Unwind with techniques that promote mental clarity, reduce stress, and nurture your soul.",
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#ffd700", // Golden color
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                fontFamily: "'Lora', serif",
                color: "#e0e0e0",
              }}
            >
              {card.content}
            </p>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "3rem",
          padding: "15px 40px",
          fontSize: "1.3rem",
          fontFamily: "'Lora', serif",
          color: "#000",
          backgroundColor: "#ffd700", // Golden color
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6c200")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffd700")}
      >
        Discover More
      </button>
    </section>
  );
};

export default WellnessInspiration;




