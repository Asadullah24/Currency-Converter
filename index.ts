import inquirer from "inquirer";
import chalk from "chalk";
let conversion = {
  PKR: {
    USD: 0.0036,
    PKR: 1,
    GBP: 0.0036,
  },
  GBP: {
    USD: 1.27,
    PKR: 355.61,
    GBP: 1,
  },
  USD: {
    PKR: 279.81,
    USD: 1,
    GBP: 0.79,
  },
};
let answer: {
  from: "USD" | "PKR" | "GBP";
  to: "USD" | "PKR" | "GBP";
  Amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    choices: ["PKR", "USD", "GBP"],
    message: "Enter your currency",
  },
  {
    type: "list",
    name: "to",
    choices: ["PKR", "USD", "GBP"],
    message: "Enter conversion currency",
  },
  {
    type: "number",
    name: "Amount",
    message: "Enter the Amount",
  },
]);
const { from, to, Amount } = answer;
if (from && to && Amount) {
  let a = conversion[from][to] * Amount;
  console.log(chalk.red(a));
} else {
  console.log("Invalid input");
}
