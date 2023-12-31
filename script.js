const myLibrary = [];

function showNewBookForm() {
    let showForm = document.getElementById("bookForm")
    let showButton = document.getElementById("addBookButton")
    displayValue = "";
    if (showForm.style.display == "")
        displayValue = "none"
    showForm.style.display = displayValue

    displayButtonValue = '';
    if (showButton.style.display == "")
        displayButtonValue = "none"
    showButton.style.display = displayButtonValue
}

function toggleText(event) {
    let text = event.textContent || event.innerText;
    if (text == 'NEW BOOK FORM') {
        event.innerHTML = "HIDE FORM"
    }
    else {
        event.innerHTML = "NEW BOOK FORM"
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.read = read
    }
    toggleRead() {
        this.read = !this.read
    }


}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read)
    if (title.length == 0 || author.length == 0 || pages.length == 0) {
        alert('All values must be filled out');
        return
    }
    myLibrary.push(newBook)
    libraryInfo()
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')

function libraryInfo() {
    const books = document.getElementById('library')
    books.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML =
            `
            <div>${book.title}</div> 
            <div>${book.author}</div>
            <div>${book.pages}</div> 
            <div>${book.read ? "Read" : "Not read yet"} </div>
            <div><button onClick="deleteBook(${i})" id=deleteButton>Delete</button></div>
            <div><button onClick="readStatus(${i})" id=readStatusButton>Read Status</button></div>`;
        books.appendChild(bookEl)
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    libraryInfo();
}

function readStatus(index) {
    myLibrary[index].toggleRead();
    libraryInfo()
}

function clearInput() {
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
}

