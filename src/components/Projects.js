import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/projek1.png";
import projImg2 from "../assets/img/projek2.png";
import projImg3 from "../assets/img/projek3.png";
import projImg4 from "../assets/img/projek4.png";
import projImg5 from "../assets/img/projek5.png";
import certificate1 from "../assets/img/certi-1.png";
import certificate2 from "../assets/img/certi-2.png";
import certificate3 from "../assets/img/certi-3.png";
import certificate4 from "../assets/img/certi-4.png";
import certificate5 from "../assets/img/certi-5.png";
import certificate6 from "../assets/img/certi-6.png";
import certificate62 from "../assets/img/certi-6.2.png";
import certificate63 from "../assets/img/certi-6.3.png";
import certificate64 from "../assets/img/certi-6.4.png";
import certificate65 from "../assets/img/certi-6.5.png";
import certificate7 from "../assets/img/certi-7.png";
import certificate8 from "../assets/img/certi-8.png";
import certificate9 from "../assets/img/certi-9.png";
import certificate10 from "../assets/img/certi-10.png";
import certificate11 from "../assets/img/certi-11.png";
import certificate12 from "../assets/img/certi-12.png";
import certificate13 from "../assets/img/certi-13.png";
import certificate14 from "../assets/img/certi-14.png";
import certificate15 from "../assets/img/certi-15.png";
import certificate16 from "../assets/img/certi-16.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Mori AI",
      description: "Development & Design",
      imgUrl: projImg1,
      githubUrl: "https://github.com/ymorii/ymoriai-react",
      demoUrl: "https://moriai.example.com",
    },
    {
      title: "Portfolio Website",
      description: "Development & Design",
      imgUrl: projImg2,
      githubUrl: "https://github.com/ymorii/portfolio",
      demoUrl: "#",
    },
    {
      title: "Menu Digital Warung Bakso Putra Solo",
      description: "Development & Design",
      imgUrl: projImg3,
      githubUrl: "https://github.com/ymoricode/menudigital-web-app",
      demoUrl: "https://github.com/ymoricode/menudigital-web-app",
    },
    {
      title: "Noteflow",
      description: "Development & Design",
      imgUrl: projImg4,
      githubUrl: "https://github.com/ymoricode/noteflow-app",
      demoUrl: "https://github.com/ymoricode/noteflow-app",
    },
        {
      title: "Plantcare AI",
      description: "Development & Design",
      imgUrl: projImg5,
      githubUrl: "https://github.com/ymoricode/Plantcare-ai",
      demoUrl: "https://github.com/ymoricode/Plantcare-ai",
    },
  ];

  const certificates = [
    { title: "React Certification", description: "Issued by Dicoding", imgUrl: certificate1 },
    { title: "Fundamental Front-End Web Development", description: "Issued by Dicoding", imgUrl: certificate16 },
    { title: "Javascript Certification", description: "Issued by Dicoding", imgUrl: certificate2 },
    { title: "Front-End Certification", description: "Issued by Dicoding", imgUrl: certificate3 },
    { title: "Web Dev Basic Certification", description: "Issued by Dicoding", imgUrl: certificate4 },
    { title: "Python Certification", description: "Issued by Dicoding", imgUrl: certificate5 },
    { title: "Machine Learning Certification", description: "Issued by Dicoding", imgUrl: certificate6 },
    { title: "Belajar Dasar SQL", description: "Issued by Dicoding", imgUrl: certificate62 },
    { title: "Belajar Dasar Data Science", description: "Issued by Dicoding", imgUrl: certificate63 },
    { title: "Belajar Dasar Visualisasi Data", description: "Issued by Dicoding", imgUrl: certificate64 },
    { title: "Belajar Dasar AI", description: "Issued by Dicoding", imgUrl: certificate65 },
    { title: "Responsive Web Design", description: "Issued by freeCodeCamp", imgUrl: certificate7 },
    { title: "Front-End Dev Libraries", description: "Issued by freeCodeCamp", imgUrl: certificate8 },
    { title: "JS Algorithms & Data Structures", description: "Issued by freeCodeCamp", imgUrl: certificate9 },
    { title: "Front-End Javascript", description: "Issued by MySkill", imgUrl: certificate10 },
    { title: "Front-End React", description: "Issued by MySkill", imgUrl: certificate11 },
    { title: "PHP Certification", description: "Issued by Always Ngoding", imgUrl: certificate12 },
    { title: "Javascript Certification", description: "Issued by Always Ngoding", imgUrl: certificate13 },
    { title: "CSS Certification", description: "Issued by Always Ngoding", imgUrl: certificate14 },
    { title: "HTML Certification", description: "Issued by Always Ngoding", imgUrl: certificate15 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Projects & Certificates</h2>
              <p>
                Explore my latest projects and professional certifications. 
                Hover over the cards to see more details!
              </p>
            </motion.div>
            
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificates</Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectsCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {certificates.map((cert, index) => (
                      <ProjectsCard key={index} {...cert} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;
