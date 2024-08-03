import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[theme,setTheme]=useState("black");
  const[color,setColor]=useState("white");
 

  const light=()=>{
    setColor("black");
    setTheme("white");
  }
  const dark=()=>{
    setColor("white");
    setTheme("black");
  }
  return (
    <>
        <div style={{
          height:'100vh',
          width:'100vw',
          background:`${theme}`,
          color:`${color}`,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          flexDirection:'column'
        }}>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt maiores? Accusamus ullam autem vitae architecto minima ipsa ab sapiente, aliquid rem explicabo eveniet corporis provident, quam, ut cupiditate officia!

          </h2>
          <div style={{
            display:'flex',
            gap:'20px',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center'
          }}>
            <button onClick={light}>Light Mode</button>
            <button onClick={dark}>Dark Mode</button>
          </div>
        </div>
    </>
  )
}

export default App
