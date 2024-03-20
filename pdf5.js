/*Question 1*/

// Take two numbers as input
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

// Add the numbers
var sum = num1 + num2;

// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

/*Question 2*/

 // Take two numbers as input
 var num1 = parseInt(prompt("Enter the first number:"));
 var num2 = parseInt(prompt("Enter the second number:"));

 // Perform arithmetic operations
 var sum = num1 + num2;
 var difference = num1 - num2;
 var product = num1 * num2;
 var quotient = num1 / num2;
 var remainder = num1 % num2;

 // Display the results in the browser
 document.write("<p>Sum: " + num1 + " + " + num2 + " = " + sum + "</p>");
 document.write("<p>Subtraction: " + num1 + " - " + num2 + " = " + difference + "</p>");
 document.write("<p>Multiplication: " + num1 + " * " + num2 + " = " + product + "</p>");
 document.write("<p>Division: " + num1 + " / " + num2 + " = " + quotient + "</p>");
 document.write("<p>Modulus: " + num1 + " % " + num2 + " = " + remainder + "</p>");

 /*Question 3*/
 // Declare a variable
 var num;

 // Show the value after variable declaration
 document.write("Value after variable declaration is: " + num + "<br>");

 // Initialize the variable with some number
 num = 5;

 // Show the initial value of the variable
 document.write("Initial value: " + num + "<br>");

 // Increment the variable
 num++;

 // Show the value after increment
 document.write("Value after increment is: " + num + "<br>");

 // Add 7 to the variable
 num += 7;

 // Show the value after addition
 document.write("Value after addition is: " + num + "<br>");

 // Decrement the variable
 num--;

 // Show the value after decrement
 document.write("Value after decrement is: " + num + "<br>");

 // Show the remainder after dividing the variable's value by 3
 var remainder = num % 3;
 document.write("The remainder is: " + remainder + "<br>");

 /*Question 4*/
 
 // Cost of one movie ticket
 var ticketPrice = 600;

 // Number of tickets
 var numberOfTickets = 5;

 // Calculate the total cost
 var totalCost = ticketPrice * numberOfTickets;

 // Display the output
 document.write("Cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

 /*Question 5*/

  // Number whose multiplication table is to be displayed
  var number = 5;

  // Display the multiplication table
  // Number whose multiplication table is to be displayed
  var number = 5;

  // Display the multiplication table
  document.write("<h2>Multiplication Table of " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }