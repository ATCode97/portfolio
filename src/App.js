import React from "react";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleMessage from "./components/TitleMessage/TitleMessage";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
};

export default App;
