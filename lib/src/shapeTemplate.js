//Shapes temple

module.exports = (shapeData) => {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${getShape(shapeData)}
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text>
        
        </svg>
`
}

//Circle temple
function getShape(data) {
    if (data.getShape() === "circle") {
        return `
        <svg width="100" height="100">

            <circle cx="50" cy="50" r="48" stroke="black" stroke-width="2" fill="${data.getShapeColor()}"/>

            <text x="50" y="50" fill="${data.getTextColor()}">${data.getText()}</text>
        </svg>
        `
    }
    //Triangle temple
    if (data.getShape() === 'triangle') {
        return `
        <svg height="250" width="500">

            <polygon points="200,1 350,190 60,192" style="fill:${data.getShapeColor()};stroke:black;stroke-width:1"/>

            <text x="200" y="150" fill="${data.getTextColor()}">${data.getText()}</text>
        </svg>
        `
    }
    //Square temple
    if (data.getShape() === 'square') {
        return `
        <svg width="400" height="150">

        <rect width="300" height="300" style="fill:${data.getShapeColor()};stroke-width:5;stroke:black"/>

            <text x="50" y="50" fill="${data.getTextColor()}">${data.getText()}</text>
            
        </svg>
        `
    }
}

