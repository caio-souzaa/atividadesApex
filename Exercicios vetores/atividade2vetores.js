let numbers = []
let userInput
let sum = 0


for (let i = 0; i < 5; i++) {
    userInput = parseFloat(window.prompt('Digite um numero'))
    numbers.push(userInput)
    sum += userInput
}
for (let i = 0; i < numbers.length; i++) {
    console.log(`i = ${i}  numbers[i] = ${numbers[i]}`)
}

console.log(`result = ${sum}`)