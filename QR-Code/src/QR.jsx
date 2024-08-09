import React, { useState } from 'react'

export const QR = () => {
  const[img,setImg]=useState("");
  const[load,setLoad]=useState(false);
  const[qr,setQr]=useState("");
  const[size,setSize]=useState(0);
  async function Gen(){
    // var data="https://www.linkedin.com/in/praveen-dhamodharan-149729231/";
    setLoad(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qr)}&&%20size=${size}x${size}`;
      setImg(url);
      console.log(size)
    }
    catch(error)
    {
      console.log("Errors Founds "+error);
    }
    finally{
     setLoad(false);
    }
    
  }
  const Down=()=>{
      fetch(img)
        .then((res)=>res.blob())
        .then((blob)=>{
          const link =document.createElement('a');
          link.href=URL.createObjectURL(blob);
          link.download="tpqr.txt";
          document.body.appendChild(link);;
          link.click();
          document.removeChild(link);
        })
  }
  return (
    <>  
      
        <div className='cont'>
              <h1>QR Code Generator</h1>
              {load && <p>Please wait...</p>}
              {img &&  <img src={img} className='img'/>}
            <label htmlFor="dataInput" className='inp-lab'>
                Data for QR  Code:
            </label>
            <input type="text" id='dataInput' placeholder='Enter URL...' className='inp'
              onChange={(e)=>setQr(e.target.value)}/>
            <label htmlFor="image-inp" className='inp-lab'>
                Image size (e.g., 150):
            </label>
            <input type="text" id='image-inp' placeholder='Enter image size...' className='inp'
              onChange={(e)=>setSize(e.target.value)}/>
            <div >
              <button className='gen' onClick={Gen}>Generate QR Code</button>
              <button className='dn'  onClick={()=>Down()}>Download QR Code</button>
            </div>
        </div>
    </>
  )
}
