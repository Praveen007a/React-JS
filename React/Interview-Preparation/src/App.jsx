import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("https://api.agify.io/?name=praveen")
      // .then((response)=> console.log(response.data))
      .then((data)=>console.log(data))
      .then((data)=>console.log(data.age))
  });

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default App;
