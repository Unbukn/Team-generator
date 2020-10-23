# Team Generator

#### Video Demo
[![Desktop html output](https://imgur.com/d3R81fz.png)](https://youtu.be/J7d4WhcN1SA)

## Description     
A Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each employee.

  ### Table of contents
  * [Demo](#Video-Demo)
  * [Description](#Description)
  * [Use Case](#Use-case)
  * [Application Functionality ](#Application-Functionality)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

## Use case
Generate a webpage that displays my team's basic info so that I have quick access to emails and GitHub profiles.

## Application Functionality 
For this assignment I was asked to build a software engineering team generator command line application.
* The application will prompt the user for information about the team manager and then information about the team members.
* The user can input any number of team members, and they may be a mix of engineers and interns. 
* When the user has completed building the team, the application will create an HTML file (See below) that displays a team roster based on the information provided by the user. 
The html will be built following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates).
### Application file structure


```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

## Installation
1. First fork the github https://github.com/Unbukn/Team-generator repo on https://github.com/.
2. Clone your newly forked repo to a directory on your computer.
3. Navigate to the [app.js](./app.js) file in your terminal.
4. Install the node dependencies to the application by entering in the terminal:
```
npm i
``` 
## Usage
To create generate a page for your team enter and complete all the prompts. After completing the prompts a team.html file will be stored in the [output](./output) folder. An example of the html output can be found [here](./output/example.html).
```
node app.js
```
A [demo video](https://youtu.be/uRBiRK0loAc) demonstrates the application being run and the html being created. (also see example below)

![Desktop html output](./assets/Team-Gen(desktop).png)
<!-- ![Mobile html output](./assets/TeamGenPic(Mobile).png) -->

The application first will prompt the user for their email, id, and specific information based on their role with the company. Then, other employees:
 - Interns may provide their school.
 - Engineers may provide their GitHub username.


## License
[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://shields.io/)
Copyright (c) 2020 James_Hudgins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing
This application was developed by James Hudgins. TEAM-GENERATOR was made possible with the following technologies:
* HTML 5
* CSS 3
* [Jest](https://www.npmjs.com/package/jest)
* [Node.js](https://nodejs.org/api/fs.html)
* [Validator](https://www.npmjs.com/package/validator)
* [Inquirer,js](https://www.npmjs.com/package/inquirer)
* [Shields.io](https://shields.io/)
* [youtube](https://youtube.com)

## Tests
run the tests by entering: 
```
npm run test
```

## Questions
Questions regarding this application should be sent via email to, james.hudgins.work@gmail.com. You can also contact me on github with additional questions -> https://github.com/Unbukn/
