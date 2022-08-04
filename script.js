let container = document.querySelector('#container')
let botao = document.getElementById('night')

botao.addEventListener ('click', () => {
    container.classList.toggle('dark')
})