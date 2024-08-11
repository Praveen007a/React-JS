import React, { useEffect } from 'react'
import axios from 'axios'

export const Test = () => {
    useEffect(()=>{
        try{
            axios.get("http://localhost:8080/students")
            .then((res)=>console.log(res))
        }catch(error){
            console.log("Errors Found "+error);
        }
    })
  return (
    <div>Test</div>
  )
}
