// Pulls in the Shape class from the shapes.js file
const { Shape } = require('./shapes.js');

// Tests the Shape class to see if given test user responses, it will return the expected error
describe('Shape class', () => {
    it('Should generate the expected results from using a Shape class', () => {
        const shape = new Shape('blue', 'red', 'MTL')
        expect(() => shape.returnSVG()).toThrowError('Only the subclasses should be generating the getSVG method, not the parent class of shapes')
    });
});