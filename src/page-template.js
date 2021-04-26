// const dataArr = require("../index");
// const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");
// const Intern = require("../lib/Intern")


const  generateEmployeeCards = (array) => {

    // DO I NEED TO DECONSTRUCT THE OBJ?

    // const {Manager, Engineer, Intern} = array
    array.forEach(element => {
      if (element.role === "Manager") {
        console.log(element); 
        // consolelog is working but there seems to be some issue with returning for each item in the array. may need to rethink this logic
        return `
        <div class="card">
        <!-- <img src="" alt="Avatar" style="width:100%"> -->
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>Office Number: ${element.officeNum}</p>
        </div>
        </div>
        `;
      }
      if (element.role === "Engineer") {
        console.log(element);
        return `
        <div class="card">
        <!-- <img src="" alt="Avatar" style="width:100%"> -->
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>Office Number: ${element.githubUserName}</p>
        </div>
        </div>
        `;
      }
      if (element.role === "Intern") {
        console.log(element);
        return `
        <div class="card">
        <!-- <img src="" alt="Avatar" style="width:100%"> -->
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>Office Number: ${element.school}</p>
        </div>
        </div>
        `;
      }
    });
};

const generateHTML = (array) => {
  console.log("this should be the array...", array);
  console.log("this is the generateEmplyeeCards(array) log", generateEmployeeCards(array)); // return undifined
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Profile-Generator</title>
    </head>
    <body>
        <header>
            <h2>My Team</h2>
        </header>
        <main>
        ${generateEmployeeCards(array)}
        </main>
        
    </body>
    </html>
    `;
};


module.exports = generateHTML;
