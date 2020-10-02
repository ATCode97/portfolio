import React from "react";
import "./experience.css";

import { Jumbotron, Card, Container } from "react-bootstrap";

import L_NC from "../../assets/img/experience/nc_logo.svg";
import L_Mitie from "../../assets/img/experience/mitie.webp";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_NC}
                alt="Northcoder logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Northcoder</Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  <strong>Role:</strong> Trainee Full Stack Developer
                  <br />
                  <strong>Description:</strong> I successfully completed an
                  industry led curriculum for a career in the software industry.
                  During the course, I learnt industry best practices including
                  git version control, TDD and pair programming. I have built
                  and developed a backend server following the MVC framework,
                  and I am confident in Express, Axios, Knex and PSQL. I
                  developed and built web applications using React and used CSS
                  and bootstrap to design and style the apps.
                  <br />
                  <strong>Technology:</strong> Javascript, React, ReactJs
                  Express, SQL, PSQL, Axios, Knex
                  <br />
                  <strong>Duration:</strong> December 2019 - May 2020
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <br />
        <Container>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_Mitie}
                alt="Mitie logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Mitie, Engineering Service
                </Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  <strong>Role:</strong> LBG Back Log Admin
                  <br />
                  <strong>Description:</strong> I was responsible for contacting
                  and communicating with external contractors and internal
                  engineers to update and track the status of current projects.
                  Role required strong communication skills, tact and
                  persistence. Through working in a group, I also demonstrated
                  strong teamwork and interpersonal skills.
                  <br />
                  <br />
                  <strong>Duration:</strong> December 2018 – March 2019
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
