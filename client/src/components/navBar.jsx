import React from "react";
import {Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
    

    return (
        <Navbar style={{fontSize:"18px"}} bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="/" style={{marginLeft:"3.8vw"}}>Felix Chung</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{marginRight:"3.8vw"}}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <NavDropdown href="/portfolio" title="Portfolio" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact"> Contact </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavigationBar