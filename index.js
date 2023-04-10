var box=document.querySelector('.box');
var loginLink=document.querySelector('.login-link');
var registerLink=document.querySelector('.register-link');
registerLink.addEventListener('click',function(){
    box.classList.add('active');
})
loginLink.addEventListener('click',function(){
    box.classList.remove('active');
})
