# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

📚 User Stories

> As a user, I can see a square box on the screen with a black border and a white background.

- Pseudo code:
- We want to have a square box return on the screen
- The way we want to go about this is create a <div> within my fragments
- We chose the route of doing some inline styling to my div tag giving it a solid black border. I could have given my <div> a className and called on it in my css file.

> As a user, I can click on the box to roll the dice and see the result of my roll in the box.

- Pseudo code:
- Dice:
- Our dice will live in a component file inside of our components folder named Dice.js (child component)
- We want to create a square from the steps that we preformed above to be our dice but add height and width to give it a square dimension like a real dice
- We will then return it in our parent component <Dice/>
- In our parent component, we want to declare our dice's values (const dice = [1, 2, 3, 4, 5, 6]) in an array
- Back in App.js (parent component), we want to create a state that will hold our outputs from the dice rolls (diceRoll)
  - STATE will hold our inital values (like a Bank) [diceRoll, setDiceRoll] = useState("")
  - PROPS will be able to access our state (like an ATM) and pull the information to our child component (Dice.js)
- Rollng a dice is random. How can we do that?
- We will add the method to make our dice rolls return randomly like a real dice roll (it will live in the parent component and we will name it rollThatDice)
- For random outputs, we want to use a function and name it rolling with Math.floor(Math.random()) and multiply it by the length (.length) of our dice array
- We will then update our state of diceRoll using setDiceRoll method passing to it an argument of dice and the function we made named rolling
- In our component call (<Dice/>) we will then pass the values from state so that the props successfully pass to the child component Dice.js (rollThatDice={rollThatDice} and diceRoll={diceRoll})
- In our Dice component, we want to pass the props into const Dice = (props) => and create an onClick attribute within the <div> tag so that the excecution happens on the click of the dice (onClick={props.rollThatDice})
- Inside of the <div> we also want to pass {props.diceRoll} for the display of the dice roll
- We may also want to give the user an indicator or label so they know that the dice is clickable (maybe we will use an <h2>)

> As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.

- Pseudo code:
- For this we will want to make another component file in our component folder named Roll.js
- But our rolls tracker will need a little more info. In the parent component, we will need a way for this to store the data from the last roll and track it
- We will need to declare a rollLog state with an empty array
- It will need to track the data being passed in our rollThatDice method, so it will update state in there being passed to it is an array with [the spread operator and rollLog, diceRoll]
- We will then return <Roll/> with the values being passed from state as rollLog={rollLog}
- We want a running log of the rolls to track and not just the current one, so in our child component we will pass the props in an iterating way (our input is an array of numbers on our dice and we want our output to be another array with all of the rolls)
- For us to do this, we want to map over our passed props and return a component invocation
- We will pass (roll, index) to our interation and we need it to return our rolls in a <p> tag with a key of index and inside of the tags {roll}

🏔 Stretch Goals

> As a user, I can see the image of a dice face when I roll the dice.

- Pseudo code:
- In order for us to incorporate pictures, we first need to create a new folder for them to live in and we will call that assets (because pictures are an asset to our react app)
- The pictures will be brought over to our assets folder then named and given (.png) to them
- Oce settled in their folder, we will then go back into our parent component file and import our picture files
- After we import our 6 dice face images, we then want to replace those values we passed into our declaration of dice array
- In our Dice component, we will then want to bring over the props and create an image tag

> As a user, I can click a restart button that clears my roll log.

- Pseudo code:
- First we will create a button in the Dice component
- Then we want to create a method (restartGame) that will handle restarting your roll log in the parent component
- This method will reset our state of rollLog by setting it back to an empty array
