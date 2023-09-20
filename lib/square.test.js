// Pulls in the Square class from the shapes.js file
const { Square } = require('./shapes.js');

// Tests the Square class to see if given test user responses, it will return what is expected
describe('Square class', () => {
    it('Should generate the expected results from using a Square class', () => {
        const square = new Square(100, 'blue', 'red', 'MTL')
        expect(square.returnSVG()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" /><text x="151" y="120" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});