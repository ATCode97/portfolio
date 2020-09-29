import React from "react";
import "./techstack.css";

import { Card, CardDeck, Col, Row, Image } from "react-bootstrap";

const TechStack = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around"></Row>
      </CardDeck>
    </div>
  );
};

export default TechStack;
