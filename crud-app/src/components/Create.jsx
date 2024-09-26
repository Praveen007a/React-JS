import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link, useNavigate} from 'react-router-dom'

export const Create = () => {
  const[values,setValue]=useState(
    {
      name:'',
      email:'',
      contact:''
    }
  )
  const nav=useNavigate();
  const submit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:3006/users",values)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    alert("User Successfully added...")
    nav('/');

  }
  console.log(values.contact)
  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={submit} className='form'>
        <label htmlFor="one">Name:</label>
        <input type="text" id="one" name='name' placeholder='Enter Name'
        onChange={e=>setValue({...values,name:e.target.value})}/>

        <label htmlFor="two">Email:</label>
        <input type="email" id="two" name='email' placeholder='Enter Email'
        onChange={e=>setValue({...values,email:e.target.value})}/>

        <label htmlFor="three">Contact:</label>
        <input type="text" id="three" name='contact' placeholder='Enter Mobile No' 
        onChange={e=>setValue({...values,contact:e.target.value})}/>

        <button>Submit</button>
        <Link to="/">Back</Link>
      </form>
    </>
  )
}
