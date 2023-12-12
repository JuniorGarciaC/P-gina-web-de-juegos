let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let forgotPasswordLink = document.getElementById("forgotPasswordLink");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    showForgotPasswordLink(true);
};

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    showForgotPasswordLink(false); 
};

function showForgotPasswordLink(show) {
    if (show) {
        forgotPasswordLink.style.display = "block";
    } else {
        forgotPasswordLink.style.display = "none";
    }
}

signIn.onclick = function() {
    console.log("Click en el botón inicio de sesión");
    
    // Resto del código del primer manejador
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    showForgotPasswordLink(true);
};

document.addEventListener("DOMContentLoaded", function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    showForgotPasswordLink(true);
});
