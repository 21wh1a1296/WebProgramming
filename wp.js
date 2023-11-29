document.addEventListener('DOMContentLoaded', function () {
    const loginBody = document.querySelector('#loginBody');
    const mainContent = document.querySelector('.main-content');
    const loginForm = document.querySelector('.login-form');

    mainContent.style.display = 'none';

    document.body.addEventListener('click', function (event) {
        if (event.target.id === 'loginButton') {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (authenticate(username, password)) {
                showMainPage();
            } else {
                displayErrorMessage('Invalid username or password. Please try again.');
            }
        }
    });

    function authenticate(username, password) {
        return username === 'vigna' && password === '123';
    }

    function showMainPage() {
        loginForm.remove();
        mainContent.style.display = 'block';
        loginBody.style.background = 'none';
        loginBody.style.display = 'none';
    }

    function displayErrorMessage(message) {
        // You can implement your logic to display the error message on the page
        alert(message);
    }
});
