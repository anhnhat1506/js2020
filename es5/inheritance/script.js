function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSumary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Magazine.prototype = Object.create(Book.prototype);

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

Magazine.prototype.constructor = Magazine;
console.log(mag1.getSumary());
console.log(mag1);