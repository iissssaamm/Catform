const buttonSignUp= document.querySelector('.button-sign-up')
const buttonLogin= document.querySelector('.button-login')
const signUp=document.querySelector('.sign-up')//from signup
const login=document.querySelector('.login')//form login

//console.log(button)
buttonSignUp.addEventListener('click',()=>{
   signUp.classList.add('animate')
    signUp.classList.remove('reverse-animate') 
   login.classList.add('reverse-animate')

   
})
buttonLogin.addEventListener('click',()=>{
    login.classList.add('animate')
    login.classList.remove('reverse-animate')
    signUp.classList.add('reverse-animate')
 })
