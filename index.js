// 1- Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

// Helpful Notes:

// Your function can be a function expression or a function declaration.
// Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
// Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.

function greetWorld() {
  return ('Hello, World!')
}

console.log(greetWorld())

// 2-The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

const canIVote = (age) => {
  if (age >= 18) {
  return true
} else {
  return false
}}