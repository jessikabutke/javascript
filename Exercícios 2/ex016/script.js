function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Você precisa digitar um valor de início, fim e passo.')
    } else {
        res.innerHTML = 'Contando: '
        res.innerHTML += '<p></p>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0){
            window.alert('Não é possível utilizar passo 0. Será considerado passo 1.')
            p = 1
        }

        if (i > p){
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}
