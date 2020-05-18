const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
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
        if (res.choice === "Manager") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter Manager's office number",
                        name: "officeNumber"
                    }
                ]).then((res) => {
                    const manager = new Manager(res.officeNumber);
                    render(manager);
                })
        } else if (res.choice === "Engineer") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter github profile url",
                        name: "github"
                    }
                ]).then(() => {
                    const engineer = new Engineer(res.github);
                    render(engineer);
                })
        } else if (res.choice === "Intern") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter name of the intern's school",
                        name: "school"
                    }
                ]).then(() => {
                    const intern = new Intern(res.school);
                    render(intern);
                 })
        }
    })

     // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

