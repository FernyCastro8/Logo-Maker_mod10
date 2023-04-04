class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    getText() {
        return this.text
    }

    getTextColor() {
        return this.textColor
    }

    getShape() {
        return this.shape
    }

    getShapeColor() {
        return this.shapeColor
    }
}

module.exports = Shape

