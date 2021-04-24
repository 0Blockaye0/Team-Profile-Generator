
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test("creates new employee obj", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com", "actor");
    console.log(employee);

    expect(employee.name).toBe("James Franco");
    expect(employee.email).toBe("jamiefranco@gwhale.com");
    // expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe("Employee");
}) 

test("retruns new emplyee obj name", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com");

    expect(employee.getName()).toBe("James Franco")
})

test("retruns new emplyee obj id", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com");

    expect(employee.getID()).toEqual(expect.any(Number))
})

test("retruns new emplyee obj email", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com");

    expect(employee.getEmail()).toBe("jamiefranco@gwhale.com")
})

test("retruns new emplyee obj role", () => {
    const employee = new Employee("James Franco", "jamiefranco@gwhale.com");

    expect(employee.role).toBe("Employee")
})