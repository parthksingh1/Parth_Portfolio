import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineBulb } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Parth Kumar Singh</span> from <span className="purple">Vadodara, India</span>. Currently a second-year Computer Science and Engineering student at IIITDM Jabalpur.
          </p>
          <p style={{ textAlign: "justify" }}>
            Passionate about full-stack development and competitive programming. Love solving problems with code and exploring new technologies.
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineBulb /> Tech Blogging
            </li>
            <li className="about-activity">
              <AiOutlineBulb /> Exploring New Tech
            </li>
            <li className="about-activity">
              <AiOutlineBulb /> Open Source Collaboration
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Parth Kumar Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
