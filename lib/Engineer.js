// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUsername) {
      super(name, id, email);
      this.gitUsername = gitUsername;
    }
    // get the employees' role
    getRole(){
        return "Engineer";
    }
    getGithub() {
        return this.gitUsername;
    }
}
module.exports = Engineer;

