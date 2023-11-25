// NavbarComp.js

import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CreateDoctor from './CreateDoctor';
import DoctorList from './DoctorList';
import EditDoctor from './EditDoctor';
import './NavbarComp.css'; // Import the CSS file

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar expand="lg" className="bg-custom">
            <Navbar.Brand href="#home">CareHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/introduction"}>Introduction</Nav.Link>

                <NavDropdown title="Doctor" id="basic-nav-dropdown">
                  <NavDropdown.Link as={Link} to={"/create-doctor"}>Create Doctor</NavDropdown.Link>
                  <NavDropdown.Item href="#action/3.2">Doctor List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Nurse" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Create Nurse</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Nurse List</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<CreateDoctor />} />
            <Route path="/create-doctor" element={<CreateDoctor />} />
            <Route path="/doctor-list" element={<DoctorList />} />
            <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
