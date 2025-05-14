import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-[#121212] w-full min-h-screen">
      <Navbar />
      <Banner />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
