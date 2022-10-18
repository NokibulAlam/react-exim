import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Processing = () => {
    return (
        <div name="processing">
            <Container>
                <Row>
                    <Col md={12} sm={12}>
                        <div>
                            <p className=' text-[#7a462a] text-3xl sm:text-5xl font-semibold text-center mt-14 uppercase'>processing</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Processing;