import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaFigma,
  FaPython,
  FaPhp,
  FaDatabase,
  FaHandPointer,
} from "react-icons/fa";
import { Tilt } from "react-tilt";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // Show part of next card to indicate scroll
    },
  };

  const skills = [
    { name: "HTML", level: "Advanced", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS", level: "Advanced", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", level: "Advanced", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
    { name: "React", level: "Intermediate", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { name: "PHP", level: "Intermediate", icon: <FaPhp style={{ color: "#777BB4" }} /> },
    { name: "MySQL", level: "Intermediate", icon: <FaDatabase style={{ color: "#F29111" }} /> },
    { name: "Laravel", level: "Intermediate", icon: <FaLaravel style={{ color: "#FF2D20" }} /> },
    { name: "Figma", level: "Beginner", icon: <FaFigma style={{ color: "#F24E1E" }} /> },
    { name: "Python", level: "Beginner", icon: <FaPython style={{ color: "#3776AB" }} /> },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Technologies I work with to bring ideas to life.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                itemClass="carousel-item-padding-40-px"
              >
                {skills.map((skill, index) => (
                  <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }}>
                    <div className="item glass-card-skill">
                      <div className="skill-icon-wrapper">
                         {skill.icon}
                      </div>
                      <h5>{skill.name}</h5>
                      <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  </Tilt>
                ))}
              </Carousel>
              <div className="swipe-indicator d-block d-md-none">
                  <FaHandPointer size={20} className="swipe-icon" />
                  <span>Swipe to explore</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
