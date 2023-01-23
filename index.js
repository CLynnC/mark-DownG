// TODO: Include packages needed for this application
const inquirer = require('inquirer')
//import * as fs from 'fs/promises'
const fs = require('fs')
let generateMarkdown = require('./generateMarkdown.js')
// import fs from './node_modules/inquirer/node_modules/.bin'
//import inquirer from './node_modules/inquirer/lib/inquirer.cjs'
// var generateMarkdown =  generateMarkdown() {
// const generateMarkdown = ({ 
//import generateMarkdown from './generateMarkdown.mjs'
// inquirer.prompt([
// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    name: 'githubN',
    // this is the variable name the answer to the question will be assigned
    message: 'What is your GitHub username?',
  // this is the question
  },

  {
     type: 'input',
     name: 'email',
     // this is the variable name the answer to the question will be assigned
     message: 'What is your email address(how should we contact you)?',
   // this is the question
  },

   {
     type: 'input',
     name: 'title',
    // this is the variable name the answer to the question will be assigned
    message: 'What is Your Project Title/Entitled?',
   // this is the question
   },

   {
    type: 'input',
    name: 'description',
    // this is the variable name the answer to the question will be assigned
    message: 'Please describe your project in detail:',
   // this is the question
  },

   {
    type: 'confirm',
     name: 'answer2',
    // this is the variable name the answer to the question will be assigned
    message: 'Would You like to add a Table of Contents?',
  // this is the question
  },

   {
    type: 'input',
    name: 'answer1',
     // this is the variable name the answer to the question will be assigned
     message: 'Please List All Packages, Nodules, and CDNs that your project will require to be installed. Please separate each one by a comma:',
   // this is the question
   },

   {
     type: 'input',
     name: 'usage3',
     // this is the variable name the answer to the question will be assigned
    message: 'Please list your projects Usage Information(what should users use it for, ect..):',
   // this is the question
   },

   {
     type: 'list',
     name: 'license',
     // this is the variable name the answer to the question will be assigned
     message: 'Choose a liscense for your project:',
     choices: ['MIT', 'Apache', 'GPL']
   // this is the question
   },

   {
     type: 'input',
     name: 'answer4',
     // this is the variable name the answer to the question will be assigned
     message: 'Please List All The People Who have Contributed to your Project(separate by a comma):',
   // this is the question
   },

   {
     type: 'input',
     name: 'testing',
     // this is the variable name the answer to the question will be assigned
     message: 'Please describe any special instructions for testing your project:',
   // this is the question
   },

   {
     type: 'input',
     name: 'screenshot',
     // this is the variable name the answer to the question will be assigned
     message: 'If you would like to add a screenshot to your project, please enter the url to your image here(otherwise, you can always add one later...):',
   // this is the question
   }
]

// .then((answers) => {
// writeToFile()
// }),

// inquirer.catch((error) => {
// if (error.isTtyError) {
// 'ERROR 404'
// }
// else {
// 'Sorry Charlie. We dont want to Die Today. But Tommorow is a good day to Die.'
// }
// return
// })

// console.log(data)
// console.log(answers)
// console.log('\nOrder receipt:')
// console.log(JSON.stringify(answers, null, '  '))

// TODO: Create a function to write README file
function writeToFile (data) {
  fs.writeFileSync('ReadMe.md' , generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init () {inquirer.prompt(questions).then((answers) => {
    writeToFile(answers)
  // generateMarkdown()
  })}

// generateMarkdown()
  //  inquirer.catch((error) => {
  //  if (error.isTtyError) {
  //  'ERROR 404'
  // }
  // else {
  // 'Sorry Charlie. We dont want to Die Today. But Tommorow is a good day to Die.'
  // return
  // }
  // })

// Function call to initialize app
init()
