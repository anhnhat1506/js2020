function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;


    this.getSumary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Revival', '2019');
console.log(book1.getSumary());
console.log(book2);