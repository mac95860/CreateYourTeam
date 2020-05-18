// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(github) {
    super(name, id, email)
    this.github = github;
    }

    getGithub() {
        return this.github;
    }
}
const engineerRole = "Engineer";
const engineer = new Engineer();
engineer.getRole(engineRole);


module.exports = Engineer;