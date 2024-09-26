import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

export const Update = () => {
  const {id}=useParams();
  const nav=useNavigate();
  const[value,setValue]=useState({
    name:'',
    email:'', 
    contact:''
  });

  useEffect(()=>{
    axios.get('http://localhost:3006/users/' + id)
    .then(res=>setValue(res.data))
    .catch(err=>console.log(err))
  },[]);

  const submit=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3006/users/'+id,value)
    .then(res=>alert("updated successfully"))
    .catch(err=>console.log(err));
    nav('/');
  }
  return (
    <>
      <h2>Update User</h2>
      <form className='form' onSubmit={submit}>
        <label htmlFor="one">Name:</label>
        <input type="text" id="one" name='name' placeholder='Enter Name'
        value={value.name} onChange={e=>setValue({...value,name:e.target.value})}/>

        <label htmlFor="two">Email:</label>
        <input type="email" id="two" name='email' placeholder='Enter Email'
        value={value.email} onChange={e=>setValue({...value,email:e.target.value})}/>

        <label htmlFor="three">Contact:</label>
        <input type="text" id="three" name='contact' placeholder='Enter Mobile No' 
        value={value.contact} onChange={e=>setValue({contact:e.target.value})}/>

        <button>Update</button>
        <Link to="/">Back</Link>
      </form>
    </>
  )
}
