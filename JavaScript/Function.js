function calcularMedia(){
    let total = 0
    let qtd = arguments.length
    let x = 0

    while(typeof arguments[x] === 'number'){
        total += arguments[x]
        x++
    }

    return (total / qtd).toFixed(2)
}

function sortear(n){
    let _n = n || 1
    let nSorteado = Math.random()
    nSorteado = nSorteado * _n
    nSorteado = Math.floor(nSorteado)

    return nSorteado
}