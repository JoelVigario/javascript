var btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular() {
    let v1 = Number(n1.value)
    let v2 = Number(n2.value)
    let s = 0
    switch (operacao.value) {
        case 'soma':
            s = v1 + v2
            break
        case 'sub':
            s = v1 - v2
            break
        case 'mul':
            s = v1 * v2
            break
        case 'div':
            s = v1 / v2
    }
    res.innerHTML = (`<p>O resultado é <strong>${s}</strong></p>`)
}