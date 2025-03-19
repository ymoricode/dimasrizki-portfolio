import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/avatardimas.jpeg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "UI/UX Designer", "Data Analyst"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const deletingSpeed = 150; // Menjadikan penghapusan lebih lambat

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed); // Gunakan kecepatan penghapusan yang lebih lambat
    } else {
      setDelta(300 - Math.random() * 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portfolio</span>
            <h1>
              {`Hi I'm Dimas Rizki `}
              <br></br>
              <span className="wrap">{text}</span>
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
            <button onClick={() => console.log("connect")}>
              Hire Me <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Banner Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
