import React, {useState} from "react"
import "../App.css"

  const Box = () => {

    const [color, setColor] = useState("white")

    const [rainbow, setRainbow] = useState(
      ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    )

    const colorChanger = () => {
      const randomNum = Math.floor(Math.random() * rainbow.length)
      setColor(rainbow[randomNum])
    }

    return (
      <>
        <div 
          className="box" 
          onClick={colorChanger}
          style={{ backgroundColor: color}}
        >
        </div>
      </>
    )

  }

  export default Box
 