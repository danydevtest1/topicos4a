import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Menu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="/">Barra de Herramientas</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/producto">Productos</Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
