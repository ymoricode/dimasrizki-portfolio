import { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/avatardimas.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import "bootstrap/dist/css/bootstrap.min.css";
import ThreeBackground from "./ThreeBackground";
import ThreeModel from "./ThreeModel"; // Import new 3D Model

export const Banner = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const popUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="banner" id="home" style={{ position: "relative", overflow: "hidden" }}>
      <ThreeBackground /> {/* Use new 3D Background */}

      <Container style={{ position: "relative", zIndex: 1 }}> {/* Spacing handled by CSS */}
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              // Removed glass-card class
            >
              <span className="tagline">Welcome To My Portfolio</span>
              <h1>
                {`Hi I'm Dimas Rizki `}
                <br />
                <span className="wrap" style={{ color: "#6a0dad", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Web Developer", "UI/UX Designer", "Data Analyst"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p>
                As an Information Systems student at Ibn Khaldun University Bogor,
                I have a deep interest in web technology and development. During
                my studies, I have developed skills in programming, database
                management. I am passionate about developing innovative and
                effective technology solutions to improve efficiency and user
                experience. I am experienced in using various programming
                languages such as HTML, CSS, JavaScript, PHP, and SQL. In
                addition, I also have knowledge in frameworks such as React js,
                Node js, Next JS and Laravel.
              </p>
              <motion.a
                href="/assets/img/CV_DimasRizkiDwiSaputra.pdf"
                download
                className="vvd"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                <span>Hire Me</span>{" "}
                <ArrowRightCircle className="icon-hover" size={25} />
              </motion.a>
            </motion.div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <motion.div
                className="img-container"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <ThreeModel />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
