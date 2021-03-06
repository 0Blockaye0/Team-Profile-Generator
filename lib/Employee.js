let employeeIDCounter = 1;

class Employee {
  constructor(name, email) {
    
    this.name = name;
    this.email = email;
    this.role = "Employee";
    this.id = employeeIDCounter;

    employeeIDCounter++;
  }
  
  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;