
const Employee = require('../lib/Employee.js');

test("creates new employee obj", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com", "actor");
    console.log(employee);

    expect(employee.name).toBe("James Franco");
    expect(employee.email).toBe("jamiefranco@gwhale.com");
    // expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe("actor");
}) 