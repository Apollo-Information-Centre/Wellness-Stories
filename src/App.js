import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import WellnessInspiration from "./components/WellnessInspiration";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <WellnessInspiration /> {/* Appears right after Why Choose Us */}
    </div>
  );
}

export default App;

