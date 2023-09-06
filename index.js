// Include the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create array of questions to ask the user to create their logo

const userPrompt = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter some text to be included in your new logo:'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a (common) color that you would like the text to be:'
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
]