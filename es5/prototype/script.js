function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSumary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} was published ${years} years`
};

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Revival', '2019');
console.log(book1.getSumary());
book2.revise('2020');
console.log(book2);
// console.log(book2.getAge());