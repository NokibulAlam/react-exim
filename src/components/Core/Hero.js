import React from 'react';
import Hero1 from '../../images/Hero/Hero 1.jpg';
import Hero2 from '../../images/Hero/Hero 2.jpg';
import Hero3 from '../../images/Hero/Hero 3.jpg';
import Hero4 from '../../images/Hero/Hero 4.jpg';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import './Hero.css';

const Hero = () => {
    return (
        <div name="home" className="carousel">
            <Container fluid>
                <Row>
                    <Col style={{ padding: 0, margin: 0 }}>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero1}
                                    alt="First slide"
                                />

                                {/* <Carousel.Caption className='lg:mb-14'>
                                    <div>
                                        <p className='text-2xl sm:text-7xl font-bold'>WELCOME TO EXIM LEATHER</p>
                                        <button className='btn btn-warning mx-2'>About Us</button>
                                        <button className='btn btn-secondary'>Contact Us</button>
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero2}
                                    alt="Second slide"
                                />

                                {/* <Carousel.Caption className='lg:mb-14'>
                                    <div>
                                        <p className='text-2xl sm:text-7xl font-bold'>WELCOME TO EXIM LEATHER</p>
                                        <button className='btn btn-warning mx-2'>About Us</button>
                                        <button className='btn btn-secondary'>Contact Us</button>
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero3}
                                    alt="Third slide"
                                />

                                {/* <Carousel.Caption className='lg:mb-14'>
                                    <div>
                                        <p className='text-2xl sm:text-7xl font-bold'>WELCOME TO EXIM LEATHER</p>
                                        <button className='btn btn-warning mx-2'>About Us</button>
                                        <button className='btn btn-secondary'>Contact Us</button>
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero4}
                                    alt="Third slide"
                                />

                                {/* <Carousel.Caption className='lg:mb-14'>
                                    <div>
                                        <p className='text-2xl sm:text-7xl font-bold'>WELCOME TO EXIM LEATHER</p>
                                        <button className='btn btn-warning mx-2'>About Us</button>
                                        <button className='btn btn-secondary'>Contact Us</button>
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                        <div className='hero-content'>
                            <h1 className='text-2xl sm:text-6xl font-bold text-white'>WELCOME TO EXIM LEATHER</h1>
                            <div className='button flex justify-center items-center'>
                                <button className='btn btn-warning mx-2'>About Us</button>
                                <button className='btn btn-secondary'>Contact Us</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero