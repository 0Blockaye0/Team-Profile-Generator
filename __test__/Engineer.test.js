const Engineer = require("../lib/Engineer");

test("creates new engineer obj", () => {
    const engineer = new Engineer("thisGithubName");

    expect(engineer.githubUserName).toBe("thisGithubName");

})