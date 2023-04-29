import React from 'react'
import "./list.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form';
// import { Label } from 'reactstrap';


function List() {

  return (
    <div className='App'>
        {/* <h1> list with bootstrap table</h1> */}
        <Table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            <label> Robin</label>
          </td>
          </tr>
          <tr>
          <td>Roll No.</td>
          <td>
            <label>50</label>
          </td>
          </tr>
          <tr>
          <td>Registration no.</td>
          <td>
            <label>klp348764859</label>
          </td>
          </tr>
          <tr>
          <td>Course</td>
          <td>
            <label> MCA</label>
          </td>
          </tr>
          <tr>
          <td>Batch</td>
          <td>
            <label>2023</label>
          </td>
          </tr>
       
      </tbody>
    </Table>
        <br></br>

        <Table striped bordered>
      <thead>
        <tr>
          <th>Sr.no.</th>
          <th>Subject Name</th>
          <th>Subject Code</th>
          <th>Total Marks</th>
          <th>Marks Obtained</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <label> English</label>
          </td>
          <td>
          <label> ENG001</label>
          </td>
          <td>
          <label> 100</label>
          </td>
          <td>
          <label> 72</label>
          </td>
          <td>
          <label> B+</label>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <label> Mathematics</label>
          </td>
          <td>
          <label> Math002</label>
          </td>
          <td>
          <label> 100</label>
          </td>
          <td>
          <label> 93</label>
          </td>
          <td>
          <label> A+</label>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <label> Conputer science</label>
          </td>
          <td>
          <label> CS003</label>
          </td>
          <td>
          <label> 100</label>
          </td>
          <td>
          <label> 85</label>
          </td>
          <td>
          <label> A</label>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <label> Chemistry</label>
          </td>
          <td>
          <label> BIO004</label>
          </td>
          <td>
          <label> 100</label>
          </td>
          <td>
          <label> 65</label>
          </td>
          <td>
          <label> B</label>
          </td>
        </tr>
        <tr>
        <td>5</td>
          <td>
            <label> Physics</label>
          </td>
          <td>
          <label> PHY005</label>
          </td>
          <td>
          <label> 100</label>
          </td>
          <td>
          <label> 68</label>
          </td>
          <td>
          <label> B</label>
          </td>
        </tr>
      </tbody>
    </Table>
        <br></br>
    </div>
  )
}

export default List
