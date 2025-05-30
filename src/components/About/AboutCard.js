import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Agrahari </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I work as a Full Stack Developer Intern at Curos in Prayagraj, Uttar Pradesh, where I apply my skills in the MERN stack to develop real-world applications. I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering at IIIT Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad."{" "}
          </p>
          <footer className="blockquote-footer">Cory House</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
