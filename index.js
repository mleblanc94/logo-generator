// Include the packages needed for this application
const inquirer = require('inquirer');
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
            shape = new Triangle(this.shapeColor, this.textColor, this.text)
            break;
        case 'Circle':
            shape = new Circle(80, this.shapeColor, this.textColor, this.text)
            break;
        case 'Square':
            shape = new Square(100, this.shapeColor, this.textColor, this.text)
            break;
    }

    const shapeSVG = shape.returnSVG();

    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        </svg>`;

  return svgTemplate;
}

saveLogoToFile(filename) {
    fs.writeFileSync(filename, this.returnSVG());
    console.log(`Generated ${filename}`)
}
}

// Create array of questions to ask the user to create their logo

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters of text to be included in your new logo:'
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
])
.then((answers) => {
const userLogo = new logoTemplate(answers.text, answers.textColor, answers.shape, answers.shapeColor);
userLogo.saveLogoToFile('./examples/logo.svg')
}
)
.catch((error) => {
    console.error('Error: ' + error);
});
