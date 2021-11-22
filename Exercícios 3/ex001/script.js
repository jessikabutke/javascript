var numeros = []
var res = document.getElementById('res')
var item = document.getElementById('nums')


function adicionar() {
    var num = document.getElementById('txtn')
    if (num.value == 0) {
        window.alert("Você precisa digitar um valor antes de adicionar.")
    } else {
        var n = Number(num.value)
        if (n < 0 || n > 100) {
            window.alert("O valor não está entre o intervalo solicitado. Digite novamente.")
        } else {
            var j = 0
            var k = 0
            while (j < numeros.length) {
                if (n == numeros[j]){
                    window.alert("Este número já foi adicionado. Digite outro valor.")
                    k += 1
                } else {
                    k += 0
                }
                j++
            }
            if (k == 0) {
                numeros.push(n)
                var it = document.createElement('option')
                it.text = `O valor ${n} foi adicionado.`
                item.appendChild(it)
            }
            
        }
    }   
}



function finalizar() {
    if (numeros.length == 0) {
        window.alert("Você precisa digitar um número antes de finalizar.")
    } else {
        res.innerHTML = `Ao todo temos ${numeros.length} números cadastrados.<br><br>`
        numeros.sort((a,b) => a - b)
        res.innerHTML += `O menor valor informado foi ${numeros[0]}.<br><br>`
        res.innerHTML += `O maior valor informado foi ${numeros[(numeros.length -1)]}.<br><br>`
        var soma = 0
        var c = 0
        while (c < numeros.length) {
            soma += numeros[c]
            c++
        }
        res.innerHTML += `Somando todos os valores temos ${soma}.<br><br>`
        var media = soma / (numeros.length)
        res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}`
        
    }

}





