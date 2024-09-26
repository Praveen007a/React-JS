import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link, useNavigate, useParams} from 'react-router-dom'
import { Read } from './Read'
import axios from 'axios'
import {} from 'bootstrap'



export const Home = () => {
  const {id}=useParams();
  const nav=useNavigate();
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3006/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  },[])

  const del=(id)=>{
    const confirm=window.confirm("Would you delete the record!");
    if(confirm){
      axios.delete("http://localhost:3006/users/"+id)
      .then(res=>location.reload())
      .catch(err=>console.log(err))
    }
  }

  return (
    <>
    <h1>Users</h1>
      <div>
        <Link to="/create">Add User</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>(
            <tr key={i}>
              <td>
                {i}
              </td>
              <td>
                {user.name}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.contact}
              </td>
              <td>
                <div>
                  <Link to={`/update/${user.id}`}>Update</Link>
                </div>
              </td>
              <td>
                <button onClick={e=>del(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
