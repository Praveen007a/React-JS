import { useState } from "react";

export const Demo=()=>{
    const [name,setName]=useState("");
    const [names,setNames]=useState([]);

    const fun=()=>{     
        console.log("first")
    }

    return(
        <>
            <h1>Names</h1>
            <input type="text" />
            <button onClick={fun()}>Submit</button>
        </>
    )
}