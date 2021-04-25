const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(githubUserName) {
      super();  
        this.githubUserName = githubUserName;
    }

    getGithub() {
        return this.githubUserName;
    }

}

module.exports = Engineer;