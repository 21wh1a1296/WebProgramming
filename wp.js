document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.querySelector('.main-content');
    const homeButton = document.querySelector('#homeButton');
    
    document.body.addEventListener('click', function (event) {
        if (event.target.id === 'logoutButton') {
            logout();
        }
        if (event.target.id === 'homeButton') {
            loginForm.style.display = 'none';
            showMainPage();
        }
    });

    function showMainPage() {
        loginForm.remove();
        mainContent.style.display = 'block';
        loginBody.style.background = 'none';
        loginBody.style.display = 'none';
    }
});

