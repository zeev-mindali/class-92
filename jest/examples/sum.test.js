const mathFunc = require("./sum");

//add test
test("testing sum function adding two numbers:", () => {
    expect(mathFunc.sum(1, 2)).toBe(3);
})

//minus test
test("testing minus function for two numbers", () => {
    expect(mathFunc.minus(3, 2)).toBe(1);
})

//multiple test
test("testing multiple for two numbers", () => {
    expect(mathFunc.multi(2, 3)).toBe(6);
})

//divide test
test("testing divider", () => {
    expect(mathFunc.divide(4, 2)).toBe(2);
})

