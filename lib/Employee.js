// Parent class that for all team member types
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get the name of the employee
    getName() {
        // return the name of the team member
        return this.name;
    }

    // get the id of the employee
    getId() {
        // return the name of the team member
        return this.id;
    }

    // get the email of the employee
    getEmail() {
        // return the name of the team member
        return this.email;
    }

    // get the employees' role
    getRole(){
        return "Employee";
    }
    // print things about the employee
    printInfo() {
        console.log(`The employee's name is: ${this.name}`)
        console.log(`The emplyee's ID is: ${this.id}`)
        console.log(`The emplyee's email is: ${this.email}`)        
    }    
}

module.exports = Employee;