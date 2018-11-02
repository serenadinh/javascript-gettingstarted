// Lesson 1
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