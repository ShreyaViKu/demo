
// Array to store user data
let userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

// Function to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    // Create an object for the user data
    let userData = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    // Push the data to the array
    userDataArray.push(userData);

    // Save the array to local storage
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));

    // Send data to server via AJAX
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Data successfully sent to server');
            // Redirect to new page showing data
            window.location.href = 'data-list.html';
        }
    };
    xhr.send(JSON.stringify(userData));
});
