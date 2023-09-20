// Pulls in the Shape variables from the shapes.js file
const { Triangle, Circle, Square } = require('./shapes.js');

describe('SVG Outputs', () => {
    // Tests the SVG generated for the Circle class given user requirements
    it('Should generate the expected SVG for a Circle', () => {
        const circle = new Circle(80, 'blue', 'red', 'MTL');
        expect(circle.returnSVG()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" fill="red" text-anchor="middle" font-size="60">MTL</text>');
    });

    // Tests the SVG generated for the Triangle class given user requirements
    it('Should generate the expected SVG for a Triangle', () => {
        const triangle = new Triangle('blue', 'red', 'MTL');
        expect(triangle.returnSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke-width="5"/><text x="150" y="150" fill="red" text-anchor="middle" font-size="60">MTL</text>');
    });

    // Tests the SVG generated for the Square class given user requirements
    it('Should generate the expected SVG for a Square', () => {
        const square = new Square(100, 'blue', 'red', 'MTL');
        expect(square.returnSVG()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" /><text x="151" y="120" fill="red" text-anchor="middle" font-size="60">MTL</text>');
    });
});