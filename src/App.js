import React from "react";
import { Fade } from "react-reveal";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import AboutMe from "./pages/About/AboutMe";

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
          <Container className="container-box rounded">
            <Fade duration={500}>
              <AboutMe />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
