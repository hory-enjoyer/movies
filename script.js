import './modules/LanguageSwitcher.js';
import './modules/generateCards.js';
import './modules/generateInputs.js';
import './modules/SearchAndFilters.js';

document.getElementById('register-button').addEventListener('click', function() {
    if (document.getElementById('registration-modal')) {
        return;
    }

    const modal = document.createElement('div');
    modal.id = 'registration-modal';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 5px;">
            <h2>Register</h2>
            <form id="registration-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required minlength="4"><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required minlength="6" pattern="(?=.*[0-9])(?=.*[a-zA-Z]).*"><br><br>
                <button type="submit">Register</button>
                <button type="button" onclick="document.body.removeChild(document.getElementById('registration-modal'))">Back</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = {
            username: username,
            password: password
        };

        users.push(user);

        document.body.removeChild(modal);
    });
});

const users = [];

document.getElementById('login-button').addEventListener('click', function() {
    if (document.getElementById('login-modal')) {
        return;
    }

    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.style.position = 'fixed';
    loginModal.style.left = '0';
    loginModal.style.top = '0';
    loginModal.style.width = '100%';
    loginModal.style.height = '100%';
    loginModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    loginModal.style.display = 'flex';
    loginModal.style.justifyContent = 'center';
    loginModal.style.alignItems = 'center';
    loginModal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 5px;">
            <h2>Login</h2>
            <form id="login-form">
                <label for="login-username">Username:</label>
                <input type="text" id="login-username" name="username" required><br><br>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="password" required><br><br>
                <button type="submit">Login</button>
                <button type="button" onclick="document.body.removeChild(document.getElementById('login-modal'))">Back</button>
            </form>
        </div>
    `;
    document.body.appendChild(loginModal);

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            document.body.removeChild(loginModal);
        } else {
            alert('Invalid username or password!');
        }
    });
});