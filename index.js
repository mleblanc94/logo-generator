// Include the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// Create a class to be used to generate a logo to the users specifications
class LogoTemplate {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

// Returns what the SVG is for the logo template based off which shape the user has chosen
returnSVG() {
    let shape;
    // Switch statement that passes in arguments to the classes based off user answers
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
    // Creates a new variable called shapeSVG that contains the new iteration of either the triangle, circle, or square class
    const shapeSVG = shape.returnSVG();
    // A variable that establishes the syntax for a SVG image and includes the 'shapeSVG' variable to finish creating the code for the image
    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        </svg>`;

  return svgTemplate;
}

// Saves the file to the specified place that contains the generated code for the SVG image, consoles that it has been created successfully.
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
        message: 'Please enter 3 characters of text to be included in your new logo:',
        // Validates that a user has entered no more than 3 characters
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            } else {
                return "Please enter up to 3 characters for your logo"
            }
        }
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
// Answers from the user are then included in the constructor for the class to create the logo
.then((answers) => {
const userLogo = new LogoTemplate(answers.text, answers.textColor, answers.shape, answers.shapeColor);
userLogo.saveLogoToFile('./examples/logo.svg')
}
)
.catch((error) => {
    console.error('Error: ' + error);
});
