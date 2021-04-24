const { thisExpression } = require("@babel/types");

class Employee {
    constructor(name, email, role) {

        this.name = name,
        this.email = email,
        this.role = role
    }
}

module.exports = Employee;