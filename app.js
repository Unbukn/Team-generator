// Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const validator = require('validator');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { isNumber } = require("util");
const { registerPrompt } = require("inquirer");

var allTeamMembers = [];

inquirer.prompt([
    {
        // prompt for the manager name
        type: "input",
        name: "managerName",
        message: "What's the name of the project manager(PM)",
        validate: userEntry => {
            // if user response is not nothing
            if(userEntry !== ""){
                return true;
            }
            return "You have to provide a name for the manager?";
        },
        default: ""
    },
    {
        // ask for manager's Id
        type: "input",
        name: "managerId",
        message: "What's the manager's Id number?",
        validate: userEntry => {
            // if user response is not nothing
            if(validator.isNumeric(userEntry)){
                return true;
            }
            return "That's not a valid number!";
        },
        default: ""
    },
    {
        // ask for manager's email
        type: "input",
        name: "managerEmail",
        message: "What's the manager's email address?",
        validate: userEntry => {
            // if user response is not nothing
            if(validator.isEmail(userEntry)){
                return true;
            }
            return "That's not a valid email address!";
        },
        default: ""
    },
    {
        // ask for manager's office number
        type: "input",
        name: "managerOffice",
        message: "What's the manager's office number?",
        validate: userEntry => {
            // if user response is not nothing
            if(validator.isNumeric(userEntry)){
                return true;
            }
            return "That's not a valid number!";
        },
        default: ""
    },
  ])
  .then(answers => {
    // create new class for the manager with user input
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    // push the new manager class to allTeamMembers object array
    allTeamMembers.push(manager);
    // create the rest of the team 
    makeTeam() // prompt the user for the rest of the team members
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      return console.log(error.message)
    } else {
      // Something else when wrong
        return "unknown error occurred"
    }
  });
// ************** prompt user for the rest of the team members ****************** 

function makeTeam() {
    inquirer.prompt([
    {
        type: "list",
        name: "memberType",
        message: "Select a team member to add to the project?",
        choices: [
        "Engineer",
        "Intern",
        "No additional members need to be added."
        ],
        default: ""
    }
      ]).then(answers => {
        switch(answers.memberType) {
        case "Engineer":
            // make a new engineer
          newEng();
          break;
        case "Intern":
            // make new intern profile
          newIntern();
          break;
        default:
            // generate the team
          generateTeam();
        }
      });

};
  