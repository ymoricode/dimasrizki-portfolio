import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/dimasrlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} className="footer-content">
            
            {/* Logo */}
            <div className="footer-logo-container">
               <img src={logo} alt="logo" className="footer-logo" />
            </div>

            {/* Social Icons */}
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dimas-rizki-dwi-saputra/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/ymorii" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/dimasrizkids/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            {/* Links & Copyright */}
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#">Terms of Service</a>
            </div>
            
            <p className="copyright">Copyright &copy; 2025 Dimas Rizki. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
