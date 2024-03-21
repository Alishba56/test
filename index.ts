#!  /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "opertor",
    choices: ["addition", "subtraction", "multiplication", "Division"],
  },
]);

//conditional statement
if (answer.opertor === "addition") {
  console.log(/*"your value is "+*/ answer.firstnumber + answer.secondnumber);
} else if (answer.opertor === "subtraction") {
  console.log(/*"your value is "-*/ answer.firstnumber - answer.secondnumber);
} else if (answer.opertor === "multiplication") {
  console.log(/*"your value is "**/ answer.firstnumber * answer.secondnumber);
} else if (answer.opertor === "division") {
  console.log(/*"your value is "/*/ answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}

console.log("THE END")
