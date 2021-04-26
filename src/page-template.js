// const dataArr = require("../index");
// const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");
// const Intern = require("../lib/Intern")


const  generateEmployeeCards = (array) => {
    let stringRespone = ""
    // DO I NEED TO DECONSTRUCT THE OBJ?

    // const {Manager, Engineer, Intern} = array
    array.forEach(element => {
      if (element.role === "Manager") {
        console.log(element); 
        // consolelog is working but there seems to be some issue with returning for each item in the array. may need to rethink this logic
        stringRespone +=  `
        <div class="card">
          <div class="icons">
          <i class="fas fa-user-tie fa-4x"></i>
          </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>Office: ${element.officeNum}</p>
        </div>
        </div>
        `;
      }
      if (element.role === "Engineer") {
        console.log(element);
        stringRespone +=  `
        <div class="card">
        <div class="icons">
          <i class="fas fa-user-cog fa-4x"></i>
        </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>GitHub: ${element.githubUserName}</p>
        </div>
        </div>
        `;
      }
      if (element.role === "Intern") {
        console.log(element);
        stringRespone +=  `
        <div class="card">
        <div class="icons">
          <i class="fas fa-user-edit fa-4x"></i>
        </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <p>School: ${element.school}</p>
        </div>
        </div>
        `;
      }
    });
    // console.log(stringRespone);
    return stringRespone;
};

const generateHTML = (array) => {
  generateEmployeeCards(array);
  console.log("this should be the array...", array);
  console.log("this is the generateEmplyeeCards(array) log", generateEmployeeCards(array)); // return undifined
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/6cd323741d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>Team-Profile-Generator</title>
    </head>
    <body>
        <header>
            <h2>My Team</h2>
        </header>
        <main class="main">
        ${generateEmployeeCards(array)}
        </main>
        
    </body>
    </html>
    `;
 };


module.exports = generateHTML;
