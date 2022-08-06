// UI
const loginSection = document.querySelector('.login'),
      registerSection = document.querySelector('.register'),
      forgotSection = document.querySelector('.forgot');

const loginLink = document.querySelector('.login-link'),
      registerLink = document.querySelector('.register-link'),
      forgotLink = document.querySelector('.forgot-link');

const closeBtn = document.querySelector('.close');


registerLink.addEventListener('click',()=>{
    loginSection.style.display = 'none';
    registerSection.style.display = 'flex';
});

loginLink.addEventListener('click',()=>{
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
});

forgotLink.addEventListener('click',()=>{
    loginSection.style.display = 'none';
    forgotSection.style.display = 'flex';
});

closeBtn.addEventListener('click',()=>{
    forgotSection.style.display = 'none';
    loginSection.style.display = 'flex';
});