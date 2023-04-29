import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Feedback.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function TeacherFeedback() {

    const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm ({
      ...form,
      [field]:value
    })

    if(!! errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  const validateForm = () => {
    const{FirstName, LastName, Q1, Q2, Q3, Q4} = form 
    const newErrors = {}

    if(!FirstName || FirstName === '') newErrors.FirstName= 'Please enter your First name'
    if(!LastName || LastName === '') newErrors.LastName= 'Please enter your Last name'
    if(!Q1 || Q1 === '') newErrors.Q1= 'Please Fill  entry'
    if(!Q2 || Q2 === '') newErrors.Q2= 'Please Fill entry'
    if(!Q3 || Q3 === '') newErrors.Q3= 'Please Fill entry'
    if(!Q4 || Q4 === '') newErrors.Q4= 'Please Fill entry'

    return newErrors
  }
  const handleSubmit =(e)=>{
    e.preventDefault()

    const formErrors = validateForm()
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
    }else{
      console.log('form submitted');
      console.log(form)
    }

  }

  return (  
      
  <div className=' wrapper d-flex align-items-center justify-content-center '>
    <div className='form'>
    <h1>Faculty Feedback Form</h1><br></br>

    <Form>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="FirstName">
          <Form.Label >Teacher's First Name</Form.Label>
          <Form.Control 
          type="Name" 
          placeholder="Enter FName"
          value={form.FirstName} 
          onChange={(e)=>setField('FirstName', e.target.value)}
          isInvalid={!!errors.FirstName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.FirstName}
          </Form.Control.Feedback>     
        </Form.Group>

        <Form.Group as={Col} controlId="LastName">
          <Form.Label >Teacher's Last Name</Form.Label>
          <Form.Control 
          type="Name" 
          placeholder="Enter LName" 
          value={form.LastName} 
          onChange={(e)=>setField('LastName', e.target.value)}
          isInvalid={!!errors.LastName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.LastName}
          </Form.Control.Feedback>
        </Form.Group>

        </Row>
        
        <Row>
        <Form.Group className="mb-3" controlId="Q1">
        <Form.Label>What can our college start doing to better support for learning and why?</Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={form.Q1} 
        onChange={(e)=>setField('Q1', e.target.value)}
        isInvalid={!!errors.Q1}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.Q1}
        </Form.Control.Feedback>
      </Form.Group>
        </Row>

        <Row>
        <Form.Group className="mb-3" controlId="Q2">
        <Form.Label>What should our college keep doing and why?</Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={form.Q2} 
        onChange={(e)=>setField('Q2', e.target.value)}
        isInvalid={!!errors.Q2}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.Q2}
        </Form.Control.Feedback>
      </Form.Group>
        </Row>

        <Row>
        <Form.Group className="mb-3" controlId="Q3">
        <Form.Label>What should our college stop doing and why?</Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={form.Q3} 
        onChange={(e)=>setField('Q3', e.target.value)}
        isInvalid={!!errors.Q3}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.Q3}
        </Form.Control.Feedback>
      </Form.Group>
        </Row>

        <Row>
        <Form.Group className="mb-3" controlId="Q4">
        <Form.Label> Is there anything you would like to add?</Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={form.Q4} 
        onChange={(e)=>setField('Q4', e.target.value)}
        isInvalid={!!errors.Q4}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.Q4}
        </Form.Control.Feedback>
      </Form.Group>
        </Row>

        <br></br>
       
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default TeacherFeedback
