const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates new engineer obj", () => {
    const engineer = new Engineer("Luke Skywalker", "luke@gwhale.com", "thisGithubName");

    expect(engineer.name).toBe("Luke Skywalker");
    expect(engineer.email).toBe("luke@gwhale.com");
    expect(engineer.githubUserName).toBe("thisGithubName");
})

test("overrides Employee class role", () => {
    const engineer = new Engineer("Luke Skywalker", "luke@gwhale.com", "thisGithubName");
    
    expect(engineer.role).toBe("Engineer");
    expect(engineer.getRole()).toBe("Engineer")
})

test("returns github username", () => {
    const engineer = new Engineer("Luke SKywalker", "luke@gwhale.com", "thisGithubName");

    expect(engineer.getGithub()).toBe("thisGithubName");
})