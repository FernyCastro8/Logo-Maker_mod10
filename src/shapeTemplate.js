module.exports = (shapeData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${getShape(shapeData)}
    </body>
    </html>
    
    `
}

function getShape(data) {
    if (data.getShape() === "circle") {
        return `
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="48" stroke="blue" stroke-width="2" fill="${data.getShapeColor()}" />
            <text x="50" y="50" fill="${data.getTextColor()}">${data.getText()}</text>
        </svg>
        `
    }

    if (data.getShape() === 'triangle') {
        return `
        <svg height="250" width="500">
        <polygon points="220,10 300,210 170,250 123,234" style="fill:${data.getShapeColor()};stroke:purple;stroke-width:1" />
        <text x="200" y="150" fill="${data.getTextColor()}">${data.getText()}</text>
    </svg>
        `
    }

    if (data.getShape() === 'square') {
        return `
        <svg width="100" height="100">
        <rect width="400" height="100" 
        style="fill:${data.getShapeColor()};stroke-width:10;stroke:rgb(105, 75, 88)" />
        <text x="50" y="50" fill="${data.getTextColor()}">${data.getText()}</text>
    </svg>
        `
    }
}