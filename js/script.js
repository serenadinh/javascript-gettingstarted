// Lesson 1: Declaring variables
var myName = "Serena";
var myAge = 25;
var message = myName + ' is' + myAge;
alert (message);

//Lesson 2
// Exercise 1: Write a function 
function sayHello () {
	var response = prompt ("What is your name?");
	alert ("Hello" + response + "!");
}
//to activate the function, have to call a function 
sayHello ();

//Exercise 2: 
function sayGreeting (greeting) {
	var response = prompt("What is your name?");
	alert (greeting + "," + response + "!");
}
sayGreeting("Good morning"); // passing information into a function is also known as passing an argument to a function 

//Lesson 3: Function
//Pass function, after it's done running, can also a return a function. 
//Function can accepts multiple parameters
//adding 
function add(a,b) {
	return a + b; //return value from a function, using "return" keyword
}
console.log( add(20, 30) );
console.log( add(120, 310) );
//multiply
function multiply (a,b) {
	return a * b;
}
console.log ( multiply (150, 30) ); 
//exercise
function add10 (num) {
	return num + 10;
}
add10(10);

//LESSON 4: ARRAY
var movies = ['Avengers', 'Wonder Woman', 'Black Panther', 'Iron Man'];
//to access a single value in the array, we use 'index value', first item is 0. 
movies.push('Lady Bird'); // adding one more to the array
movies.pop (); // removing the last item in the array
console.log (movies [0]); //to call out an item in the array: console.log + array name + number of the item
console.log (movies);
//Exercise 
var snacks = ['fries', 'apple', 'chocolate'];
console.log(snacks[0]);
console.log(snacks[2]);

//LESSON 5: LOOPS
//Loops: repeat an action a number of times 
//#1 : for each loop
var movies = ['Avengers', 'Wonder Woman', 'Black Panther', 'Iron Man'];
movies.forEach(function(movie) {
	alert (movies);
}); //call back function 

//shorter way of writing this function by using =>
movies.forEach(movie => alert (movie)); 

//for of loop
for (var movie of movies) {
	console.log (movie);//provide statement to be carried out 
}
//explaination: for every movie of the movie array, log it to the console

//LESSON 6: Common Loops and Iteration Methods
/*For loops are frequently used for actions that need to run a particular number of times.
The for loop consists of three optional expressions, enclosed in parentheses and separated by semicolons, 
followed by the code that should run each time the condition remains true.
*/
for ( let counter = 1; counter < 10; counter++) {
  console.log( counter );
} 
// logs 1, 2, 3, 4, 5, 6, 7, 8, 9

const fruits = ['apple', 'pear', 'cherry'];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// logs apple, pear, cherry

/*
while
The while loop repeats a block of JavaScript code until a particular condition is no longer true. 
For example, in this code, we start with a variable named counter. 
At the beginning of the loop, the JavaScript interpreter compares the value in the counter variable to 10. 
If the value inside counter is less than 10, the loop runs.
*/
var counter = 1;
while (counter < 10 ) {
  console.log( counter );
  counter = counter + 1;
}
/*The loop logs the value inside the counter variable to the console, then increases the value inside counter by 1. 
After going through the loop 10 times, the counter value is set to 10, the condition is false and the loop is done.
*/

//do...while
/*
The do...while loop is closely related to the while loop. do...while creates a loop that executes a statement until the test condition 
evaluates to false.

The main difference between while and do...while is that do...while doesn't check the condition until the code block has run once. 
Then, if the condition is true, it runs again...and again...until the condition is no longer true.
*/
var counter = 1;
do {
  counter = counter + 1;
  console.log( counter );
} while (counter < 10);

//map ()
/*
The map() array iteration method is used to transform each item in an array into something else, 
leaving the original array unchanged. For example, this code will capitalize all the words within the fruits array:
*/
const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ]

// Exercise: Using forEach, iterate over the numbers array and multiply each number by 5, storing these new numbers in the times5 array.
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times5 = [];
numbers.forEach (function(number) {
	times5.push(number * 5);
});
console.log(times5);

//LESSON 7: OBJECT & CONDITIONAL
//store and access data 
var movie = {
	title: 'Wonder Woman',
	time: '2pm'
};
alert (movie.title = 'Avengers');
movie.status = 'unavailable';
console.log(movie); 
