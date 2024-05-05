import './modules/LanguageSwitcher.js';
import './modules/generateCards.js';
import './modules/generateInputs.js';
import './modules/SearchAndFilters.js';

document.getElementById('register-button').addEventListener('click', function() {
    const modal = document.createElement('div');
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
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"><br><br>
                <button type="submit">Register</button>
                <button type="button" onclick="this.parentElement.parentElement.parentElement.style.display='none'">Back</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
});