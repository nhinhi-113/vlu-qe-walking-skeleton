const login = require("./login");

test("Đăng nhập đúng tài khoản và mật khẩu", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập sai mật khẩu", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Đăng nhập sai tài khoản", () => {
    expect(login("user", "123")).toBe(false);
});
