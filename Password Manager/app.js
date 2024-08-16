document.getElementById('password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const encryptedPassword = btoa(password); // Encriptación básica, usa una técnica más segura en producción

    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.push({ site, username, password: encryptedPassword });
    localStorage.setItem('passwords', JSON.stringify(passwords));

    document.getElementById('password-form').reset();
    displayPasswords();
});

function displayPasswords() {
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    const passwordList = document.getElementById('password-list');
    passwordList.innerHTML = '';

    passwords.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Sitio: ${item.site}, Usuario: ${item.username}, Contraseña: ${atob(item.password)}`;
        passwordList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayPasswords);
