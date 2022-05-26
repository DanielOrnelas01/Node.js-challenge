// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'whats your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run this application?'
    },
    {
        type: 'list',
        choices: ['MIT', 'GNU', 'Apache'],
        name: 'license',
        message: 'what license would you like with your application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to this application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this application?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'do you have any questions about this application?'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('readme.md', data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    const markdown = generateMarkdown(answers);
    console.log(markdown)
    writeToFile(markdown)
  })
  .catch((error) => {
   console.log(error)
  });
}

// Function call to initialize app
init();
