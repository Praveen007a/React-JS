import { useState } from 'react'
import './Test.css'

export const Test = () => {
  const[count,setCount]=useState(0);
  const click=(e)=>{
      setCount(count+e);
  }
  const Nclick=(e)=>{
    setCount(count-e);
  }
  const Reset=()=>{
    setCount(0);
  }
  return (
    <>
      <div className='btn'>
          <button onClick={()=>click(1)}>+1</button>
          <button onClick={()=>click(2)}>+2</button>
          <button onClick={()=>click(5)}>+5</button>
          <button onClick={()=>Nclick(1)}>-1</button>
          <button onClick={()=>Nclick(2)}>-2</button>
          <button onClick={()=>Nclick(5)}>-5</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  )
}
