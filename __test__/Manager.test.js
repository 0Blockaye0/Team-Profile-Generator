const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates new Manager obj", () => {
    const manager = new Manager("Buzz Lightyear", "buzzL@gwhale.com", "5553334444");

    expect(manager.name).toBe("Buzz Lightyear");
    expect(manager.email).toBe("buzzL@gwhale.com");
    expect(manager.officeNum).toBe("5553334444");
})

test("overrides Employee class role", () => {
    const manager = new Manager("Buzz Lightyear", "buzzL@gwhale.com", "5553334444");
    
    expect(manager.role).toBe("Manager");
    expect(manager.getRole()).toBe("Manager")
})

test("returns office number", () => {
    const manager = new Manager("Buzz Lightyear", "buzzL@gwhale.com", "5553334444");

    expect(manager.getOfficeNum()).toBe("5553334444");
})