import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./form.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Table } from 'react-bootstrap'


function StudentAdmission() {

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
    const{FirstName,MiddleName, LastName,Email,Phone,Password,ConfirmPassword,
      FatherName,MotherName,ParentPhone,Nationality,Pic,DOB,Gender,Category, Course,
      CorrespondenceAddress,PermanentAddress,City,State,
    SSCBoard,HSCBoard,GraduationBoard,PGBoard,SSCYear,HSCYear,GraduationYear,PGYear,SSCPercentage,HSCPercentage,GraduationPercentage,PGPercentage,SSCStream,HSCStream,GraduationStream,PGStream,Checkbox} = form 
    const newErrors = {}

    if(!FirstName || FirstName === '') newErrors.FirstName= 'Please enter your First name'
    if(!MiddleName || MiddleName === '') newErrors.MiddleName= 'Please enter your Middle name'
    if(!LastName || LastName === '') newErrors.LastName= 'Please enter your Last name'
    if(!Email || Email === '') newErrors.Email= 'Please enter your Email'
    if(!Phone || Phone === '') newErrors.Phone= 'Please enter your Phone'
    if(!Password || Password === '') newErrors.Password= 'Please enter your Password'
    if(!FatherName || FatherName === '') newErrors.FatherName= 'Please enter your Father name'
    if(!MotherName || MotherName === '') newErrors.MotherName= 'Please enter your Mother name'
    if(!ParentPhone || ParentPhone === '') newErrors.ParentPhone= 'Please enter your Parent Phone'
    if(!Nationality || Nationality === '') newErrors.Nationality= 'Please enter your Nationality'
    if(!Pic || Pic === '') newErrors.Pic= 'Please enter your Pic'
    if(!DOB || DOB === '') newErrors.DOB= 'Please enter your DOB'
    if(!Gender || Gender === '') newErrors.Gender= 'Please enter your Gender'
    if(!Category || Category === '') newErrors.Category= 'Please enter your Category'
    if(!Course || Course === '') newErrors.Course= 'Please choose  course'
    if(!CorrespondenceAddress || CorrespondenceAddress === '') newErrors.CorrespondenceAddress= 'Please choose  Correspondence Address'
    if(!PermanentAddress || PermanentAddress === '') newErrors.PermanentAddress= 'Please choose  Permanent Address'
    if(!City || City === '') newErrors.City= 'Please enter your City'
    if(!State || State === '') newErrors.State= 'Please enter your State'

    if(!SSCBoard || SSCBoard === '') newErrors.SSCBoard= 'Please choose Board'
    if(!HSCBoard || HSCBoard === '') newErrors.HSCBoard= 'Please choose Board'
    if(!GraduationBoard || GraduationBoard === '') newErrors.GraduationBoard= 'Please choose Board'
    if(!PGBoard || PGBoard === '') newErrors.PGBoard= 'Please choose Board'

    if(!SSCYear || SSCYear === '') newErrors.SSCYear= 'Please choose year'
    if(!HSCYear || HSCYear === '') newErrors.HSCYear= 'Please choose year'
    if(!GraduationYear || GraduationYear === '') newErrors.GraduationYear= 'Please choose year'
    if(!PGYear || PGYear === '') newErrors.PGYear= 'Please choose year'

    if(!SSCPercentage || SSCPercentage === '') newErrors.SSCPercentage= 'Please choose Percentage'
    if(!HSCPercentage || HSCPercentage === '') newErrors.HSCPercentage= 'Please choose Percentage'
    if(!GraduationPercentage || GraduationPercentage === '') newErrors.GraduationPercentage= 'Please choose Percentage'
    if(!PGPercentage || PGPercentage === '') newErrors.PGPercentage= 'Please choose Percentage'

    if(!SSCStream || SSCStream === '') newErrors.SSCStream= 'Please choose Stream'
    if(!HSCStream || HSCStream === '') newErrors.HSCStream= 'Please choose Stream'
    if(!GraduationStream || GraduationStream === '') newErrors.GraduationStream= 'Please choose Stream'
    if(!PGStream || PGStream === '') newErrors.PGStream= 'Please choose Stream'


    if(!Checkbox || Checkbox === '') newErrors.Checkbox= ''

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
    <h1> Student Admission Form</h1><br></br>

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter FName" 
          value={form.FirstName} 
          onChange={(e)=>setField('FirstName', e.target.value)}
          isInvalid={!!errors.FirstName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.FirstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="MiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter MName" 
          value={form.MiddleName} 
          onChange={(e)=>setField('MiddleName', e.target.value)}
          isInvalid={!!errors.MiddleName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.MiddleName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="Name" 
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

      <Row className="mb-3">
        <Form.Group as={Col} controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
          placeholder="Enter email" 
          value={form.Email} 
          onChange={(e)=>setField('Email', e.target.value)}
          isInvalid={!!errors.Email}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="Phone">
          <Form.Label>Phone no.</Form.Label>
          <Form.Control type="Number" 
          placeholder="Enter Phone no." 
          value={form.Phone} 
          onChange={(e)=>setField('Phone', e.target.value)}
          isInvalid={!!errors.Phone}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Password" 
          value={form.Password} 
          onChange={(e)=>setField('Password', e.target.value)}
          isInvalid={!!errors.Password}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Confirm Password" 
          value={form.ConfirmPassword} 
          onChange={(e)=>setField('ConfirmPassword', e.target.value)}
          isInvalid={!!errors.ConfirmPassword}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.ConfirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="FatherName">
          <Form.Label>Father's Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter Father's Name" 
          value={form.FatherName} 
          onChange={(e)=>setField('FatherName', e.target.value)}
          isInvalid={!!errors.FatherName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.FatherName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="MotherName">
          <Form.Label>Mother's Name</Form.Label>
          <Form.Control type="Name" 
          placeholder="Enter Mother's Name"
          value={form.MotherName} 
          onChange={(e)=>setField('MotherName', e.target.value)}
          isInvalid={!!errors.MotherName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.MotherName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="ParentPhone">
          <Form.Label>Parent's Ph no.</Form.Label>
          <Form.Control type="Number" 
          placeholder="Enter Phone no." 
          value={form.ParentPhone} 
          onChange={(e)=>setField('ParentPhone', e.target.value)}
          isInvalid={!!errors.ParentPhone}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.ParentPhone}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="Nationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" 
          placeholder="Enter Nationality" 
          value={form.Nationality} 
          onChange={(e)=>setField('Nationality', e.target.value)}
          isInvalid={!!errors.Nationality}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Nationality}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="Pic">
          <Form.Label>Student pic</Form.Label>
          <Form.Control 
          type="file" 
          value={form.Pic} 
          onChange={(e)=>setField('Pic', e.target.value)}
          isInvalid={!!errors.Pic}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Pic}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="DOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" 
          placeholder="Enter DOB" 
          value={form.DOB} 
          onChange={(e)=>setField('DOB', e.target.value)}
          isInvalid={!!errors.DOB}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.DOB}
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      
      <Row>
      <Form.Group as={Col} controlId="Gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          value={form.Gender} 
          onChange={(e)=>setField('Gender', e.target.value)}
          isInvalid={!!errors.Gender}
          >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Select>
          <Form.Control.Feedback type='invalid'>
            {errors.Gender}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="Category">
          <Form.Label>Category</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          value={form.Category} 
          onChange={(e)=>setField('Category', e.target.value)}
          isInvalid={!!errors.Category}
          >
            <option>Choose...</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>Other</option>
          </Form.Select>
          <Form.Control.Feedback type='invalid'>
            {errors.Category}
          </Form.Control.Feedback>
        </Form.Group>

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
        
      </Row>
      <br></br>
      <Form.Group className="mb-3" controlId="CorrespondenceAddress">
        <Form.Label>Correspondence Address</Form.Label>
        <Form.Control 
        placeholder="1234 Main St" 
        value={form.CorrespondenceAddress} 
          onChange={(e)=>setField('CorrespondenceAddress', e.target.value)}
          isInvalid={!!errors.CorrespondenceAddress}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.CorrespondenceAddress}
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="PermanentAddress">
        <Form.Label> Permanent Address </Form.Label>
        <Form.Control 
        placeholder="Apartment, studio, or floor" 
        value={form.PermanentAddress} 
          onChange={(e)=>setField('PermanentAddress', e.target.value)}
          isInvalid={!!errors.PermanentAddress}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.PermanentAddress}
          </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control 
          value={form.City} 
          onChange={(e)=>setField('City', e.target.value)}
          isInvalid={!!errors.City}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.City}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="State">
          <Form.Label>State</Form.Label>
          <Form.Select 
          defaultValue="Choose..."
          value={form.State} 
          onChange={(e)=>setField('State', e.target.value)}
          isInvalid={!!errors.State}
          >
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
          <Form.Control.Feedback type='invalid'>
            {errors.State}
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <br></br>

      <h4 > Education Qualification</h4>

      <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Board/Unversity</th>
          <th>Passout Year</th>
          <th>Percentage</th>
          <th>Stream</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10th(Secondary)</td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Board">
        <Form.Control type="text" 
        placeholder="Enter Board/University" 
        value={form.SSCBoard} 
          onChange={(e)=>setField('SSCBoard', e.target.value)}
          isInvalid={!!errors.SSCBoard}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.SSCBoard}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Year">
        <Form.Control type="number" placeholder="Enter Year" 
        value={form.SSCYear} 
        onChange={(e)=>setField('SSCYear', e.target.value)}
        isInvalid={!!errors.SSCYear}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.SSCYear}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Percentage">
        <Form.Control type="text" placeholder="Enter Percentage" 
        value={form.SSCPercentage} 
        onChange={(e)=>setField('SSCPercentage', e.target.value)}
        isInvalid={!!errors.SSCPercentage}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.SSCPercentage}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Stream">
        <Form.Control type="text" placeholder="Enter Stream" 
        value={form.SSCStream} 
        onChange={(e)=>setField('SSCStream', e.target.value)}
        isInvalid={!!errors.SSCStream}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.SSCStream}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
        
        </tr>
        <tr>
          <td>12(Higher Secondary)</td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Board">
        <Form.Control type="text" placeholder="Enter Board/University" 
        value={form.HSCBoard} 
        onChange={(e)=>setField('HSCBoard', e.target.value)}
        isInvalid={!!errors.HSCBoard}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.HSCBoard}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Year">
        <Form.Control type="number" placeholder="Enter Year" 
        value={form.HSCYear} 
        onChange={(e)=>setField('HSCYear', e.target.value)}
        isInvalid={!!errors.HSCYear}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.HSCYear}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Percentage">
        <Form.Control type="text" placeholder="Enter Percentage" 
        value={form.HSCPercentage} 
        onChange={(e)=>setField('HSCPercentage', e.target.value)}
        isInvalid={!!errors.HSCPercentage}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.HSCPercentage}
        </Form.Control.Feedback>        
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Stream">
        <Form.Control type="text" placeholder="Enter Stream" 
        value={form.HSCStream} 
        onChange={(e)=>setField('HSCStream', e.target.value)}
        isInvalid={!!errors.HSCStream}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.HSCStream}
        </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          
        </tr>
        <tr>
          <td>Graduation</td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Board">
        <Form.Control type="text" placeholder="Enter Board/University" 
        value={form.GraduationBoard} 
          onChange={(e)=>setField('GraduationBoard', e.target.value)}
          isInvalid={!!errors.GraduationBoard}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.GraduationBoard}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Year">
        <Form.Control type="number" placeholder="Enter Year" 
        value={form.GraduationYear} 
          onChange={(e)=>setField('GraduationYear', e.target.value)}
          isInvalid={!!errors.GraduationYear}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.GraduationYear}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Percentage">
        <Form.Control type="text" placeholder="Enter Percentage" 
        value={form.GraduationPercentage} 
          onChange={(e)=>setField('GraduationPercentage', e.target.value)}
          isInvalid={!!errors.GraduationPercentage}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.GraduationPercentage}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Stream">
        <Form.Control type="text" placeholder="Enter Stream" 
        value={form.GraduationStream} 
          onChange={(e)=>setField('GraduationStream', e.target.value)}
          isInvalid={!!errors.GraduationStream}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.GraduationStream}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          
        </tr>
        <tr>
          <td>Post Graduation</td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Board">
        <Form.Control type="text" placeholder="Enter Board/University" 
        value={form.PGBoard} 
          onChange={(e)=>setField('PGBoard', e.target.value)}
          isInvalid={!!errors.PGBoard}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.PGBoard}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Year">
        <Form.Control type="number" placeholder="Enter Year" 
        value={form.PGYear} 
          onChange={(e)=>setField('PGYear', e.target.value)}
          isInvalid={!!errors.PGYear}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.PGYear}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Percentage">
        <Form.Control type="text" placeholder="Enter Percentage" 
        value={form.PGPercentage} 
          onChange={(e)=>setField('PGPercentage', e.target.value)}
          isInvalid={!!errors.PGPercentage}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.PGPercentage}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          <td>
          <Row >
        <Form.Group as={Col} controlId="Stream">
        <Form.Control type="text" placeholder="Enter Stream" 
        value={form.PGStream} 
          onChange={(e)=>setField('PGStream', e.target.value)}
          isInvalid={!!errors.PGStream}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.PGStream}
          </Form.Control.Feedback>
        </Form.Group>
       </Row>
          </td>
          
        </tr>      
      </tbody>
    </Table>
        <br></br>

      <Form.Group className="mb-3" id="Checkbox">
        <Form.Check type="checkbox" 
        label="I hereby state that the facts mentioned above are true to the best of my knowledge and belief. " 
        value={form.Checkbox} 
          onChange={(e)=>setField('Checkbox', e.target.value)}
          isInvalid={!!errors.Checkbox}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.Checkbox}
          </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default StudentAdmission
