const register = document.getElementById("register");
register.addEventListener("submit",(event)=>{
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const confirmpass = document.getElementById("confirmpass").value.trim();
    console.log(username);
    console.log(password);
    console.log(email);
    if(username.length >=6 && username.length <=18){
        if(username.length >=8 && username.length <=20){
            if(password === confirmpass){
                const user = {
                    username: username,
                    email: email,
                    password: password,
                };
                console.log(user);
                window.location.href = "index.html";
                localStorage.setItem("user", JSON.stringify(user));
            }
        }
    }
});