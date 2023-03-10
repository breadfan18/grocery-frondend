import React from "react";
import { Button, Form, NavDropdown, Offcanvas } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
  return (
    <div className="navBar">
      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Swaroop's Grocery Store</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"md"`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$"md"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"md"`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"md"`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Departments</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-$"md"`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Fruits</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action5">
                    Vegetables
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
