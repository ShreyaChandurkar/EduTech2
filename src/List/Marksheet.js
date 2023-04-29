import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./form.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import List from './List'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Form2() {
// const navigate = useNavigate();
  return (  
      
  <div className=' wrapper d-flex align-items-center justify-content-center '>
    <div className='form'>
    <h2 >Check your results</h2><br></br>

    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="Examination">
          <Form.Label>Examination</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          >
            <option>Choose...</option>
            <option>Sem 1</option>
            <option>Sem 2</option>
            <option>Sem 3</option>
            <option>Final year</option>

          </Form.Select>
        </Form.Group>
        
      </Row>

      <Form.Group as={Col} controlId="RegNo">
          <Form.Label>Registration No.</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter RegNo." 
          
          />
    
        </Form.Group>
        <br></br> 
        <div>   
          <a href="List" class='btn btn-primary'>Submit</a>
      {/* <Button variant="primary" type="submit" onClick={() => navigate("List")}>  
      Submit
     </Button> */}
   
     </div> 
    </Form>
    </div>
    </div>
  )
}

export default Form2
