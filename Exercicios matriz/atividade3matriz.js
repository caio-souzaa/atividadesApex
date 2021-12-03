let listNumbers = [
    [], [], [], []]

let sum = 0
let average = 0




///EXERCICIO COM ERRO
///EXERCICIO COM ERRO





for (let i = 0; i < 16; i++) {

    let userNumber = parseFloat(window.prompt('Digite um valor'))
    listNumbers.push(userNumber)

    sum += userNumber
}




///EXERCICIO COM ERRO
///EXERCICIO COM ERRO



average = sum / 16

for (let i = 0; i <= listNumbers.length; i++) {
    for (let j = 0; j < 4; j++) {
        document.write(`${lisNumbers}${[i][j]} <br>`)
    }
}

document.write('A soma dos valores é = ' + sum + 'e a média dos valores é' + average)

///EXERCICIO COM ERRO
///EXERCICIO COM ERRO
///EXERCICIO COM ERRO