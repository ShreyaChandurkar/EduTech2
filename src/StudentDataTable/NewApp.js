import React from 'react'
import { useState } from 'react';
import "./NewApp.css";

function NewApp() {

    const [inputarr, setInputarr]=useState([])

    const [inputdata, SetInputdata]=useState({rollNo:"", name:""})

    function changehandle(e){

      SetInputdata({
        ...inputdata,
        [e.target.name]: e.target.value
      })
      console.log(inputdata)
    }

    let{name,rollNo}=inputdata;
    function changehandle1(){
      setInputarr([...inputarr,{rollNo,name}])
      console.log(inputarr)
      console.log(inputdata)
      SetInputdata({ rollNo:"", name:""})
    }

    // function changehandle2(){
    //   console.log("object store in array",inputarr)
    // }

  return (
    <div className='App'>

        <input 
          type='text' 
          autoComplete='off'
          name='rollNo'
          value={inputdata.rollNo} 
          onChange={changehandle} 
          placeholder='Enter Roll No.'></input> <br/>

        <input 
          type='text' 
          autoComplete='off'
          name='name' 
          value={inputdata.name} 
          onChange={changehandle} 
          placeholder='Enter Name'></input> <br/>
        
             

        <button onClick={changehandle1}>Add it</button><br/>
        {/* <button onClick={changehandle2}>Check Array in console</button><br/> */}

        <table border={1} width="30%" cellPadding={15}>
          <tbody>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
          </tr>
          {
            inputarr.map(
              (info,ind)=>{
                return(
                  <tr key={ind}>
                    <td>{info.rollNo}</td>
                    <td>{info.name}</td>
                  </tr>
                )
              }
            )
          }   
          </tbody>    
        </table>
    </div>
  )
}

export default NewApp
