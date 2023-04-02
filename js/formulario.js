const logreBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const resgisterLink = document.querySelector('.register-link');

resgisterLink.addEventListener('click',() =>{
    logreBox.classList.add('active');
});

loginLink.addEventListener('click',() =>{
    logreBox.classList.remove('active');
});