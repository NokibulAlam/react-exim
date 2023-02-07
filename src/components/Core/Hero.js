import React from "react";
import Hero1 from "../../images/Hero/Hero 1.jpg";
import Hero2 from "../../images/Hero/Hero 2.jpg";
import Hero3 from "../../images/Hero/Hero 3.jpg";
import Hero4 from "../../images/Hero/Hero 4.jpg";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import "./Hero.css";

const Hero = () => {
  return (
    <div name="home" className="carousel">
      <Container fluid>
        <Row>
          <Col style={{ padding: 0, margin: 0 }}>
            <Carousel indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={Hero1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Hero2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Hero3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Hero4} alt="Fourth slide" />
              </Carousel.Item>
            </Carousel>

            <div className="hero-content">
              <h1 className="text-xl sm:text-6xl font-bold text-white">
                WELCOME TO AYESHA LEATHER
              </h1>
              <div className="button flex justify-center items-center">
                <span className="bg-[#EED04A] px-4 py-2 rounded-md font-medium mr-3 text-[14px] sm:text-[20px] sm:mt-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 ">
                  <a>About</a>
                </span>
                <span className="bg-white px-3 py-2 rounded-md font-medium text-[#ce7a51] text-[14px] sm:text-[20px] sm:mt-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 ">
                  <a>Contact</a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
