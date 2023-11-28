var passwordInput = document.getElementById('password');
var togglePasswordButton = document.getElementById('show-password');
togglePasswordButton.innerHTML = `<i class="fa fa-eye-slash" aria-hidden="true"></i>`;
togglePasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerHTML = `<i class="fa fa-eye-slash" aria-hidden="true"></i>`;
    }
});
// passwordInput.parentNode.insertBefore(togglePasswordButton, passwordInput.nextSibling);