import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">Splash Clone</Navbar.Brand>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/samuel-morton-a7b82a232/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/sammorton11" target="_blank" rel="noopener noreferrer">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

