import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { API_URL } from '../../App';
import Button from 'react-bootstrap/Button';
import TopBar from '../common/TopBar';
function Student() {

    let [data,setData]=useState([])

//getting mentor data

const getData=async()=>{
    try {
        let res=await axios.get(`${API_URL}/student`)
        if(res.status===200){
            setData(res.data.student)
            console.log(data)
        }
    } catch (error) {
        
    }
}

const handleDelte=async(id)=>{
    try {
        let res=await axios.delete(`${API_URL}/student/${id}`)
        if(res.status==200){
            getData()
        }
    } catch (error) {
        console.log(error);
    }
}


useEffect(()=>{
getData();
},[])
  return <>
  <div className="container-fluid">
  <TopBar/>
    <div className='mentorTable'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Batch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {

        data.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.batch}</td>
              <td>
                <div className='d-flex gap-2'>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" onClick={()=>handleDelte(e._id)}>Delete</Button>
                </div>
              </td>
            </tr>
        })
        
       }
      </tbody>
    </Table>
    </div>
  </div>
  </>
}

export default Student

