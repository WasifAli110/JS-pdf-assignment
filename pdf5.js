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

  /*Question 6*/

  // Store a Celsius temperature into a variable
let celsius = 28;

// Convert Celsius to Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Output the result
console.log(`${celsius}°C is ${fahrenheit}°F`);

// Store a Fahrenheit temperature into a variable
let fahrenheitTemp = 82;

// Convert Fahrenheit to Celsius
let celsiusTemp = (fahrenheitTemp - 32) * 5/9;

// Output the result
console.log(`${fahrenheitTemp}°F is ${celsiusTemp}°C`);

/*Question 7*/

// Store the prices and quantities of the items
let priceItem1 = 10.50;
let priceItem2 = 5.25;
let quantityItem1 = 2;
let quantityItem2 = 3;
let shippingCharges = 3.50;

// Calculate the total cost
let totalCostCheckout = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Item 1: $" + priceItem1 + " x " + quantityItem1 + " = $" + (priceItem1 * quantityItem1).toFixed(2) + "</p>");
document.write("<p>Item 2: $" + priceItem2 + " x " + quantityItem2 + " = $" + (priceItem2 * quantityItem2).toFixed(2) + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
document.write("<h3>Total Cost: $" + totalCostCheckout.toFixed(2) + "</h3>");

/*Question 8*/

// Store total marks and marks obtained
let totalMarks = 500;
let marksObtained = 435;

// Compute percentage
let percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

//Question 9//
let totalUSDollars = 10;
let totalSARiyals = 25;
let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;

let totalInPakistaniRupees = (totalUSDollars * exchangeRateUSD) + (totalSARiyals * exchangeRateSAR);
console.log(totalInPakistaniRupees);

//Question 10//

var number = 10;

var result = (((number + 5) * 10)/2);

console.log("Result:",result);

//Question 11//

var currentYear = 2016;

var birtYear = 1992;

var age = 24

console.log("CurrentYear:",currentYear);
console.log("BirthYear :",birtYear);
console.log("Age   :",age);

//Question 12//

document.write("<h1>The Geometrizer</h1>")

var radius = 20;


var circumference = 2 * Math.PI * radius;

var area = Math.PI * radius * radius;


document.write ("The circumference is" + circumference.toFixed(2));
document.write("<br>The area is" + area.toFixed(2));

//Question 13//
document.write ("<h1>The Lifetime Supply Calculator</h1>")
let favoriteSnack = "chocolate chip";


let currentAge = 15;


let maximumAge = 65;
let oldAge = 65;

let amountPerDay = 3;

let remainingYears = maximumAge - currentAge;
let totalAmountNeeded = remainingYears * 365 * amountPerDay;

document.write("favoriteSnack :" , favoriteSnack);
document.write("<br>currentAge    : " , currentAge);
document.write("<br>maximumAge    : " , maximumAge);
document.write("<br>amount of snack PerDay :" , amountPerDay);
document.write("<br>You will need 150 chocolate chip to last you until the ripe old age " , oldAge);
