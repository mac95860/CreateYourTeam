// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
}
const internRole = "Intern";
const intern = new Intern();
intern.getRole(internRole);

module.exports = Intern;