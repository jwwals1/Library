const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    this.info = function () {
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }
}

function addBookToLibrary() {
    let title = prompt('What is the title')
    let author = prompt('Who is the author')
    let pages = prompt('how many pages')
    let read = prompt('have you read it ')
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
// console.log(theHobbit.info())
