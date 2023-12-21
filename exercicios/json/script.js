const objeto = [
    {
        "nome": "Mateus",
        "idade": 30,
        "trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Suplina"
        },
        "hobbies": ["Meditar", "Programar", "Criar gráficos"]
    },
    {
        "nome": "Pedro",
        "idade": 26,
        "trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        },
        "hobbies": ["Nadar", "Pescar"]
    }
]

// converte de Object para JSON
const jsonData = JSON.stringify(objeto)
// converte de JSON para object
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

// Tratamento de lista de objectos
objData.map((pessoa) => {
    console.log(pessoa.nome)
})