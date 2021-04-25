const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, email, githubUserName) {
      super(name, email);  
        this.githubUserName = githubUserName;
        this.role = "Engineer"
    }

    getGithub() {
        return this.githubUserName;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;