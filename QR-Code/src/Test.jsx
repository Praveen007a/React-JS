import { useEffect, useState } from 'react'
import './Test.css'
import axios from 'axios';

export const Test = () => {
  const[students,setStudents]= useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const response= await axios.get("http://localhost:8080/mess")
        setStudents(response.data);
        console.log(response.data);
      }catch(error){
        console.log(error+" fetching data");
      }
    }
    fetchData();
  })
  
  return (
    <>
      <h1>Springboot and react</h1>
      <h4>{students}</h4>
    </>
  )
}
