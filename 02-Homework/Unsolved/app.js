const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//fs.mkdirSync(OUTPUT_DIR);

const render = require("./lib/htmlRenderer");

function askQuestions () {
   return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to enter?',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'choice'
            }

        ]).then((res) => { 
            switch(res.choice) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern()
                    break;
            }
        });
};

const newTeam = [];

function addManager() {
    
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter first and last name',
            name: "name"
        },
        {
            type: 'input',
            message: 'What is this person\'s id number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Give manager office number',
            name: 'officeNumber'
        }
        ]).then((res) => {
            const engineer = new Engineer(res.name, res.id, res.email, res.officeNumber)
            newTeam.push(engineer);
            anotherEmployee();

        });
};

function addIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter first and last name',
            name: "name"
        },
        {
            type: 'input',
            message: 'What is this person\'s id number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter the name of the school the intern attends',
            name: 'school'
        }
        ]).then((res) => {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            newTeam.push(intern);
            anotherEmployee();
        });
};

function addEngineer () {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter first and last name',
            name: "name"
        },
        {
            type: 'input',
            message: 'What is this person\'s id number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter the employee\'s github',
            name: 'github'
        }
        ]).then((res) => {
            const engineer = new Engineer(res.name, res.id, res.email, res.github)
            newTeam.push(engineer);
            anotherEmployee();
        })
};


function anotherEmployee (){
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'chooseNewEmployee'
        }
    ]).then((res) => {
        if(res){
            renderTeam();
        } else {
            return "goodbye!"
        }
    });
};


function renderTeam() {
    fs.writeFileSync(outputPath, render(newTeam), 'utf8');
    console.log('Team has been created');
};

askQuestions();
//renderTeam();






