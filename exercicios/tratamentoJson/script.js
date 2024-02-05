var pes = null
fetch("dados.json").then( (response) => {
    response.json().then((pessoa) => {
        pes = pessoa
    })
})

document.querySelector('#nome').value = pes.nome
