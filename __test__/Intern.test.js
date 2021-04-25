const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates new Intern obj", () => {
    const intern = new Intern("Annican Skywalker", "Annican@gwhale.com", "thisSchool");

    expect(intern.name).toBe("Annican Skywalker");
    expect(intern.email).toBe("Annican@gwhale.com");
    expect(intern.school).toBe("thisSchool");
})

test("overrides Employee class role", () => {
    const intern = new Intern("Annican Skywalker", "Annican@gwhale.com", "thisSchool");
    
    expect(intern.role).toBe("Intern");
    expect(intern.getRole()).toBe("Intern")
})

test("returns school", () => {
    const intern = new Intern("Annican SKywalker", "Annican@gwhale.com", "thisSchool");

    expect(intern.getSchool()).toBe("thisSchool");
})