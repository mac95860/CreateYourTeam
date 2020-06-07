const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

fs.mkdirSync(OUTPUT_DIR);

const render = require("./lib/htmlRenderer");

function askQuestions () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter name of employee',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter employee id',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter employee email',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What type of employee would you like to enter?',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'choice'
            }

        ]).then((res) => { 
            getEmployees(res);
            anotherEmployee();
        });
}

askQuestions();

const newTeam = [];

function getEmployees(res) {
    if (res.choice === "Manager") {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Give manager office number',
                name: 'officeNumber'
            }
        ]).then(() => {
            const engineer = new Engineer(res.name, res.id, res.email, res.officeNumber)
            newTeam.push(engineer);

        })
    } else if (res.choice === "Intern") {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the name of the school the intern attends',
                name: 'school'
            }
        ]).then(() => {
            const intern = new Intern(res.name, res.id, res.email, res.school)
            newTeam.push(intern)
        })
    } else if (res.choice === "Engineer") {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the employee\'s github',
                name: 'github'
            }
        ]).then(() => {
            const engineer = new Engineer(res.name, res.id, res.email, res.github)
            newTeam.push(engineer);
        })
    }
}

function anotherEmployee (){
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'chooseNewEmployee'
        }
    ]).then(val => {
        if(val){
            askQuestions();
        }
    })
}






