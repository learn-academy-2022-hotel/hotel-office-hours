// map 
  // - produces the same length as the original array
  // - iterating across the value, index, array

// filter
  // - produces subset of the original array
  // - subset based on a condition
  // - iteration and a conditional statement

  // write a function that gives every other person socks because it is freezing and they are not friends with Dominque. The return value will be an array with statements "Here are some socks, <name>".
  let afterHours = ["Torin", "Dominque", "Monica", "Molly", "Aileen", "Matt", "Oscar"]
        // index --->  0        1           2         3       4         5       6
        // length ---> 1        2           3         4       5         6       7

  // PSEUDOCODE
  // declare a function named warmFeet
  // input - an array of strings, parameter named array
  // output - an array of the same length with statements
    // ["Here are some socks, Torin", "Here are some socks, Monica", "Here are some socks, Aileen", "Here are some socks, Oscar"]
    // string interpolation to include the name in the return statements
    // perform iteration to access the values(names) inside the array, using for loop to give a number to represent the index in the array,
    // the iteration will increase by 2 skip over an index 


  // FUNCTION
  const warmFeet = (array) => {
    // use an empty array to collect the values created from the logic in the for loop
    let newArray = []
    // (start(initialization); stop(range); increment/decrement(iteration))
    for(let i = 0; i < array.length; i = i + 2 ) {
       newArray.push(`Here are some socks, ${array[i]}`)
    // console.log(newArray)
    } 
    // return the array after the logic within the for loop is complete
    return newArray
  }

  // FUNCTION CALL
  console.log(warmFeet(afterHours))
  // output: 
  // [
  //   'Here are some socks, Torin',
  //   'Here are some socks, Monica',
  //   'Here are some socks, Aileen',
  //   'Here are some socks, Oscar'
  // ]

// REFACTOR using high order function

// This solution has the explanation of what is being replaced on the for loop example by the high order function

// PSEUDOCODE
// use filter because we are returning subset of the original array
// the condition will be looking for even number indexes

// // Function
// const hotFeet = (array) => {
//   // let newArray = [] ---> no longer required due to filter returning an array
//   // (start(initialization); stop(range); increment/decrement(iteration))
//   // for(let i = 0; i < array.length; i = i + 2 ) {
//   //    newArray.push(`Here are some socks, ${array[i]}`)
//   //    console.log(newArray)
//   // }  ---> because filter will access the indexes and give the condition to be met for the indexes, we will not need for loop to count
  
//   // store the subset of the array created by filtered in a variable
//   let sockPeople = array.filter((value, index) => { 
//     return index % 2 === 0  
//   })
//   // return the statement with each value in the array
//   return sockPeople.map((value) => {
//       return`Here are some socks, ${value}`
//   })

//   // return newArray ---> no longer required because filter will return an array
// }



// This solution is showing the high order functions without explanation

// Function with high order functions
const hotFeet = (array) => {
  // store the subset of the array created by filtered in a variable
  let sockPeople = array.filter((value, index) => { 
    return index % 2 === 0  
  })
  // return the statement with each value in the array
  return sockPeople.map((value) => {
      return`Here are some socks, ${value}`
  })
}

// FUNCTION CALL
console.log(hotFeet(afterHours))

// output:
// [
//   'Here are some socks, Torin',
//   'Here are some socks, Monica',
//   'Here are some socks, Aileen',
//   'Here are some socks, Oscar'
// ]


// REFACTOR removing unnecessary syntax and chaining methods
const cozyFeet = (array) => {
  // removed {} and return in the high order functions and return everything on one return statement
  // return array.filter((value, index) =>  index % 2 === 0).map(value => `Here are some socks, ${value}`)

  // placed the filter and map high order functions on separate lines for readability
  return array
    .filter((value, index) =>  index % 2 === 0)
    .map(value => `Here are some socks, ${value}`)
}

// FUNCTION CALL
console.log(cozyFeet(afterHours))

// output:
// [
//   'Here are some socks, Torin',
//   'Here are some socks, Monica',
//   'Here are some socks, Aileen',
//   'Here are some socks, Oscar'
// ]