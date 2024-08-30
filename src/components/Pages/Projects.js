import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../others/Particle";
import quiz from "../assets/Quiz_Logo.png";
import eztruck from "../assets/app-logo.png";
import house from "../assets/house.svg";
import Whatsapp from "../assets/whatsapp.png";
import Balloon from "../assets/ballon.png";
import glosent from "../assets/glosent.png";

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
              imgPath={quiz}
              // isBlog={false}
              title="Quiz App"
              description="The React Quiz App is an engaging and interactive web application designed to test users' knowledge on various topics through a fun and educational quiz experience. Built using React.js, this project is a dynamic and user-friendly quiz platform that provides an enjoyable way for users to learn and challenge themselves.

"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={eztruck}
              // isBlog={false}
              title="ezTruck App"
              description="This is a logistick mobile App. It is usedful for them who has companies of transporting.
               I have worked on frontend in this project .I created this project using React native library,
                implemented firebase and react native map etc"
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              // isBlog={false}
              title="House Rent App"
              description="Developed a cross-platform mobile application for house rentals using React Native.
               The app includes a secure authentication system implemented with Firebase Authentication,
                allowing users to sign up, log in, and manage their accounts.
                 The app features a user-friendly interface where property owners can list their rentals,
                  and potential tenants can browse and filter properties based on their preferences. This App is not dynamically implemented"
              ghLink="https://github.com/Ritishree-12/rent-app"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whatsapp}
              // isBlog={false}
              title="Whatsapp Clone"
              description="Designed and developed the user interface and static page of a WhatsApp clone using React.js. 
            The project focuses on replicating the visual layout and design elements of the popular messaging app,
             including chat windows, contact lists, and group chats and Firebase Authentication. 
             This static implementation serves as a foundation for future development,
              demonstrating proficiency in React.js, CSS, and responsive design principles.
             The project highlights my ability to create visually appealing and user-friendly interfaces."
            ghLink="https://github.com/Ritishree-12/whatsapp-clone"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={Balloon}
            // isBlog={false}
            title="Ecommerce"
           description="I developed a static e-commerce website focused on party decorations, 
           offering a seamless and user-friendly shopping experience. The site allows customers to browse,
            search, and purchase a wide variety of party supplies and decorations,
            from balloons and banners to tableware and themed sets.
            I have created this website using react js ,javascript and css"
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={glosent}
            // isBlog={false}
            title="Glosent"
             description="This is a employee management mobile application with fully functionality.where employee can manage their daily accommodation, transportation and Attendance. I created this application using React native, firbase for authentication and notification message"
            // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
