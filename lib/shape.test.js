const { Shape } = require('./shapes.js');

describe('Shape class', () => {
    it('Should generate the expected results from using a Shape class', () => {
        const shape = new Shape('blue', 'red', 'MTL')
        // square.shapeColor('black');
        expect(shape.returnSVG()).toEqual('Only the subclasses should be generating the getSVG method, not the parent class of shapes')
    });
});