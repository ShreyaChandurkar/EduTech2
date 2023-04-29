import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Feedback.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Table } from 'react-bootstrap'


function ParentFeedback() {

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
    const{ParentFName, ParentLName,StudentFName,StudentLName, Course, Year} = form 
    const newErrors = {}

    if(!ParentFName || ParentFName === '') newErrors.ParentFName= 'Please enter your First name'
    if(!ParentLName || ParentLName === '') newErrors.ParentLName= 'Please enter your Last name'
    if(!StudentFName || StudentFName === '') newErrors.StudentFName= 'Please enter Student First name'
    if(!StudentLName || StudentLName === '') newErrors.StudentLName= 'Please enter Student Last name'
    if(!Course || Course === '') newErrors.Course= 'Please choose  course'
    if(!Year || Year === '') newErrors.Year= 'Please choose year'

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
      <h1>Parent Feedback Form</h1><br></br>

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="ParentFName">
          <Form.Label>Parent's First Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter FName" 
          value={form.ParentFName} 
          onChange={(e)=>setField('ParentFName', e.target.value)}
          isInvalid={!!errors.ParentFName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.ParentFName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="ParentLName">
          <Form.Label>Parent's Last Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter LName" 
          value={form.ParentLName} 
          onChange={(e)=>setField('ParentLName', e.target.value)}
          isInvalid={!!errors.ParentLName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.ParentLName}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="StudentFName">
          <Form.Label >Student's First Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter FName" 
          value={form.StudentFName} 
          onChange={(e)=>setField('StudentFName', e.target.value)}
          isInvalid={!!errors.StudentFName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.StudentFName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="StudentLName">
          <Form.Label>Student's Last Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter LName" 
          value={form.StudentLName} 
          onChange={(e)=>setField('StudentLName', e.target.value)}
          isInvalid={!!errors.StudentLName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.StudentLName}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="Course">
          <Form.Label>Course</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          value={form.Course} 
          onChange={(e)=>setField('Course', e.target.value)}
          isInvalid={!!errors.Course}
          >
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
          <Form.Control.Feedback type='invalid'>
            {errors.Course}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="Year">
          <Form.Label>Year</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          value={form.Year} 
          onChange={(e)=>setField('Year', e.target.value)}
          isInvalid={!!errors.Year}
          >
            <option>Choose...</option>
            <option>1st year</option>
            <option>2nd year</option>
            <option>3rd year</option>
            <option>Final year</option>

          </Form.Select>
          <Form.Control.Feedback type='invalid'>
            {errors.Year}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <br></br>


      <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Quality of Education</th>
          <th>Extracurricular activities</th>
          <th>Teaching methods</th>
          <th>Campus safety</th>
          <th>Discipline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Excellent</td>
          <td>
            <Form.Check type="radio" name="option1" id="option1-1" />
          </td>
          <td>
            <Form.Check type="radio" name="option2" id="option2-1" />
          </td>
          <td>
            <Form.Check type="radio" name="option3" id="option3-1" />
          </td>
          <td>
            <Form.Check type="radio" name="option4" id="option4-1" />
          </td>
          <td>
            <Form.Check type="radio" name="option5" id="option5-1" />
          </td>
        </tr>
        <tr>
          <td>Very Good</td>
          <td>
            <Form.Check type="radio" name="option1" id="option1-2" />
          </td>
          <td>
            <Form.Check type="radio" name="option2" id="option2-2" />
          </td>
          <td>
            <Form.Check type="radio" name="option3" id="option3-2" />
          </td>
          <td>
            <Form.Check type="radio" name="option4" id="option4-2" />
          </td>
          <td>
            <Form.Check type="radio" name="option5" id="option5-2" />
          </td>
        </tr>
        <tr>
          <td>Good</td>
          <td>
            <Form.Check type="radio" name="option1" id="option1-3" />
          </td>
          <td>
            <Form.Check type="radio" name="option2" id="option2-3" />
          </td>
          <td>
            <Form.Check type="radio" name="option3" id="option3-3" />
          </td>
          <td>
            <Form.Check type="radio" name="option4" id="option4-3" />
          </td>
          <td>
            <Form.Check type="radio" name="option5" id="option5-3" />
          </td>
        </tr>
        <tr>
          <td>Satisfactory</td>
          <td>
            <Form.Check type="radio" name="option1" id="option1-4" />
          </td>
          <td>
            <Form.Check type="radio" name="option2" id="option2-4" />
          </td>
          <td>
            <Form.Check type="radio" name="option3" id="option3-4" />
          </td>
          <td>
            <Form.Check type="radio" name="option4" id="option4-4" />
          </td>
          <td>
            <Form.Check type="radio" name="option5" id="option5-4" />
          </td>
        </tr>
        <tr>
          <td>Not Satisfactory</td>
          <td>
            <Form.Check type="radio" name="option1" id="option1-5" />
          </td>
          <td>
            <Form.Check type="radio" name="option2" id="option2-5" />
          </td>
          <td>
            <Form.Check type="radio" name="option3" id="option3-5" />
          </td>
          <td>
            <Form.Check type="radio" name="option4" id="option4-5" />
          </td>
          <td>
            <Form.Check type="radio" name="option5" id="option5-5" />
          </td>
        </tr>
      </tbody>
    </Table>
        <br></br>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Suggestions</Form.Label>
          <Form.Control type="Name" placeholder="Enter your suggestions" />
        </Form.Group>
        <br></br>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default ParentFeedback
