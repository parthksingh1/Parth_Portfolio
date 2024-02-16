import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { color } from "framer-motion";

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
              imgPath={chatify}
              isBlog={false}
              title="PeerConnect"
              description="Real-time Communication Platform Developed a full-stack real-time communication platform for college clubs and groups.Features Integrated Socket.io for messaging, WebRTC for audio/video calls, and @tanstack/query for efficient
              message loading."
              ghLink=""
              demoLink="https://peerconnect-1.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="StreamHub"
              description="Modern Streaming Platform Leading the development of StreamHub, a modern streaming platform inspired by Twitch,Key Features Real-time chat, live viewer count, and a dynamic streamer dashboard for enhanced engagement."
              ghLink=""
              demoLink="https://streamhub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Companion"
              description="The project aims to create an advanced SaaS AI Companion using Next.js 13. It leverages cutting-edge technologies for memory retention and user authentication, ensuring a seamless and intuitive experience."
              ghLink=""
              demoLink="https://ai-companion.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Notion"
              description="I developed a customized productivity tool using Notion, empowering users with seamless organization, collaboration, and task management capabilities tailored to their specific needs and workflows"
              ghLink=""
              demoLink="https://www.notion.so/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="LMS"
              description="My LMS (Learning Management System) project facilitates seamless administration, delivery, and tracking of educational content, fostering interactive learning experiences for students and streamlined management for educators."
              ghLink=""
              demoLink="https"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Trello"
              description="My Trello project harnesses the power of intuitive task management, offering a dynamic platform for organizing projects, collaborating with teams, and maximizing productivity through customizable workflows and visual boards."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
