import React from 'react'
import { useEffect, useState } from "react";

const MapFilter = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((response)=>setUsers(response))
        
    },[]);
    const mapArray=()=>{
      let newarr=users.filter((user)=>user.id >=5 );
      console.log(newarr);
      setUsers(newarr);
    }
  return (
    <>
      <h1>Users</h1>
      {users.map((user,id)=>(
        <div className="body">
          <div className="tp">
              {user.id>=5 ? 
              <div>
                 <p key={id}>{user.name}</p>
                 <p key={id}>{user.username}</p>
              </div> 
              : 
              <div>
                <p key={id}>{user.address.street}</p>
              </div> }
          </div>
        </div>
      ))}
      <button onClick={()=>mapArray()}>Show Mapped Array</button>
    </>
  )

}

export default MapFilter;
