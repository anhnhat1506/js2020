// function sayHi() {
//     console.log(name)
//     console.log(age)
//     var name = 'Anh Nhat'
//     let age = 21
// }
// sayHi()
// function bark() {
//     console.log('wooft')
// }
// bark.animal = 'dog'

const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()