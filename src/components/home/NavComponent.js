import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './NavbarComp.css'; 

const NavComponent=()=>{

  
// function NavComponent() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{zIndex:"3"}}>
    <Container fluid>
        <Navbar.Brand as={Link} to="/">CureHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
            <NavDropdown title="About Us" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/MeetOurDoctors">Meet Our Doctors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OurServices">
                Our Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Patient" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/PatientLogin">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PatientRegistration">
                Registration
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Doctor" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/create-doctor">Create Doctor</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/doctor-list">Docotr List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/edit-doctor/:id">/edit-doctor/:id</NavDropdown.Item>

              
              

            </NavDropdown>

            <NavDropdown title="Nurse" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/create-nurse">/create-nurse</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nurse-list">/nurse-list</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/edit-nurse/:id">/edit-nurse/:id</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Mdedicine" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/create-medicine">/create-medicine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/medicine-list">/medicine-list</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/edit-medicine/:id">/edit-medicine/:id</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Staff" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/StaffLogin">Login</NavDropdown.Item> 
              </NavDropdown>
              <Nav.Link  >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavComponent;