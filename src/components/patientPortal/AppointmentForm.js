import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../patientPortal/AppointmentForm.css";
//import { useLocation } from 'react-router-dom';

function AppointmentForm(props) {

  const [name,setName] = useState(""); 
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [department,setDepartment] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");

  const arr = [name,mobile,email,department,date,time];

  //callback function getState
  const handleClick=()=>{
    props.getState(arr);
  }
  //const location=useLocation();

  return (
    < div className='holder' >
      <h2></h2>
      {/*<p>Hello {location.state.id}</p>*/}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Mobile Number" onChange={(event)=>setMobile(event.target.value)} />
        </Form.Group>
      </Row>
    
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="abc@gmail.com" type="email" onChange={(event)=>setEmail(event.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridDept">
          <Form.Label>Department</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(event)=>setDepartment(event.target.value)}>
          <option>Select</option>
            <option>Cardiology</option>
            <option>Pediatric</option>
            <option>Opthalmology</option>
            <option>Neurologist</option>
          </Form.Select>
        </Form.Group>

    
    <Row className='mb-2'>
        <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control type='date' onChange={(event)=>setDate(event.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control type='time' min="09:00" max="18:00" onChange={(event)=>setTime(event.target.value)}/>
        </Form.Group>

      </Row>
      
      <Button type="submit" onClick={handleClick} variant="success" className='btn btn' >
        Submit
      </Button>

    </div>
  );
}

export default AppointmentForm;
