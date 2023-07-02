const checkLogin = require("./login");

test("checking login system:", () => {
    expect(checkLogin("admin", "admin")).toBe(true);
})