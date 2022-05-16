const personal = [
    { name: 'Ana', age: 21 },
    { name: 'Revival', age: 25 },
    { name: 'SYmaci', age: 30 }
];

const getAna = (ae) => {
    return ae.name === 'Ana'
}

const getAge = (nn) => {
    return nn.age == 30
}

const item = personal.find(ele => ele.name === 'Revival')

// console.log(personal.find(getAna), personal.find(getAge))
// console.log(item)
const colors = ['red', 'blue', 'yellow']
console.log(colors.includes('grey'))