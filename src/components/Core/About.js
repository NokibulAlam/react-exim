import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MultiCarousel from '../extra/MultiCarousel';
import { Parallax } from 'react-parallax';

//images
import Industry from '../../images/Industry.jpg';
import BG from '../../images/Prallax1.jpg'; //bgImage={BG} bgImageStyle={{ backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}


const About = () => {
    return (
        <Parallax strength={600} bgImage={BG} className="photo">
            <div className='w-full bg-no-repeat bg-center pb-14'>
                <Container>
                    <Row>
                        <Col md={12} sm={12}>
                            <div>
                                <p className=' text-[#7a462a] text-3xl sm:text-5xl font-semibold text-center mt-14 uppercase'>who we are</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-10'>
                        <Row className='mx-auto'>
                            <Col md={6} sm={12}>
                                <div>
                                    <p className='font-semibold text-gray-600'>
                                        AYESHA LEATHER is one of the leading leather manufacturers since 1958.
                                        With over 50 years of experience in the leather industry. <br /> <br />
                                        AYESHA has been focusing on creating high quality leather while adhering to environmental concerns and eco-friendly practices.
                                        AYESHA strives to provide leather excellence through research, innovation, and latest technology. <br /> <br />
                                        Consisting of a team comprised of skilled workforce, proficient technicians, and modern machineries, we ensure quality, reliability, and maximum customer satisfaction.
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div>
                                    <img src={Industry} alt="Industry Building" className='w-full rounded-md h-2/3' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={12} sm={12}>
                            <MultiCarousel />
                        </Col>
                    </Row>
                </Container>

            </div>
        </Parallax>
    )
}

export default About;