import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import { Accordion, Card, Image } from "react-bootstrap";

import L_NcNewsBE from "../../assets/img/projects/NC_NewsBE.webp";
import L_NcNewsFE from "../../assets/img/projects/NC_NewsFE.webp";
import L_TechReview from "../../assets/img/projects/Tech_Review.webp";
import L_worldArt from "../../assets/img/projects/worldArt.webp";
import L_AWS_Api from "../../assets/img/projects/AWS_Gateway.webp";
import L_DynamoDb from "../../assets/img/projects/DynamoDB.webp";
import L_Lambda from "../../assets/img/projects/AWS_Lambda.webp";
import L_S3 from "../../assets/img/projects/AWS_S3.webp";
import L_Viro from "../../assets/img/projects/Viro_Media.webp";

import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="Jan, 2020"
            className="text-center"
            text="NC News Backend API"
            src={L_NcNewsBE}
            alt="NC News Backend"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An express server built
                        with a RESTful architectural style using SQL database
                        along with Postgres and knex for various endpoints. This
                        hosted database is use to interact with data that would
                        be use for my front end nc news projects.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>RESTful API</li>
                          <li>Can get articles and comments</li>
                          <li>Post comments</li>
                          <li>Delete comments</li>
                          <li>Can also up or down votes on articles</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NodeJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NodeJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git Version control
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ATCode97/nc_news"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/getGithubInfo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="March, 2020"
            className="text-center"
            text="NC News Frontend"
            src={L_NcNewsFE}
            alt="NC News Frontend"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An React web app thats
                        similar to a reddit style forum. To display information
                        from NC News Api.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real-time API calls</li>
                          <li>Does post requests</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NodeJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NodeJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git Version control
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://northcodernews2020.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ATCode97/NC-News-frontend"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="May, 2020"
            className="text-center"
            text="worldArt"
            src={L_worldArt}
            alt="worldArt"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> My final project at
                        Northcoders was produced under a three week deadline
                        during lockdown, which meant that our team of 4 needed
                        to coordinate and design remotely. To plan the project,
                        we used wireframe. Working in an agile environment, we
                        built a native react application, which could store
                        pieces of artwork into a user profile. Using augmented
                        reality, the app renders the chosen art into the user’s
                        local environment. For this project, we made use of
                        ViroMedia’s ViroReact, AWS S3, DynamoDb, Lambda, API
                        Gateway.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real-time API calls</li>
                          <li>Does post requests to backend server</li>
                          <li>Renders in real time art from museum api</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS_Api}
                                alt="AWS API Gateway"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Amazon API Gateway
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DynamoDb}
                                alt="DynamoDB"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              DynamoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Lambda}
                                alt="AWS Lambda"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS Lambda
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_S3}
                                alt="AWS S3 bucket"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS S3 Bucket
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Viro}
                                alt="ViroReactNative"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ViroReact
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git Version control
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ATCode97/worldARt"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=qnRJ6buCzzY&ab_channel=Northcoders"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="June, 2020"
            className="text-center"
            text="TechReview (Ongoing)"
            src={L_TechReview}
            alt="TechReview"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An React web app that
                        compares different front and backend libraries, their
                        ease of use and their documentations to help developers
                        decide which libraries might be most suitable for their
                        projects.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real-time API calls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NodeJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NodeJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS 3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git Version control
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/keirbetts/tech-review"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
