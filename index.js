#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1.computer will generate a random number. Done
//2.user input for guessing number. Done
//3. compare user input with computer generated number and show the result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 6."
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bold.greenBright("Congratulations! You guessed right number."));
}
else {
    console.log(chalk.bold.red("you guessed wrong number."));
}
