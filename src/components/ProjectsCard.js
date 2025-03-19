import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt={title} className="proj-img" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        ) : (
          <>
            <img src={imgUrl} alt={title} className="proj-img" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </>
        )}
      </div>
    </Col>
  );
};

export default ProjectsCard;
