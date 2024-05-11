import { users } from '../data/users.js'; 

export let loggedInUser = null;

document.getElementById('login-button').addEventListener('click', function() {
    if (document.getElementById('login-modal') || document.getElementById('registration-modal')) {
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
            loggedInUser = user;
            document.getElementById('register-button').style.display = 'none';
            document.getElementById('login-button').style.display = 'none';
            document.getElementById('profile-button').style.display = 'inline-block';
            
            const favoriteButtons = document.querySelectorAll('.favorite-button');
            favoriteButtons.forEach(button => {
                button.style.display = 'inline-block';
                button.addEventListener('click', function() {
                    const movieId = button.getAttribute('data-movie-id');
                    if (!user.favorites.includes(movieId)) {
                        user.favorites.push(movieId);
                        console.log('Added to favorites:', user.favorites);
                    }
                });
            });
        
            document.body.removeChild(loginModal);
        } else {
            loggedInUser = null;
            alert('Invalid username or password!');
        }
    });
});