// Arrays Challenge
  // Questions to ask yourself
      // What is my input?
      // What is the datatype of the input?
      // What is the expected output?
      // What is the datatype of the expected output?
      // What are tools can I use to transform my input into the output?
      // Is the tool an accessor or a mutator?
  // Notes:
      // Test one tool out at a time
      // If something did not work, maintain notes on what output was given and why it does not work for your circumstance.
      // Once you have the expected output, go back and refactor.
      // Use variables to store values provided from accessors.
      // Use flags to your console.logs to help identify the printouts.
      // When chaining methods, ensure the data has been transformed into the approriate datatype to use the method.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
// using the mutator built-in method .push()
groceryList.push("soda")
console.log("added soda:", groceryList)
// output: 
    // added soda: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.
// using the accessor built-in method .concat()
console.log("added granola:", groceryList.concat("granola"))
// output:
    // added granola: [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]
// console.log(groceryList)
// output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log("subset:", groceryList.slice(0, 2))
// output: 
    // subset: [ 'chips', 'dip' ]
// console.log(groceryList)
// output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
// store the data from the accessor built-in method
var snackList = groceryList.slice(0, 2)
// console.log("snack:", snackList)
// output:
    // snack: [ 'chips', 'dip' ]
snackList.push("beans")
console.log("added beans:", snackList)
// output:
    // added beans: [ 'chips', 'dip', 'beans' ]

// attempted to use the pop built-in method. This method did not produce the expected output. Maintaining the work for notes.
  // adding the "beans" value to the array
  // groceryList.push("beans")
  // console.log("beans:", groceryList)
  // output: beans: [ 'chips', 'dip', 'cookies', 'soda', 'beans' ]

  // pop is a mutator that removes the last value. 
  // Incorrect format ---> 
      // console.log(groceryList.pop("cookies"))
        // because we specified to log what was pop we only get the element that was removed.
      // output: beans
        // even when requesting "cookies" to be removed, the pop method only removes the last value in the array.
  // Correct format ---> 
      // groceryList.pop()
      // console.log("pop:", groceryList)
      // output:
          // pop: [ 'chips', 'dip', 'cookies', 'soda' ]
    

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// output: 0

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// output: 5

// Write the code that returns the number at the third index.
console.log(numSet[3])
// output: 8


// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// output: "yarra"

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

// ****Look over the work flow before the refactored code****

// Step 
// Option1 for converting string into an array
    // can hard code the array with [] around the join() method
    // var charsReversed = [characters.join("")]
    // console.log(charsReversed)
    // output: [ 'yarra' ]
        // This is not fulfilling the output requested from the prompt. This is just showing how to convert the data into an array

// Option 2 for converting string into an array
  // Best practice is to use the built-in method
  // saving the output from the accessor methods in a variable
    // array to a string
        // var charsString = characters.join("")
        // console.log(charsString)
        // output: "yarra"

  // string to array with separate characters as strings
      // var charsArray = charsString.split("")
      // console.log(charsArray)
      // output: [ 'y', 'a', 'r', 'r', 'a' ]

// Reversing the order of the values in the array
    // var charsReversed = charsArray.reverse()
    // console.log(charsReversed)
    // output: [ 'a', 'r', 'r', 'a', 'y' ]

// Refactor by chaining the methods on one line
  var charsReversed = characters.join("").split("").reverse()
  console.log(charsReversed)
  // output: [ 'a', 'r', 'r', 'a', 'y' ]

