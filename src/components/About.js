import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import placeholderImg from "../assets/img/avatardimas.jpg"; // Using existing avatar for now

export const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="about" id="about">
      <Container>
        <div className="about-bx">
            <Row className="align-items-center">
                <Col md={5} className="text-center text-md-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="about-img-container"
                    >
                        <img src={placeholderImg} alt="About Me" className="about-img" />
                    </motion.div>
                </Col>
                <Col md={7}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="about-content"
                    >
                        <h2>About Me</h2>
                        <p>
                            I am a passionate <strong>Full Stack Developer</strong> and <strong>UI/UX Designer</strong> based in Bogor. 
                            With a strong foundation in Information Systems, I bridge the gap between complex technical problems and beautiful, user-friendly interfaces.
                        </p>
                        <p>
                            My journey started with a curiosity for how things work on the web, which led me to master technologies like 
                            <strong> React, Node.js, and Laravel</strong>. I believe in writing clean, maintainable code and designing with empathy for the user.
                        </p>
                        
                        <div className="stats-row">
                            <div className="stat-item">
                                <h3>2+</h3>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <span>Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <h3>5+</h3>
                                <span>Certifications</span>
                            </div>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
