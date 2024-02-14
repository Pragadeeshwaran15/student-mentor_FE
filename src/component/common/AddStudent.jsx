import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import TopBar from './TopBar';
import Button from 'react-bootstrap/Button';
import { API_URL } from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddStudent() {

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [batch,setBatch]=useState("")
let navigate = useNavigate()


const handlesubmit=async()=>{
    try {
      let data ={name,email,batch}
        let res=await axios.post(`${API_URL}/student`,data)
        if(res.status===200){
             navigate("/student")
        }
    } catch (error) {
        console.log(error);
    }
}    
  return <>
  <div className="container-fluid">
<TopBar/>
<div className="form">
<Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter student name" onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" onChange={(e)=>{setBatch(e.target.value)}}>
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch" />
      </Form.Group>
      <Button variant="primary"  onClick={()=>handlesubmit()}>Submit</Button>
    </Form>
</div>
  </div>
  </>
}

export default AddStudent
