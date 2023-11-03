btn = document.getElementById('env')
btn.addEventListener('click', clicou)
btn.addEventListener('mouseout', saiu)
btn.addEventListener('mousemove', moveu)

function clicou() {
    env.style.backgroundColor = '#000022'
    nome = nome.value
    alert(`Olá ${nome}, seja bem-vindo!`)
    recepcao.innerHTML = `<p>Nós te amamos ${nome} &#x1f604;</p>`
}

function saiu() {
    env.style.boxShadow = 'none'
}

function moveu() {
    env.style.backgroundColor = '#020263'
}