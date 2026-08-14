const usuarios = [
    {
        email: 'joel123@gmail.com',
        senha: '!12345678@'
    }
]

const formLogin = document.querySelector('.form-login')
const emailLogin = document.querySelector('#email-login')
const passLogin = document.querySelector('#pass-login')
const containerBtn = document.querySelector('.container_btn')
const errorMessage = document.querySelector('.message-error-login')


formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = emailLogin.value
    const senha = passLogin.value

    const autenticar = usuarios.find((usuario) => {
        return (usuario.email === email) && (usuario.senha === senha)
    })

    if (autenticar) {
        window.location = "/app/appointment.html"
    } else {
        messageErrorLogin()
    }
})


//feedback visual de senha/e-mail incorreto
const messageErrorLogin = () => {
    errorMessage.textContent = 'Email ou senha incorretos.'
    formLogin.insertBefore(errorMessage, containerBtn)

    emailLogin.value = ''
    passLogin.value = ''
}