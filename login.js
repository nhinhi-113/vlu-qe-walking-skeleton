function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

module.exports = login;
