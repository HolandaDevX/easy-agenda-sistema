const form = document.querySelector("#form")
const emailLogin = document.querySelector('#email-login')
const passLogin = document.querySelector('#pass-login')
const btnLogin = document.querySelector('#btn-login')
const btnRegister = document.querySelector('#btn-register')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const emailLoginValue = emailLogin.value
    console.log(emailLoginValue)                 
})
