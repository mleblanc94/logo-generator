// Parent class

class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    returnSVG() {
        throw new Error('Only the subclasses should be generating the getSVG method, not the parent class of shapes')
    }
}

// Children classes

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
    }

    returnSVG() {

        return `<polygon points="150, 18 244, 182 56, 182"fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(radius, shapeColor, textColor, text) {
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

module.exports = { Triangle, Circle, Square };