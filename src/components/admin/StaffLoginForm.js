import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import "./stafflogin.css"

function StaffLoginForm(props) {
  return (
    <div className='outerHolder'>
      <div className='animated-background'></div>
      <div className='loginContainer'style={{ width: '50%' , height: '50%' }}>
        <h3 className='loginHeading'>Staff Login</h3>
        <div className='loginForm'style={{ width: '100%',height: '100%' }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" size="lg" style={{ width: '100%' }} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Enter password" type="password" size="lg" style={{ width: '100%' }} />
            </Form.Group>
          </Row>
          <Button type="submit" variant="success" className='btn btn-lg'>
            Login
          </Button>
          <Button variant="info" className='btn btn-lg'>
             Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StaffLoginForm;