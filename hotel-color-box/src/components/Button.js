import React, {useState} from "react"
import "../App.css"
import Box from "./Box"

const Button = () => {
  
  const [cube, setCube] = useState([])

  const addBox = () => {
    setCube([...cube, cube.length + 1])
    // console.log(cube)
  }

  const removeBox = () => {
    setCube(cube.slice(0, cube.length - 1))
    // console.log(cube)
  }

  return(
    <>
      <button onClick={addBox}>Add a Box</button>
      <button onClick={removeBox}>Remove a Box</button>
      {cube.map((value) => {
        return(<Box/>)
      })}    
    </>
  )
}

export default Button