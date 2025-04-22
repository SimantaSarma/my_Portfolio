import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simanta Sarma </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I am currently Learning MERN Stack.
            <br />
            I am pursuing my B.Tech in Computer Science and Engineering from Gauhati University Institude of science and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be Unstoppable!"{" "}
          </p>
          <footer className="blockquote-footer">Simanta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
