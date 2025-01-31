import React from "react";

const Blog = () => {
  // ... Same initial data ...

  return (
    <div style={styles.blogContainer}>
      {/* Header */}
      <h2 style={styles.blogTitle}>OUR BLOG</h2>
      <p style={styles.blogDescription}>
        Explore inspiring stories, wellness insights, and unforgettable moments from our retreat.
      </p>

      {/* Hero Blog Post */}
      <div style={styles.heroSection}>
        <img src={mainPost.image} alt={mainPost.title} style={styles.heroImage} />
        <div style={styles.heroContent}>
          <h3 style={styles.heroTitle}>{mainPost.title}</h3>
          <p style={styles.heroDate}>{mainPost.date}</p>
          <p style={styles.heroDescription}>{mainPost.description}</p>
          <button style={styles.heroButton} className="hero-button">
            Take a Virtual Tour
          </button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div style={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.blogCard} className="blog-card">
            <img
              src={post.image}
              alt={post.title}
              style={styles.blogImage}
              className="blog-image"
            />
            <div style={styles.blogContent}>
              <h3 style={styles.blogPostTitle}>{post.title}</h3>
              <p style={styles.blogDate}>{post.date}</p>
              <p style={styles.blogText}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <h2 style={{ ...styles.blogTitle, marginTop: "50px" }}>OUR GALLERY</h2>
      <div style={styles.galleryContainer}>
        {galleryImages.map((image, index) => (
          <div key={index} style={{ ...styles.galleryItem, animationDelay: `${index * 0.1}s` }} className="galleryItem">
            <img 
              src={image.src} 
              alt={`Gallery Image ${index + 1}`} 
              style={styles.galleryImage} 
              loading="lazy" 
              className="galleryImage"
            />
            <p style={styles.galleryCaption}>{image.caption}</p>
          </div>
        ))}
      </div>

      {/* External CSS for animations */}
      <style>
        {`
          .hero-button:hover {
            background-color: #0A3D62;
            transform: scale(1.05);
          }

          .blog-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          }

          .blog-image:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease-in-out;
          }

          /* Gallery Animation */
          .galleryImage {
            transition: transform 0.3s ease-in-out;
            border-radius: 10px;
          }

          .galleryItem {
            opacity: 0;
            animation: slideIn 0.5s forwards;
          }

          @keyframes slideIn {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .blog-grid {
              flex-direction: column;
              align-items: center;
            }

            .blogCard {
              width: 100%; // Full width on smaller screens
            }

            .heroSection {
              flex-direction: column; // Stack on smaller screens
            }

            .heroImage {
              width: 100%; // Full width for the image
              height: auto; // Keep aspect ratio
            }

            .heroContent {
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .blogTitle {
              fontSize: 32px; // Smaller title
            }

            .blogDescription {
              fontSize: 16px; // Smaller description text
            }

            .blogText {
              fontSize: 14px; // Smaller blog text
            }

            .galleryContainer {
              grid-template-columns: repeat(2, 1fr); // Reduce to two columns
            }
          }

          @media (max-width: 480px) {
            .blogTitle {
              fontSize: 28px; // Smaller title for mobile
            }

            .heroButton {
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

// CSS Inside JS
const styles = {
  blogContainer: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 0",
    fontFamily: "'Lora', serif",
    background: "linear-gradient(135deg, #fff 30%, #e8f8f5 70%)",
    position: "relative",
    overflow: "hidden",
  },
  blogTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#0A3D62",
    textAlign: "left",
    marginBottom: "15px",
    fontFamily: "'Playfair Display', serif",
    borderLeft: "6px solid #F76C0D",
    paddingLeft: "12px",
  },
  blogDescription: {
    fontSize: "18px",
    color: "#555",
    textAlign: "left",
    maxWidth: "600px",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  heroSection: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "50px",
    backgroundColor: "#E8F8F5",
    padding: "25px",
    borderRadius: "20px",
    transition: "0.3s",
  },
  heroImage: {
    width: "50%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  },
  heroContent: {
    width: "50%",
  },
  heroTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0A3D62",
    marginBottom: "10px",
    fontFamily: "'Playfair Display', serif",
  },
  heroDate: {
    fontSize: "15px",
    color: "#888",
    marginBottom: "10px",
  },
  heroDescription: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  heroButton: {
    backgroundColor: "#F76C0D",
    color: "white",
    padding: "14px 28px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  },
  blogGrid: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  blogCard: {
    width: "32%",
    background: "white",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "0.3s",
  },
  blogImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "0.3s",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  blogContent: {
    padding: "20px",
  },
  blogPostTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0A3D62",
    marginBottom: "5px",
    fontFamily: "'Playfair Display', serif",
  },
  blogDate: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  blogText: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.5",
  },
  galleryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "30px",
  },
  galleryItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  galleryImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s",
    borderRadius: "10px",
  },
  galleryCaption: {
    textAlign: "center",
    fontSize: "16px",
    color: "#444",
    marginTop: "10px",
  },
};

export default Blog;