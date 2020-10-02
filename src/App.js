import React from "react";
import { Fade, Slide } from "react-reveal";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import AboutMe from "./pages/About/AboutMe";
import TechStack from "./pages/TechStack/TechStack";

import "./App.css";
import Experience from "./pages/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <AboutMe />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TechStack />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Experience />
          </Slide>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade bottom duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>
    </div>
  );
};

export default App;
