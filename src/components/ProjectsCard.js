import { Col } from "react-bootstrap";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const ProjectsCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Col sm={6} md={4}>
      <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Tilt options={{ max: 15, scale: 1.05, speed: 400, glare: true, "max-glare": 0.5 }} className="proj-imgbx">
            <img src={imgUrl} alt={title} className="proj-img" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              
              {(githubUrl || demoUrl) && (
                <div className="proj-btns">
                  {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-proj">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {demoUrl && (
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-proj">
                      <FaGlobe /> Demo
                    </a>
                  )}
                </div>
              )}
            </div>
        </Tilt>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;
