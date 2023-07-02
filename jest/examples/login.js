const checkLogin = (user, pass) => {
    return (user === "admin" && pass === "admin");
}

module.exports = checkLogin;