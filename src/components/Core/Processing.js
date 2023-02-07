import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../extra/Card";

// Images
import CT from "../../images/Processing/Collecting.jpg";
import PR from "../../images/Processing/Proccessing.jpg";
import TT from "../../images/Processing/Testing.jpg";
import EX from "../../images/Processing/Export.jpg";

const Processing = () => {
  return (
    <div name="processing">
      <Container>
        <Row>
          <Col md={12} sm={12}>
            <div>
              <p className=" text-[#7a462a] text-3xl sm:text-5xl text-center mt-14 uppercase">
                processing
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} sm={12}>
            <div>
              <p className="text-[#2b1c14] text-center mt-10 mb-10 px-5 lg:mx-14">
                We start from raw hides and end with identical quality finished
                leather. During this transformation, the skin passes through
                various steps of the latest technologies. We love the raw skin &
                preserve in modern refrigerators to maintain better quality
                Constant research & new developments is an integral part of AYESHA
                policy.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="flex gap-x-14 text-center">
              <Card image={CT} title="Collect Skin" />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="flex gap-x-14 text-center">
              <Card image={PR} title="Proccessing" />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="flex gap-x-14 text-center">
              <Card image={TT} title="Tesing" />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="flex gap-x-14 text-center">
              <Card image={EX} title="Export" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div>
              <p className="text-[#50392c] text-center mt-14 mb-14 lg:mx-14">
                Our best-in-class managerial policies have propelled us to
                become the leading leather exporters out of Bangladesh
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Processing;
