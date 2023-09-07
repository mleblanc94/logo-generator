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
        message: 'Please enter a (common) color that you would like this text to be:'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Please enter a shape that you would like the logo to be:'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a (common) color you would like this shape to be:'
    },
]