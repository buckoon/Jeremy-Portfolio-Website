import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header />

      <Routes>
        <Route exact path="/" element={<Hero />} />

        <Route path="/about" element={<About />} />

        <Route path="/experience" element={<WorkExperience />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/*<Footer />*/}
    </div>
  );
}

export default App;
