const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
console.log(user.username);
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if(username === user.username && password === user.password){
        alert("Đăng nhập thành công");
        window.location.href = "index.html";
    } else{
        alert("Đăng nhập thất bại");
    }
});