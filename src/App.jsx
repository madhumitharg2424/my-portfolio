import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import MouseFollower from "./components/MouseFollower";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Custom animated cursor */}
      <MouseFollower />

      {/* Animate between loading and portfolio */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" onFinish={() => setIsLoading(false)} />
        ) : (
          <div key="portfolio">
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Achievements />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
