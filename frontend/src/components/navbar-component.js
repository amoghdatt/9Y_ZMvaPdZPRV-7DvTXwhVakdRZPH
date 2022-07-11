import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function NavbarComponent({ isUserLoggedIn }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">/Awesome Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {!isUserLoggedIn ? (
              <React.Fragment>
                {" "}
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  Signup
                </Nav.Link>
              </React.Fragment>
            ) : (
              <Nav.Link as={Link} to="/uploads">
                Uploads
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
