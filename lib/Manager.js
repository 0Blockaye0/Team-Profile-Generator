const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, email, officeNum) {
        super(name, email);
            this.officeNum = officeNum;
            this.role = "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;