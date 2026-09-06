const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-signup");

btnSignIn.addEventListener("click", () =>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", () =>{
    container.classList.add("toggle");
});