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

// const foo = () => console.log('First')
// const bar = () => setTimeout(() => console.log('Second'))
// const baz = () => console.log('Third')

// bar()
// foo()
// baz()

// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();

// console.log(typeof typeof 1)

// const numbers = [1, 2, 3]
// numbers[10] = 11
// console.log(numbers)

// const concat_reduce = [[0,1], [2,3]].reduce(
//     (acc, cur) => {
//         return acc.concat(cur)
//     },[1, 7]
// )
// console.log(concat_reduce)


// const array_map = [1,2,3].map(
//     num => {
//         if(typeof num === 'number') return
//         return num*2
//     }
// )
// console.log(array_map)

// let a = 3
// let b = new Number(3)
// let c = 3
// console.log(a == b)
// console.log(a === b)
// console.log(b === c)

// class Chameleon {
//   static colorChange(newColor){
//     this.newColor =newColor;
//     return this.newColor
//   }
//   constructor({ newColor = 'green'} ={}){
//     this.newColor = newColor
//   }
// }
// const freddie = new Chameleon({ newColor: 'purple'});
// freddie.colorChange('orange')

// let number = 0
// console.log(number++)
// console.log(++number)
// console.log(number)


// function getPersonInfo(one, two, three){
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }
// const person = 'Lydia'
// const age = 21
// getPersonInfo`${person} is ${age} years old`

// function checkAge(data){
//   if (data === {age: 18}){
//     console.log('You are an adult')
//   } else if (data == {age: 18}){
//     console.log('You are still an adult')
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`)
//   }
// }
// checkAge({ age: 18})

function getAge(){
  "use strict"
  age = 21
  console.log(age)
}
getAge()