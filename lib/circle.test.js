const { Circle } = require('./shapes.js');

describe('Circle class', () => {
    it('Should generate the expected results from using a Circle class', () => {
        const circle = new Circle(80, 'blue', 'red', 'MTL')
        expect(circle.returnSVG()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});