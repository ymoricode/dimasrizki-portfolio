import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import projImg1 from "../assets/img/projek1.png";
import projImg2 from "../assets/img/projek2.png";
import projImg3 from "../assets/img/projek3.png";
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
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectsCard from "./ProjectsCard";

export const Projects = () => {
  const projects = [
    {
      title: "Mori AI",
      description: "Development & Design",
      imgUrl: projImg1,
      link: "https://github.com/ymorii/ymoriai-react",
    },
    {
      title: "Portfolio Website",
      description: "Development & Design",
      imgUrl: projImg2,
      link: "https://github.com/ymorii/ymoriai-react",
    },
    {
      title: "Menu Digital Warung Bakso Putra Solo",
      description: "Development & Design",
      imgUrl: projImg3,
      link: "https://github.com/ymorii/ymoriai-react",
    },
  ];

  const certificates = [
    {
      title: "React Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate1,
    },
    {
      title: "Javascript Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate2,
    },
    {
      title: "Front-End Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate3,
    },
    {
      title: "Web Dev Basic Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate4,
    },
    {
      title: "Python Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate5,
    },
    {
      title: "Machine Learning Certification",
      description: "Issued by Dicoding",
      imgUrl: certificate6,
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      description: "Issued by Dicoding",
      imgUrl: certificate62,
    },
    {
      title: "Belajar Dasar Data Science",
      description: "Issued by Dicoding",
      imgUrl: certificate63,
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      description: "Issued by Dicoding",
      imgUrl: certificate64,
    },
    {
      title: "Belajar Dasar AI",
      description: "Issued by Dicoding",
      imgUrl: certificate65,
    },
    {
      title: "Responsive Web Design Certification",
      description: "Issued by freeCodeCamp",
      imgUrl: certificate7,
    },
    {
      title: "Front-End Development Liblaries Certification",
      description: "Issued by freeCodeCamp",
      imgUrl: certificate8,
    },
    {
      title: "Javascript Algorithms and Data Structures Certification",
      description: "Issued by freeCodeCamp",
      imgUrl: certificate9,
    },
    {
      title: "Front-End Javascript Certification",
      description: "Issued by MySkill",
      imgUrl: certificate10,
    },
    {
      title: "Front-End React Certification",
      description: "Issued by MySkill",
      imgUrl: certificate11,
    },
    {
      title: "PHP Certification",
      description: "Issued by Always Ngoding",
      imgUrl: certificate12,
    },
    {
      title: "Javascript Certification",
      description: "Issued by Always Ngoding",
      imgUrl: certificate13,
    },
    {
      title: "CSS Certification",
      description: "Issued by Always Ngoding",
      imgUrl: certificate14,
    },
    {
      title: "HTML Certification",
      description: "Issued by Always Ngoding",
      imgUrl: certificate15,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects and Certificate</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificate</Nav.Link>
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
                    {certificates.map((certificate, index) => (
                      <ProjectsCard key={index} {...certificate} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;
