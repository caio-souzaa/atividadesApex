let names = []
let userInput
let running = true
exit = 'sair'

while (running) {
    userInput = window.prompt('Informe um nome')
    names.push(userInput)

    if (userInput == exit) {
        running = false
    }

}

document.write('Quantidade de nomes digitados = ' + names.length + ' ' + ' ')

document.write('Nomes digitados = ' + names)

