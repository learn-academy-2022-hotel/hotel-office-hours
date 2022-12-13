🟧 Challenge: Color Box
- As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.


## Setup
- cd into the appropriate repository
- Create a new branch: state-initials1-initials2 
- Create a new React application with no spaces: yarn create react-app state-student1-student2 
- cd into the project
- Start the server for react: $ yarn start
- Open the project in a text editor
- Create a directory in src called components
- Code!


📚 User Stories
- As a user, I can see a square box on the screen with a black border and a white background
  - Create a functional component in App.js
  - Import App.css
  - Create a custom class in css using border styling to make box

  ```javascript
  // App.js
  // imports
  import React from "react"
  import "./App.css"

  // declaration of the functional component
  const App = () => {

    // what you want to display on the screen
    return(
      <>
        <h1>Hotel Color Box</h1>
        <div className="box">
        </div>
      </>
    )
  }

  // allows this component to be seen by other components
  export default App
  ```
  <!-- App.css -->
  ```css
    /* box */
    .box {
      border: 10px solid black;
      height: 200px;
      width: 200px;
      margin: 0 auto;
    }

    /* header */
    h1 {
      text-align: center;
    }
  ```

As a user, I can see the default color name "white" inside the box
- import useState hook to store and update the state of the color name
  - instead of hard-coding or writing static data, 
    ```bash 
      <div className="box"> 
        white
      </div>
    ```
    we will dynamically reference the name of the color `{color}`
```javascript
// import useState
import React, {useState} from "react"
import "./App.css"

const App = () => {

  // data that you need for your component (functions, variables)
  const [color, setColor] = useState("white")

  // JSX will be used to reference the current state of the variable colorName
  return(
    <>
      <div className="box">
        {color}
      </div>
    </>
  )
}

export default App
```

As a user, every time I click on the box the name of a different color appears
Possible color names: red, orange, yellow, green, blue, purple, pink
- use an array to store colors as strings
- create a custom function to change the value of the colorName variable
  - use Math.random to produce a number that will be used to select the index of the different colors in the array
  - use the set() to change the state of the value being displayed
- onClick attribute to trigger the function (function invocation) when clicking the box
```javascript
  // stored values in an array as strings
  const rainbow = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
  // custom function that uses the random number produced by the Math.random() to abstract a value from the rainbow array
  const colorChanger = () => {
    const randomNum = Math.floor(Math.random() * rainbow.length)
    // set() will change the value stored in the color value to match the value that is abstracted from the rainbow array using bracket notation
    setColor(rainbow[randomNum])
  }

  // Indentation is an important aspect of web development. Mostly for readability. The div tag has been split into separate lines with its attributes nested inside.
  // onClick attribute added to invoke the colorChanger function
  return (
    <>
      <div 
        className="box"
        onClick={colorChanger}
      >
        {color}
      </div>
```

As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
- css inline styling, backgroundColor
```javascript
  // style attribute allows inline styling. The value of the background is dynamically referenced as the color value
    return (
    <>
      <div 
        className="box"
        onClick={colorChanger}
        style={{backgroundColor: color}}
      >
      </div>
    </>
  )
```

As a user, I can see many boxes on the page all acting independently of one another.
- place data in a different component
- import that component on App.js
- component call within the return

```javascript
  // Box.js
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
 

// App.js
// imports
import React from "react"
import Box from "./components/Box"

// declaration of the functional component
const App = () => {

  // what you want to display on the screen
  return(
    <>
      <Box />
      <Box />
      <Box />
    </>
  )
}

// allows this component to be seen by other components
export default App
```

🏔 Stretch Goals
As a user, I can start with no boxes on the screen
- remove component calls
```javascript
// App.js
  return(
    <>
    </>
  )
```

As a user, I can see a button to add a box
As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
- create a new component to store the button and its functionality
- add button tag
- onClick attribute to trigger function that will create boxes
- use spread operator to copy the current state and then replace with random color
```javascript
  // Button.js
  import React, {useState} from "react"
  import "../App.css"
  import Box from "./Box"

  const Button = () => {
    // useState variable to create an array with its current state as empty
    const [cube, setCube] = useState([])

    // create a function that will add a new value to the array every time a button is clicked
    const addBox = () => {
      // The set function will have two parameters. 1) The current array: The values in array are copied using the spread operator. 2) The new value: This value to add to the array is separated from the spread operation using a comma. 
      // syntax is set([...array, new value to add to array]) 
      // NOTE: New value in the set function is being used to change the length of the array.
      setCube([...cube, cube.length + 1])
      // If you would like to see the current state of the array before a value is added 
      // console.log(cube)
    }

    // within the return, a button using the onClick attribute will trigger the function that adds a value to the array. Then a map function will be used to iterate across the array causing a box to be displayed, which will represent each value in the array.
    return(
      <>
        <button onClick={addBox}>Add a Box</button>

        {cube.map((value) => {
          return(<Box/>)
        })}    
      </>
    )
  }

  export default Button

  // App.js
  import React, {useState} from "react"
  import Button from "./components/Button"

  const App = () => {

    return (
      <>
        <h1>Hotel Color Box</h1>
        <Button />
      </>
    )

  }
  
  export default App
```

As a user, I can see a button to remove a box
As a user, every time I click the remove button, I can remove the last box in the series
```javascript
  // Button.js
  // remove box
  const removeBox = () => {
    // The set function will use the slice method to return a new array with one less value. The syntax is array.slice(start, end)
    setCube(cube.slice(0, cube.length - 1))
    // console.log(cube)
  }

  // within the return, a button using the onClick attribute will trigger the function that removes a value from the array. Then a map function will be used to iterate across the array causing a box to be removed, which will represent each value in the array.
  return(
    <>
      <button onClick={addBox}>Add a Box</button>
      <button onClick={removeBox}>Remove a Box</button>
      {cube.map((value) => {
        return(<Box/>)
      })} 
    </>
  )
```

## Pushing changes to Remote Repo (github)
- cd back to the react challenges repo
- perform git flow to push changes to gitHub
