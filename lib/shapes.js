// Parent class

class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    returnSVG() {
        throw new Error('Only the subclasses should be generating the getSVG method, not the parent class of shapes')
    }
}

// Children classes

class Triangle extends Shape {
    constructor(height, base, shapeColor) {
    super(shapeColor);
    this.height = height;
    this.base = base;
    }

    returnSVG() {
        const a1 = 100 + this.base / 2;
        const a2 = 100;
        const a3 = 100 + this.base;
        const b1 = 50;
        const b2 = 50 + this.height;
        const b3 = 50 + this.height;

        return `<polygon points="${a1}, ${a2}, ${a3}, ${b1}, ${b2}, ${b3}"
         fill="${shapeColor}" stroke-width="5"/>`
    }
}

class Circle extends Shape {
    constructor(shapeColor, radius) {
        super(shapeColor)
        this.radius = radius;
    }

    returnSVG() {
        return `<circle cx="25" cy="75" r="${this.radius}" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor(shapeColor, lengthOfSide) {
        super(shapeColor)
        this.lengthOfSide = lengthOfSide;
    }

    returnSVG() {
        return `<rect x="100" y="50" width="${this.lengthOfSide}" height="${this.lengthOfSide}" fill="${this.shapeColor}" />`
    }
}

module.exports = { Triangle, Circle, Square };