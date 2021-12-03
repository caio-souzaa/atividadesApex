let numbers = []
let userInput
let numberFinal

///O usuario pede 5 números e os números são exibidos ao contrario

for (let i = 0; i < 5; i++) {

    userInput = (window.prompt('Digite um numero'))
    numbers.push(userInput)


}

for (let i = numbers.length - 1; i >= 0; i--) {

    document.write(numbers[i])


}


