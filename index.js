document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const resultText = document.getElementById('resultText');
    const generatedPasswordField = document.getElementById('generatedPassword');
    const analyzeButton = document.getElementById('analyzeButton');
    const checkButton = document.getElementById('checkButton');
    const generateButton = document.getElementById('generateButton');

    analyzeButton.addEventListener('click', () => {
        const password = passwordInput.value;
        const result = analyzePassword(password);
        resultText.textContent = result;
    });

    checkButton.addEventListener('click', () => {
        const password = passwordInput.value;
        const result = checkPassword(password);
        resultText.textContent = result;
    });

    generateButton.addEventListener('click', () => {
        const generatedPassword = generatePassword();
        generatedPasswordField.value = generatedPassword;
    });

    function analyzePassword(password) {
        const length = password.length;
        let hasUpper = false;
        let hasLower = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (const ch of password) {
            if (/[A-Z]/.test(ch)) hasUpper = true;
            else if (/[a-z]/.test(ch)) hasLower = true;
            else if (/[0-9]/.test(ch)) hasDigit = true;
            else hasSpecial = true;
        }

        let strength = 'Weak';
        if (length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
            strength = 'Strong';
        } else if (length >= 6 && ((hasUpper && hasLower) || (hasDigit && (hasUpper || hasLower)))) {
            strength = 'Medium';
        }

        return `Password Strength: ${strength}`;
    }

    function checkPassword(password) {
        const minLength = 8;
        let hasUpper = false;
        let hasLower = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (const ch of password) {
            if (/[A-Z]/.test(ch)) hasUpper = true;
            else if (/[a-z]/.test(ch)) hasLower = true;
            else if (/[0-9]/.test(ch)) hasDigit = true;
            else hasSpecial = true;
        }

        if (password.length >= minLength && hasUpper && hasLower && hasDigit && hasSpecial) {
            return 'Password is valid.';
        } else {
            return 'Password is invalid. It should be at least 8 characters long and contain upper case letters, lower case letters, digits, and special characters.';
        }
    }

    function generatePassword() {
        const length = 12;
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
        const specialChars = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~';
        const allChars = upperCase + lowerCase + digits + specialChars;

        let password = '';
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        password += digits.charAt(Math.floor(Math.random() * digits.length));
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

        for (let i = 4; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return password;
    }
});
