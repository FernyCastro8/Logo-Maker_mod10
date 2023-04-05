const inquirer = require('inquirer');
const Shape = require('./lib/shapes')
const fs = require('fs');
const shapeTemplate = require('./src/shapeTemplate');


const userInput = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter up to 3 characters for your graphic "ex. ABC".',
      name: "text",
      validate: (text) => {
        if (text.length > 0 && text.length < 4) {
          return true;
        }
        else {
          console.log('Must enter at least one character and no more than 3 characters')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Please select a text color.',
      name: "textColor"
    },
    {
      type: 'list',
      message: 'Please select a shape.',
      name: "shape",
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      message: 'Please select a color for the shape.',
      name: "shapeColor"
    },
  ])
    .then((data) => {
      const shape = new Shape(data.text, data.textColor, data.shape, data.shapeColor)

      fs.writeFile(`logo.html`, shapeTemplate(shape), (err) =>
        err ? console.error(err) : console.log('Here is your logo :)')
      )
    })
};

userInput();

