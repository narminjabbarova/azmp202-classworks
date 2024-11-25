const userNotLoggedIn = !localStorage.getItem('loggedInUser');
const notOnLoginPage = !location.href.includes('login.html');
const notOnRegisterPage = !location.href.includes('register.html');
if (userNotLoggedIn && notOnLoginPage && notOnRegisterPage) {
    location.href = 'login.html';
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (ev) {
        ev.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.password === password) {
            localStorage.setItem('loggedInUser', email);
            location.href = 'home.html';
        } else {
            alert('Wrong email or password.');
        }
    });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function (n) {
        n.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (localStorage.getItem(email)) {
            alert('User already exists.')
        } else {
            localStorage.setItem(email, JSON.stringify({ email, password }));
            alert('Registration successful!')
            location.href = 'login.html'
        }
    });
}
