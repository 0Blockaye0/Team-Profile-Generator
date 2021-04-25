const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

let dataArr = [];

const getManagerInfo = () => {
  return inquirer.prompt([
    {
      name: "managerName",
      type: "input",
      message: "Welcome to the Team Profile Generator. Please begin by entering the Team Managers name.",
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
  ]).then(data => {
    //   let i = dataArr.length += 1;
      const manager = new Manager(data.managerName, data.managerEmail, data.managerOfficeNum);
      dataArr.push(manager);
      console.log(dataArr);
  })
};

const getEngineerInfo = () => {
    return inquirer.prompt([
        {
          name: "engineerName",
          type: "input",
          message:
            "PLease enter the new Engineers name.",
        },
        {
          name: "engineerEmail",
          type: "input",
          message: "Enter the Engineers email address.",
        },
        {
          name: "githubName",
          type: "input",
          message: "Enter the Engineers GitHub username."
        }
      ])
};

const getInternInfo = () => {
    return inquirer.prompt([
        {
          name: "internName",
          type: "input",
          message:
            "PLease enter the new Interns name.",
        },
        {
          name: "internEmail",
          type: "input",
          message: "Enter the Interns email address.",
        },
        {
          name: "internSchool",
          type: "input",
          message: "Enter the Interns school."
        }
      ]);
};

const addOrDone = () => {
  return inquirer
    .prompt([
      {
        name: "addOrDone",
        type: "list",
        message: "What would you like to do next?",
        chioces: ["Add an Engineer", "Add an Intern", "I'm all finished."],
      },
    ])
    .then(({ addOrDone }) => {
      if (addOrDone === "I'm all finished.") {
        return
      }
      if (addOrDone === "Add an Engineer") {
        getEngineerInfo();
      }
      if (addOrDone === "Add an Intern") {
        getInternInfo();
      }
    });
};

getManagerInfo();