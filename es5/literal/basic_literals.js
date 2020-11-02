const s1 = 'Hello';
console.log(s1);
console.log(typeof s1);

const s2 = new String('Hi');
console.log(typeof s2);
// alert(1);
// console.log(window);
// console.log(navigator.appVersion);

//Object
const book1 = {
    title: 'Book One',
    author: 'John Doeeeer',
    year: '2013',
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSumary());


const book2 = {
    title: 'Book Two',
    author: 'Anh Nhat',
    year: '2015',
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book2.getSumary());
console.log(Object.values(book2));
console.log(Object.keys(book2));