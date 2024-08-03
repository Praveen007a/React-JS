import { useState } from 'react';
import './App.css'

function App() {
  const[colorType,setColorType]=useState('hex');
  const [color,setColor]=useState('#000000');
  
  const num=(len)=>{
    return Math.floor(Math.random()*len);
  }

  const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  const col=["red","green","yellow","cyan","blue","black","gold","orange","white","pink"];
  
  const changeCol=()=>{
    setColor(col[num(col.length)]);
    setColorType("Random Color")
  }
  const changeHex=()=>{
    let str="#";

    for(let i=0;i<6;i++){
      let index=hex[num(hex.length)];
      str +=index;
    }
    setColor(str);
    setColorType('hex');
  }
  const changeRgb=()=>{
    const r=num(255);
    const g=num(255);
    const b=num(255);

    setColor(`rgb(${r},${g},${b})`);
    setColorType('rgb');

  }
  

  return (
    <div style={
      {
        height:'100vh',
        width:'100vw',
        background:`${color}`,
        textAlign:'center'

      }
    }>
      <button onClick={()=>changeHex()}>Change Hex Color</button>
      <button onClick={()=>changeRgb()}>Change RGB Color</button>
      <button onClick={()=>changeCol()}>Generator Random Color</button>
      {colorType==='hex' ? 
      <div>
        <h1>{colorType}</h1>
        <h1>{color}</h1>
      </div> 
      : 
      <div>
        <h1>{colorType}</h1>
        <h1>{color}</h1>
      </div> }
    </div>
  )
}

export default App
