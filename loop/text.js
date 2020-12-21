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

(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();

console.log(typeof typeof 1)

const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)

const concat_reduce = [[0,1], [2,3]].reduce(
    (acc, cur) => {
        return acc.concat(cur)
    },[1, 7]
)
console.log(concat_reduce)


const array_map = [1,2,3].map(
    num => {
        if(typeof num === 'number') return
        return num*2
    }
)
console.log(array_map)

