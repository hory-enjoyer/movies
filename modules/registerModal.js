import { users } from '../data/users.js'; 

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
                <input type="password" id="password" name="password" required minlength="6" pattern="(?=.*[0-9])(?=.*[a-zA-Z]).*">
                <label for="password" style="font-size: 0.8em; color: grey; margin-left: 10px;">*The password must be at least 6 characters long and contain at least one letter.</label><br><br>
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
            password: password,
            favorites: [],
        };

        users.push(user);

        document.body.removeChild(modal);
    });
});