const Shape = require('./shapes')

test("Shape is an object", () => {
    const s = new Shape()
    expect(typeof(s)).toBe("object")
})

test("Shape returns correct text from method", () => {
    const s = new Shape("testText")
    expect(s.getText()).toBe("testText")
})

test("Shape returns correct text color from method", () => {
    const s = new Shape("testText", "textColor")
    expect(s.getTextColor()).toBe("textColor")
})

test("Shape returns correct text color from method", () => {
    const s = new Shape("testText", "textColor","shape")
    expect(s.shape()).toBe("shape")
})

test("Shape returns correct text color from method", () => {
    const s = new Shape("testText", "textColor","testShape", "testShapeColor")
    expect(s.shapeColor()).toBe("shapColor")
})
