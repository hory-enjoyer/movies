import { users } from '../data/users.js'; 

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
            document.getElementById('register-button').style.display = 'none';
            document.getElementById('login-button').style.display = 'none';
            document.getElementById('profile-button').style.display = 'inline-block';
        } else {
            alert('Invalid username or password!');
        }
    });
});