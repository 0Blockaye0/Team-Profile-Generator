
const  generateEmployeeCards = (array) => {
    let stringRespone = ""

    array.forEach(element => {
      if (element.role === "Manager") { 
        stringRespone +=  `
        <div class="card">
          <div class="icons">
          <i class="fas fa-user-tie fa-4x"></i>
          </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <a href="mailto:${element.email}">Email Me Here</a>
            <p>Office: ${element.officeNum}</p>
        </div>
        </div>
        `;
      }
      if (element.role === "Engineer") {
        stringRespone +=  `
        <div class="card">
        <div class="icons">
          <i class="fas fa-user-cog fa-4x"></i>
        </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <a href="mailto:${element.email}">Email Me Here</a>
            <br>
            <hr>
            <a href="https://github.com/${element.githubUserName}">My GitHub</a>
        </div>
        </div>
        `;
      }
      if (element.role === "Intern") {
        stringRespone +=  `
        <div class="card">
        <div class="icons">
          <i class="fas fa-user-edit fa-4x"></i>
        </div>
        <div class="container">
            <h4><b>Name :${element.name}</b></h4>
            <p>Role: ${element.role}</p>
            <p>ID: ${element.id}</p>
            <a href="mailto:${element.email}">Email Me Here</a>
            <p>School: ${element.school}</p>
        </div>
        </div>
        `;
      }
    });
    return stringRespone;
};

const generateHTML = (array) => {
  generateEmployeeCards(array);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet">
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