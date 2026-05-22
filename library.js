const myLibrary = [];


function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggle = function () {
    this.read = !this.read;
}

function addBookToLibrary (title, author, pages, read) {
    const book = new Book (title, author, pages, read);

    myLibrary.push(book);
     return Book();
}

// Looping the books to appear on HTML.

function displayBooks () {
    const library = document.getElementById('library');
    library.innerHTML = '';

myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add ('card');
    card.setAttribute('data-id', book.id);
    card.innerHTML = `
    <p> <strong> ID: </strong> ${book.id} </p>
    <h2> ${book.title} </h2>
    <p> ${book.author} </p>
    <p> ${book.pages} </p>
    <p> ${book.read  ? 'Yes' : 'No'} </p>
    
    <button class = 'toggle'> Toggle Read </button>
    <button class = 'remove-book'> Remove Book </button>`;

    card.querySelector('.toggle').addEventListener('click', () => {
        book.toggle();
        displayBooks();
    })

    card.querySelector('.remove-book').addEventListener('click', () => {
        const index = myLibrary.findIndex(b => b.id === book.id);
        myLibrary.splice(index, 1);
        displayBooks();
    })


    library.appendChild(card);
})
}


// Form Handling.

const button = document.getElementById('new-book');
const form = document.getElementById ('book-form');
button.addEventListener('click', () => {
    form.style.display = 'block';
})

const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    form.reset();
} )
