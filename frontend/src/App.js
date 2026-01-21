import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Parallax from "./components/Parallax";
import VideoSection from "./components/VideoSection";
import HubLab from "./components/HubLab";
import Transformacion from "./components/Transformacion";
import Unete from "./components/Unete";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Parallax />
      <VideoSection />
      <HubLab />
      <Transformacion />
      <Unete />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
