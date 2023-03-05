// TODO: Include packages needed for this application
//Download Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// const questions = [['What is the title of your project?','Title'],'Write a brief description of the project','How do you install this application?','How do you use the application?','How does someone contribute to the project?','What are you testing guidelines?','What is your github username?','What is your email?'];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // for(const question of data ){
    fs.writeFile(fileName, generateMarkdown(data),(err)=>{
        if(err){
            console.log(err)
        return}

        console.log('Your file is being written')
        


        }
    )
}


// TODO: Create a function to initialize app
function init() {

    
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Write a brief description of the project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the license for this application',
            name: 'license'
        },
        {
            type: 'input',
            message: 'How do you install this application',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How do you use the application',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How does someone contribute to the project?',
            name:'contribution'
        },
        {
            type: 'input',
            message: 'What are your testing guidelines',
            name: 'testing'
        },
        {
            type: 'input',
            message: 'What is your Github user name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ])  
    .then((data) => 
    writeToFile('README.md',data))
//     .then((data)=>
//     console.log(data));
}

// Function call to initialize app
init();
