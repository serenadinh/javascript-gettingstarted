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

//Lesson 4: Array 
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