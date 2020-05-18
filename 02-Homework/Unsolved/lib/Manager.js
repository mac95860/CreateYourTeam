// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

delete Employee['getRole'];

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
const managerRole = "Manager";

const manager = new Manager()
manager.getRole(managerRole);
module.exports = Manager;