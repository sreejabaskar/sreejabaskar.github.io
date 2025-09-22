// Registration
function registerUser() {
    let username = document.getElementById("regUser").value.trim();
    let password = document.getElementById("regPass").value.trim();

    // Username: only letters (a-z, A-Z), numbers (0-9), and underscores allowed
    let userPattern = /^[a-zA-Z0-9_]+$/;

    // Password: must have at least 1 letter, 1 number, 1 special char, and 6+ chars long
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+={}:;'"<>,.?/-]).{6,}$/;

    if(!username || !password){
        alert("Please enter both username and password!");
        return;
    }

    if(!userPattern.test(username)){
        alert("Username can only contain letters, numbers, and underscores!");
        return;
    }

    if(!passPattern.test(password)){
        alert("Password must be at least 6 characters long, include a letter, a number, and a special character!");
        return;
    }

    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully! Please log in.");
    window.location.href = "./login.html";  
}

// Login
function loginUser() {
    let username = document.getElementById("loginUser").value.trim();
    let password = document.getElementById("loginPass").value.trim();

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(username === storedUser && password === storedPass){
        alert("Login Successful! Redirecting to portfolio...");
        window.location.href = "./portfolio.html";  
    } else {
        alert("Invalid Username or Password!");
    }
}
