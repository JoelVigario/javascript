


function processar () {   
    let seg = new Date().getSeconds()
    let perc = 0
    let msg = "Processando.......................".split('')
    let indexProcess = 14


    console.log(msg.join('') + ' 0%')

    do {
        // calcula o próximo segundo, daqui a 2 segundos
        if (seg + 2 > 59) {
            pxSeg = (seg + 2) - 59
        } else {
            pxSeg = seg + 2
        }
        
        nSeg = new Date().getSeconds()
        if (pxSeg == nSeg) {
            seg = nSeg
            console.clear()
            ++perc
            if (perc % 5 == 0) {
                msg[indexProcess++] = '#'
            }
            console.log(msg.join('') + ` ${perc}%`)
        }
    } while (perc < 100)
}

processar()