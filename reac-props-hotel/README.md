## Getting Started with Create React App

- cd into the react-challenges repository
- Create a new branch: props-initials1-initials2 (ex. props-aw-sp)
- Create a new React application with no spaces: yarn create react-app props-student1-student2 (ex. yarn create react-app props-austin-sarah)
- cd into the project
- Open the project in a text editor
- Create a directory in src called components
- Code!

## Challenge: Dice Roller
- As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.

- When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

📚 User Stories
## As a user, I can see a square box on the screen with a black border and a white background. 

  ### Create an outline for App.js based on image on challenge
    - template of functional component

    https://github.com/learn-academy-2022-hotel/Syllabus/blob/main/react/create-react-app.md 

    ```javascript
      import React from "react"

      const App = () => {
        return (
          <>
            <h1>Hello World!</h1>
          </>
        )
      }

      export default App
    ```
    - App.js
      - Dice Roller
      - rectangular box with two rectangular boxes beside each other
    - components folder 
      1. Dice.js
        - square box
        - Click Dice to Roll
      2. Roll.js
    - create declarations in App.css for rectangle container and rectangles nested inside it
    https://www.w3schools.com/css/css_grid.asp


  ### Commit work to track changes per user story
  Note: cd out to repo level (gitHub repo)
  - $ cd ..
  - $ git status
  - $ git add <folder/repo or file name>
  - $ git commit -m "created boxes using css grids, App.js, Dice.js, Rool.js"
  Note: cd back into project level
  - $ cd <folder/repo name>

As a user, I can click on the box to roll the dice and see the result of my roll in the box.
- store data on App.js and pass props to Dice.js
- react state for diceRoll, initial value will be string that states the box is the dice
- function for rolling the dice
  - name rollThat Dice
  - create a random number that will represent the index of array containing number values to represent the sides of a dice
  - set function to update the value of the diceRoll to become the value at the index of the dice array
```javascript
  const [diceRoll, setDiceRoll] = useState("Dice")
  const dice = [1, 2, 3, 4, 5, 6]

  const rollThatDice = () => {
    const rolling = Math.floor(Math.random() * dice.length)
    setDiceRoll(dice[rolling])
  }
```
- add onClick attribute to perform function call on Dice.js

## As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
  - store data on App.js and pass props to Roll.js
  - react state for rollLog, initial value empty array to store the values produced for the diceRoll
  - modify rollThatDice function to update the array with the diceRoll
  - copy the current state of rollLog then add the value of diceRol1
  - remember to encapsulate the argument with []. You will get an error stating values are not iterable
  ```javascript
    const [rollLog, setRollLog] = useState([])

    const rollThatDice = () => {
      const rolling = Math.floor(Math.random() * dice.length)
      setDiceRoll(dice[rolling])
      setRollLog([...rollLog, diceRoll])
    }
  ```
  - map the array to display each value in the rollLog array
  - to clear the warning due to mapping in react, give unique identifier as index `key={index}`

🏔 Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.
🗂 Assets - download and save in assets folder on application