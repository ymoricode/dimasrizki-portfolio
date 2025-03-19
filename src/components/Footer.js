import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/dimasrlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <img src={logo} alt="logo" className="footer-logo" />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/dimas-rizki-dwi-saputra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ymorii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/dimasrizkids/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright &copy; 2025. All Rights Reserved</p>
            <p>
              Designed by <strong>Dimas Rizki</strong> |{" "}
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
