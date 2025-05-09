/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('change-text-btn');
    changeTextButton.addEventListener('click', () => {
        changeTextButton.textContent = 'Clicked!';
    });

    const hoverBox = document.getElementById('hover-box');
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'lightblue';
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '#ddd';
    });

    const keypressInput = document.getElementById('keypress-input');
    keypressInput.addEventListener('keypress', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    const secretButton = document.getElementById('secret-btn');
    secretButton.addEventListener('dblclick', () => {
        alert('Secret Action Triggered!');
    });

    const colorChangeButton = document.getElementById('color-change-btn');
    colorChangeButton.addEventListener('click', () => {
        colorChangeButton.style.backgroundColor = '#6200ea';
        colorChangeButton.style.color = 'white';
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(tab.dataset.content).style.display = 'block';
        });
    });

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        if (!email.checkValidity()) {
            document.getElementById('email-error').textContent = 'Invalid email format';
        } else {
            document.getElementById('email-error').textContent = '';
        }

        if (!password.checkValidity()) {
            document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        } else {
            document.getElementById('password-error').textContent = '';
        }

        if (email.checkValidity() && password.checkValidity()) {
            alert('Form submitted successfully!');
        }
    });
});