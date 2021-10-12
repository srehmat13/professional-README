// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        default: 'npm i'

    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing instructions:'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Test your application'
    },

    {
        type: 'text',
        name: 'github',
        message: 'What is your github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your current email?'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to making this project?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Creative Commons', 'ISC']

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(`${data.title}.md`, generateMarkdown ({...answers}))
    })
    .catch(error => console.log(error)) 
    }

// Function call to initialize app
init();
