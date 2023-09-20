// Pulls in the Triangle class from the shapes.js file
const { Triangle } = require('./shapes.js');

// Tests the Triangle class to see if given test user responses, it will return what is expected
describe('Triangle class', () => {
    it('Should generate the expected results from using a Triangle class', () => {
        const triangle = new Triangle('blue', 'red', 'MTL')
        expect(triangle.returnSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke-width="5"/><text x="150" y="150" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});