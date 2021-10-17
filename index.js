const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./util/generateHtml");
const addEmployee = [];

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["Add Manager", "Add Engineer", "Add Intern", "Build Team"],
      },
    ])
    .then((ans) => {
      switch (ans.choice) {
        case "Add Manager":
          console.log("Add Manager");
          addManager();
          break;
        case "Add Engineer":
          console.log("Add Engineer");
          addEngineer();
          break;
        case "Add Intern":
          console.log("Add Intern");
          addIntern();
          break;
        case "Build Team":
          console.log("Build Team");
          buildTeam();
          break;
      }
    });
}

init();

function addManager() {
  inquirer
    .prompt([
      {
        message: "What is the Manager's name?",
        name: "name",
        type: "input",
      },
      {
        message: "What is the Manager's id",
        name: "id",
        type: "input",
      },
      {
        message: "What is the Manager's email",
        name: "email",
        type: "input",
      },
      {
        message: "What is the Manager's office",
        name: "office number",
        type: "input",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      addEmployee.push(new Manager(name, id, email, officeNumber));
      init();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        message: "What is the Engineer's name?",
        name: "name",
        type: "input",
      },
      {
        message: "What is the Engineer's id",
        name: "id",
        type: "input",
      },
      {
        message: "What is the Engineer's email",
        name: "email",
        type: "input",
      },
      {
        message: "What is the engineer's github",
        name: "github",
        type: "input",
      },
    ])
    .then(({ name, id, email, github }) => {
      addEmployee.push(new Engineer(name, id, email, github));
      init();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is the Intern's name?",
        name: "name",
        type: "input",
      },
      {
        message: "What is the Intern's id",
        name: "id",
        type: "input",
      },
      {
        message: "What is the Intern's email",
        name: "email",
        type: "input",
      },
      {
        message: "What school does this intern come from?",
        name: "school",
        type: "input",
      },
    ])
    .then(({ name, id, email, school }) => {
      addEmployee.push(new Intern(name, id, email, school));
      init();
    });
}

function buildTeam() {
    fs.writeFile("./dist/index.html", generateHtml(addEmployee), (err) =>
    err ? console.log(err) : console.log("Your index.html file is in the dist folder."));
}