import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Projects from "./component/projects";
import Home from "./component/Home";
import Education from "./component/Education";
import Footer from "./component/footer";
import './styles/main.css'






function App() {
  console.log(`${process.env.PUBLIC_URL}/document/Amirhossein_Resume.pdf`);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education/:field" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
