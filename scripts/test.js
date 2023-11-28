var passwordInput = document.getElementById('password');
var togglePasswordButton = document.createElement('button');
togglePasswordButton.textContent = 'Show';
togglePasswordButton.type = 'button';
togglePasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show';
    }
});
passwordInput.parentNode.insertBefore(togglePasswordButton, passwordInput.nextSibling);