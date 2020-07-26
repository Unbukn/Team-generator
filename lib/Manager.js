// include the parent employee class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name,id,email);
        this.officeNum = officeNum;
    }
    // get the employees' role
    getRole(){
        return "Manager";
    }

    // get the office number for the manager
    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;
