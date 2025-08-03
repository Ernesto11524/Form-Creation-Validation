document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function () {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        let isValid = true;
        let messages = [];

        if (username.length < 3){
            isValid = false;
            const usernameError = "The minimum length of username is 3";
            messages.push(usernameError);
        }

        if (!(email.includes('@') || email.includes('.'))){
            isValid = false;
            const emailError = "Your email address doesn't contain '@' or '.'";
            messages.push(emailError);
        }

        if (password.length < 8) {
            isValid = false;
            const passwordError = "Your password should at be 8 characters.";
            messages.push(passwordError);
        }

        feedbackDiv.style.display = "block";
        if (isValid === true){
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745";
        }
        else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })

})