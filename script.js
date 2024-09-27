function validateLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var notif = document.getElementById("notif");

    if (username === "admin" && password === "password") {
        //*alert("Login Successfull!");
        notif.innerText = "Login Successfull!";
        setTimeout(function(){
            window.location.href="calcu.html";
        }, 500);
        
        return false;
    } else{
        notif.textContent = "Invalid username or password";
    }

}