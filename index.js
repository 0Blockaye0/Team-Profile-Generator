const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatedHTML = require("./src/page-template");

let dataArr = [];

const getManagerInfo = () => {
  return inquirer
    .prompt([
      {
        name: "managerName",
        type: "input",
        message:
          "Welcome to the Team Profile Generator. Please begin by entering the Team Managers name.",
      },
      {
        name: "managerEmail",
        type: "input",
        message: "Enter the Managers email address.",
      },
      {
        name: "managerOfficeNum",
        type: "input",
        message: "Enter the managers office number.",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerEmail,
        data.managerOfficeNum
      );
      dataArr.push(manager);
      console.log(dataArr);
    })
    .then(addOrDone);
};

const getEngineerInfo = () => {
  return inquirer
    .prompt([
      {
        name: "engineerName",
        type: "input",
        message: "PLease enter the new Engineers name.",
      },
      {
        name: "engineerEmail",
        type: "input",
        message: "Enter the Engineers email address.",
      },
      {
        name: "githubName",
        type: "input",
        message: "Enter the Engineers GitHub username.",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerEmail,
        data.githubName
      );
      dataArr.push(engineer);
      console.log(dataArr);
    })
    .then(addOrDone);
};

const getInternInfo = () => {
  return inquirer
    .prompt([
      {
        name: "internName",
        type: "input",
        message: "PLease enter the new Interns name.",
      },
      {
        name: "internEmail",
        type: "input",
        message: "Enter the Interns email address.",
      },
      {
        name: "internSchool",
        type: "input",
        message: "Enter the Interns school.",
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internEmail,
        data.internSchool
      );
      dataArr.push(intern);
      console.log(dataArr);
    })
    .then(addOrDone);
};

const addOrDone = () => {
  return inquirer
    .prompt([
      {
        name: "addOrDone",
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "I'm all finished."],
      },
    ])
    .then((data) => {
      // console.log(data);
        if (data.addOrDone === "I'm all finished.") {
          generatedHTML(dataArr).then(res => console.log("this is the response...", res));
        }
        if (data.addOrDone === "Add an Engineer") {
          getEngineerInfo();
        }
        if (data.addOrDone === "Add an Intern") {
          getInternInfo();
        }
    });
};

getManagerInfo()

module.exports = dataArr;