import { Container, Row, Col } from "react-bootstrap";
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
} from "react-icons/fa";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      icon: <FaHtml5 style={{ color: "#E34F26" }} />,
    },
    {
      name: "CSS",
      level: "Advanced",
      icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      icon: <FaJs style={{ color: "#F7DF1E" }} />,
    },

    {
      name: "React",
      level: "Intermediate",
      icon: <FaReact style={{ color: "#61DAFB" }} />,
    },

    {
      name: "PHP",
      level: "Intermediate",
      icon: <FaPhp style={{ color: "#777BB4" }} />,
    },

    {
      name: "MySQL",
      level: "Intermediate",
      icon: <FaDatabase style={{ color: "#F29111" }} />,
    },

    {
      name: "Laravel",
      level: "Intermediate",
      icon: <FaLaravel style={{ color: "#FF2D20" }} />,
    },

    {
      name: "Figma",
      level: "Beginner",
      icon: <FaFigma style={{ color: "#F24E1E" }} />,
    },
    {
      name: "Python",
      level: "Beginner",
      icon: <FaPython style={{ color: "#3776AB" }} />,
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of the skills I have acquired.</p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h5>{skill.name}</h5>
                    <span
                      className={`skill-level ${skill.level.toLowerCase()}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
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
