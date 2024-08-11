import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const url="http://localhost:8080/students";
  const[name,setName]=useState("");

  useEffect(()=>{
    fetch(url).then((res)=>res.json)
      .then((res)=>console.log(res));
  })

  return (
    <>
      
    </>
  )
}

export default App
