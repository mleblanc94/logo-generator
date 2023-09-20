const { Triangle } = require('./shapes.js');

describe('Triangle class', () => {
    it('Should generate the expected results from using a Triangle class', () => {
        const triangle = new Triangle('blue', 'red', 'MTL')
        expect(triangle.returnSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke-width="5"/><text x="150" y="150" fill="red" text-anchor="middle" font-size="60">MTL</text>')
    });
});