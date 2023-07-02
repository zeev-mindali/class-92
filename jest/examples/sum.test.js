const sum = require("./sum");

test("testing sum function adding two numbers:", () => {
    expect(sum(1, 2)).toBe(3);
})