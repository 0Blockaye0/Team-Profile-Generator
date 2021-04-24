
const Employee = require('../lib/Employee.js');

// create a test that test if given data will create a new object with that data

test("creates new employee obj", () => {
    const employee = new Employee("Blake", "bjohnson2313@gmail.com", "Boss");

    expect(employee.name).tobe("Blake");
    expect(employee.email).tobe("bjohnson2313@gmail.com");
    // expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe(expect.any(String));
}) 