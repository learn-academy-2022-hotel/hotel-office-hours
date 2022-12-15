import React from "react"
import '../App.css'

const Roll = (props) => {
  return (
    <>
        <h1>Roll Tracker</h1>
        <div className="log">

          {props.rollLog.map((roll, index) => {
            return <p key={index} >{roll}</p>
          })}
        </div>
    </>
  )
}

export default Roll
