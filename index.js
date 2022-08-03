// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["MIT", "Apache 2.0", "IBM-IPL 1.0", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile("./potential-enigma-readme/readme.md", fileName, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File created!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt;
}

// Function call to initialize app
init();
