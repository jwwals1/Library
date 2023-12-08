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
    let title = prompt('title?')
    let author = prompt('author?')
    let pages = prompt('pages?')
    let read = prompt('read?')
    // let title = document.querySelector('title').value;
    // let author = document.querySelector('author').value;
    // let pages = document.querySelector('pages').value
    // let read = document.querySelector('read').value
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    library()
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
// console.log(theHobbit.info())


function library() {
    const books = document.getElementById('library')
    books.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;
        books.appendChild(bookEl)
    }
}




library()