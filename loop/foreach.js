/*forEach
vi du dung bang anomyous function
https://www.w3schools.com/js/js_function_definition.asp
*/
const animalArr = ['dog', 'pig', 'cat', 'fish', 'chicken'];
animalArr.forEach(function (animal, index) {
    console.log(`con vat: ${animal} nam o vi tri ${index}`)
})

/*
dung arrow function =>
https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://www.w3schools.com/js/js_arrow_function.asp
*/

animalArr.forEach(arrayElement => {
    console.log(`option: ${arrayElement}`)
})