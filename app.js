function validateForm() {
    const name =
        document.getElementById("name").value;
    
    const email =
        document.getElementById("email").value;
    const password =
        document.getElementById("password").value;
    
    const nameError =
        document.getElementById("name-error");
    
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    
    

    nameError.textContent = "";
    
    emailError.textContent = "";
    passwordError.textContent = "";
   

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    return isValid;
}
