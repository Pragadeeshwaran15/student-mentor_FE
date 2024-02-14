import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
function TopBar() {
    let Navigate=useNavigate()
  return  <Navbar expand="lg" className="bg" bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand onClick={()=>Navigate("/")}>Student Mentor</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={()=>Navigate("/mentors")}>Mentor DashBoard</Nav.Link>
        <Nav.Link onClick={()=>Navigate("/student")}>Student Dashboard</Nav.Link>
        <NavDropdown title="Actions" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>Navigate("/addStudent")}>
            Add Student
          </NavDropdown.Item>
          <NavDropdown.Item onClick={()=>Navigate("/addMentor")}>
            Add Mentor
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Assigning
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default TopBar
