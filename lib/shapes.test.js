const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle class', () => {
    it('Should generate the expected results from using a Triangle class', () => {
        const triangle = new Triangle('blue', 'red', 'MTL')
        // triangle.shapeColor('black');
        expect(triangle.returnSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke-width="5"/><text x="150" y="150" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});

describe('Circle class', () => {
    it('Should generate the expected results from using a Circle class', () => {
        const circle = new Circle(80, 'blue', 'red', 'MTL')
        // circle.shapeColor('black');
        expect(circle.returnSVG()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});

describe('Square class', () => {
    it('Should generate the expected results from using a Square class', () => {
        const square = new Square(100, 'blue', 'red', 'MTL')
        // square.shapeColor('black');
        expect(square.returnSVG()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" /><text x="151" y="120" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});