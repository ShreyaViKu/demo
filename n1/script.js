document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Simulate an AJAX POST request by adding data to local storage directly
    try {
        // Retrieve users from local storage or create a new array if none exists
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users)); // Update local storage

        // Clear form fields
        document.getElementById("registrationForm").reset();
        
        // Optionally redirect to user list page
        alert("User registered successfully!");
        window.location.href = "userlist.html"; // Redirect to the user list page
    } catch (error) {
        console.error("Error storing user data:", error);
        alert("An error occurred while registering the user.");
    }
});
