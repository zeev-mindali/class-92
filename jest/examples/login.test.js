const checkLogin = require("./login");

test("checking login system:", () => {
    expect(checkLogin("admin", "admin1")).toBe(true);
})