function arrayNumbers(a, b, ...numbers) {
    return numbers
}
console.log(arrayNumbers(3, 5, 7, 1, 0))

let letters = ["a", "b", "c", "d", "e", "f"]
for (let letter of letters) {
    console.log(letter)
}

let greet = "Hế lô"
for (character of greet) {
    console.log(character)
}

let sum = (a, b) => a + b
console.log(sum(2, 3))