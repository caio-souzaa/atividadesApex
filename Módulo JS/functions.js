function Person(name, age, nickName, lastName) {
    this.name = name
    this.age = age
    this.id = Math.random(100000)
    this.nickName = nickName
    this.lastName = lastName
}

const tito = new Person('João', 24, 'tito', 'Deluchi')
const roberto = new Person('Roberto', 17, 'Beto Gol', 'Juchem')
let people = [tito, roberto]

function verifyAge(person) {
    return person.age >= 18 ? true : false
}

let olderThenEighteen = []
for (var person of people) {
    if (verifyAge(person)) {
        olderThenEighteen.push(person)
    }
}
console.log(olderThenEighteen)