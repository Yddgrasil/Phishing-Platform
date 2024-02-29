var currentUser = null;

function obfuscateLogin() {
    var usernameInput = document.getElementById('usernameInput').value.trim().toLowerCase();
    var passwordInput = document.getElementById('passwordInput').value;

    // Simulate server-side check for the username and password
    if ((usernameInput === "grogu" || usernameInput === "user") && passwordInput === "mandalorian") {
        alert("Successful login!");

        // Redirect to User.html upon successful login
        window.location.href = "User.html";
    } else {
        alert("Login unsuccessful. Please check your username and password.");
    }
}

function accessUserDetails() {
    // Simulated unsafe practice: Displaying user details without checking the password
    if (currentUser) {
        console.log("User details for user: " + currentUser);
    } else {
        console.log("No user logged in.");
    }
}
