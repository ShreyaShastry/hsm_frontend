import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../patientPortal/AppointmentForm.css"
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
//import { useAuth } from '../../AuthContext';
import { AuthData } from '../../auth/AuthWrapper';

function PatientLogin(props) {
  const navigate = useNavigate();
  const {login} = AuthData();
  //const { login } = useAuth();
  const [username,setUsername] = useState(""); 
  const [password,setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      //await login(username, password, navigate);
      await login(username,password);
      console.log(username);
      navigate('/myprofile');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='outerHolder'>
       <div className='backgroundAnimation'></div>
      <form method='POST'>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '-120px' }}>Patient Login</h2>
    < div className='holder' >
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username(email)" name='username' onChange={(e)=>{setUsername(e.target.value)}} />
        </Form.Group>
        </Row>   
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Enter password" type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>     
      <Button type="submit" variant="success" className='btn btn' onClick={handleSubmit} >
        Login
      </Button>
      <br />
      <div className="orSignup">
      <p style={{ margin: '20px 0', fontSize: '18px' }}>OR</p>
  <br />
  <Link to='/PatientRegistration' className='link'>Signup</Link>
  </div>
    </div>
    </form>
    </div>
  );
}

export default PatientLogin;
