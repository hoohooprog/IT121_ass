/* this is a program, a continuation on w2 assignment, with the addition of prompting for
   values and conversion of variable type using parseInt. 
   The end result will display contents on page similar to w2 assignment: 
   Hi, {user}! The sum of {num1} + {num2} is {total}
*/

let num1;
let num2;
let total;
let user_name;
 
// tells user what game is going on, followed by a new line asking for his name
user_name = prompt("Let's play the sum game.\nPlease enter your name");
num1 = prompt("Enter first number");
num2 = prompt("Enter second number");

document.write(`Hi, ${user_name}! The sum of ${num1} + ${num2} is ${(parseInt(num1) + parseInt(num2))}`);



