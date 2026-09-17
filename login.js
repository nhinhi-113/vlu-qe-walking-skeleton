function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

// Xử lý form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let result = login(user, pass);

    if (result === true) {
        document.getElementById("result").innerText = "Đăng nhập thành công!";
    } else {
        document.getElementById("result").innerText = "Sai tài khoản hoặc mật khẩu!";
    }
});

// Cho Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
