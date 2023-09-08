// Include the packages needed for this application
const inquirer = import('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// Create a class to be used to generate a logo to the users specifications
class logoTemplate {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }


returnSVG() {
    let shape;

    switch (this.shape) {
        case 'Triangle':
            shape = new Triangle(100, 100, this.shapeColor)
            break;
        case 'Circle':
            shape = new Circle(50, this.shapeColor)
            break;
        case 'Square':
            shape = new Square(100, this.shapeColor)
            break;
    }

    const shapeSVG = shape.returnSVG();

    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="${this.shapeColor}" />
    <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>
    ${shapeSVG}
  </svg>`;

  return svgTemplate;
}

saveLogoToFile(filename) {
    fs.writeFile(filename, this.returnSVG());
    console.log('Logo has been successfully created!')
}
}

// Create array of questions to ask the user to create their logo

const userPrompt = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter some 3 characters of text to be included in your new logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a (common) color that you would like this text to be:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for the logo',
        choices: ['Triangle','Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a (common) color you would like this shape to be:'
    },
];



function init() {
    inquirer.prompt(userPrompt)
    .then(answers => {
      const userLogo = ({ text, textColor, shape, shapeColor }) => 
  ``;
    }
  )

// The function runs to create the SVG file
const generateLogo = userLogo(answers)
    writeToFile('./examples/logo.svg', generateLogo)
}

// Function call to initialize app
init();