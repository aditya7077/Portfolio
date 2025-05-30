import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from "../../Assets/Projects/expense.png";
import youtube from "../../Assets/Projects/yt.jpg";
import form from "../../Assets/Projects/form.jpeg";
import count from "../../Assets/Projects/count.png";
import responsive from "../../Assets/Projects/responsive.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="This is the React App for the expense tracker. You can keep track of your daily expenses with the app and go back to measure how well you stick to your budget."
              ghLink="https://github.com/aditya7077/Expense_Tracker"
              demoLink="https://aditya7077.github.io/Expense_Tracker/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="This project provides demonstration of front-end skills by recreating the core features and design elements that make YouTube front page so captivating."
              ghLink="https://github.com/aditya7077/Youtube_Clone"
              demoLink="https://aditya7077.github.io/Youtube_Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={responsive}
              isBlog={false}
              title="Responsive Webpage"
              description="Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen and viewports."
              ghLink="https://github.com/aditya7077/Responsive_Webpage"
              demoLink="https://aditya7077.github.io/Responsive_Webpage/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Form Validation"
              description="Input validation is the process of testing input received by the application for compliance against a standard defined within the application."
              ghLink="https://github.com/aditya7077/Form_validation/"
              demoLink="https://aditya7077.github.io/Form_validation/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={count}
              isBlog={false}
              title="Word Counter"
              description="The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words."
              ghLink="https://github.com/aditya7077/Word_Counter"
              demoLink="https://aditya7077.github.io/Word_Counter/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
