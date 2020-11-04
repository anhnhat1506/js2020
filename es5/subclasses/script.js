class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }
    getSumary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Magazine subclasses
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}


//Instance Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'January');

console.log(mag1.getSumary());