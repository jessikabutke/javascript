function calcular() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Favor digitar um número!')
    }

    var n = Number(numero.value)
    tab.innerHTML = ''
    for (var i = 1; i <= 10; i++){
        var multi = i * n
        var item = document.createElement('option')
        item.text = `${n} x ${i} = ${multi}`
        item.value = `tab ${i}`
        tab.appendChild(item)
    }
}