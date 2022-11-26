import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/Logo-01.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={Logo} alt="Logo" className='img-fluid'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto menu"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Gallary</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                Processing
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Quality
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">
                                Sustainability
                            </Nav.Link>
                            <Nav.Link href="#">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header;