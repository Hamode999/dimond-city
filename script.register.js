document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1276002520686268436/XGVrROEg-T3l76NxXOobejlqeYJAMvosfNAWEA_tT851yUB3aDhuV_JdD7Xau40oG3Gc';

    // Replace this URL with your actual registration endpoint
    const registerUrl = 'https://yourapi.com/register';

    fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Registration was successful, now log in
            return fetch('https://yourapi.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
        } else {
            throw new Error('Registration failed');
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the dashboard or another page
            window.location.href = "dashboard.html";
        } else {
            throw new Error('Login failed');
        }
    })
    .catch(error => {
        alert('An error occurred: ' + error.message);
    });
});
