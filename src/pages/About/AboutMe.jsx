import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Profile from "../../assets/img/profile/profile.webp";
import "./aboutme.css";
//xs and md are the two individual col

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi! I am Alistair Tsang
                <br />
                <br /> A Recent graduate from NorthCoder bootcamp. I have
                experience in JavaScript, Node.js, HTML and CSS. Also have
                experience using Express, Axios, Knex and PSQL to build backend
                servers.
                <br />
                In 2018 I graduated at Hull University reading History and
                Politic
                <br />
                <br /> <br />
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        {" "}
                        Let's Talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1W45yU2OLuNmNQ-zjyfEITbRVGvo1KS8R/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My CV
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ATCode97"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/alistair-tsang-2ba049171/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;
