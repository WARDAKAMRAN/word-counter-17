#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answer.Sentence.trim().split(" ");
// print the arry 0f words to the console
console.log(words);
// print the arry of word sentance to the word console
console.log(` your Sentence word count is ${words.length}`);
