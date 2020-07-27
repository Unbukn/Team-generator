//import the parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
    // get the employees' role
    getRole(){
        return "Engineer";
    }
    // return the employee github 
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;

