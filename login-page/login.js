document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault()
    var username = document.getElementById('username').value.trim()
    
    if (username) {
        document.getElementById('welcome-message').textContent = `Welcome, ${username}! Ready to improve your typing skills?`
    } else {
        document.getElementById('welcome-message').textContent = "Please enter a valid username"
    }
})
