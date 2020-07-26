// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`The employee's name is: ${this.name}`)
        console.log(`The emplyee's ID is: ${this.id}`)
        console.log(`The emplyee's email is: ${this.email}`)        
    }    
}

module.exports = Employee;