// Parent class
// Creates the Shape parent class which takes in the logos shape color, the text color, and the actual text itself
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    // Returns an error since a user should now be calling the Shape class directly
    returnSVG() {
        throw new Error('Only the subclasses should be generating the getSVG method, not the parent class of shapes')
    }
}

// Children classes
// Creates a Triangle class which expects the logos shape color, the text color, and the actual text itself
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
    // Super is used to call the constructor of the Shape class to define the constructor of the Triangle class to initialize these properties before adding the child classes own properties 
    super(shapeColor, textColor, text);
    }
    // Returns the SVG Triangle code that is expected based off the shape that was determined by the user
    returnSVG() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.text}</text>`
    }
}

// Creates a Circle class which expects the logos radius, shape color, the text color, and the actual text itself
class Circle extends Shape {
    constructor(radius, shapeColor, textColor, text) {
        // Super is used to call the constructor of the Shape class to define the constructor of the Circle class to initialize these properties before adding the child classes own properties
        super(shapeColor, textColor, text)
        this.radius = radius;
    }

    returnSVG() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}"/><text x="150" y="125" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(lengthOfSide, shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
        this.lengthOfSide = lengthOfSide;
    }

    returnSVG() {
        return `<rect x="100" y="50" width="${this.lengthOfSide}" height="${this.lengthOfSide}" fill="${this.shapeColor}" /><text x="151" y="120" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.text}</text>`
    }
}

module.exports = { Triangle, Circle, Square, Shape };