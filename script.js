const myLibrary = [
    {
    title: 'How to Code',
    author: 'Lixarain',
    pages: 123,
    id: '320750a5-7979-44b0-aa37-c843deea027e',
    readStatus: "yes"
  },
  {
    title: 'Hi Stranger :D',
    author: 'Lixarain',
    pages: 123,
    id: '320750a5-7979-44b0-aa37-c843deea027e',
    readStatus: "yes"
  },
  {
    title: 'Thanks for visiting!',
    author: 'Lixarain',
    pages: 123,
    id: '320750a5-7979-44b0-aa37-c843deea027e',
    readStatus: "yes"
  },
  {
    title: 'Good luck coding!',
    author: 'Lixarain',
    pages: 123,
    id: '320750a5-7979-44b0-aa37-c843deea027e',
    readStatus: "yes"
  },
   {
    title: 'I believe in you!',
    author: 'Lixarain',
    pages: 123,
    id: '320750a5-7979-44b0-aa37-c843deea027e',
    readStatus: "no"
  }];

function Book(author, title, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.readStatus = readStatus;
}

function addBookToLibrary(author, title, pages, readStatus) {
    const newBook = new Book(author, title, pages, readStatus);
    myLibrary.push(newBook);
    displayBooks();
}




function displayBooks() {
const cardGrid = document.getElementById('card-grid');
cardGrid.innerHTML = '';
myLibrary.forEach(book => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = book.title;

    const author = document.createElement('h2');
    author.textContent = book.author;

    const readStatusDiv = document.createElement('div');
    readStatusDiv.classList.add('read-status');

    const readLabel = document.createElement('h3');
    readLabel.textContent = 'Read:';

    const readValue = document.createElement('h3');
    readValue.textContent = book.readStatus;

    readStatusDiv.appendChild(readLabel);
    readStatusDiv.appendChild(readValue);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('cardbtn-container');

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Read Toggle';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Book';

    removeBtn.addEventListener('click', () => {
    const bookIndex = myLibrary.findIndex(item => item.id === book.id);

    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
    }


    newCard.remove();
    
    });
    
    toggleBtn.addEventListener('click', () => {
    book.readStatus = (book.readStatus === 'yes') ? 'no' : 'yes';
    readValue.textContent = book.readStatus;
    });

    newCard.dataset.id = book.id

    btnContainer.appendChild(toggleBtn);
    btnContainer.appendChild(removeBtn);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(readStatusDiv);
    newCard.appendChild(btnContainer);
    cardGrid.appendChild(newCard);
});

}

displayBooks();

const dialog = document.getElementById("my-dialog");
const close = document.getElementById("close");

dialog.addEventListener('click', (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

close.addEventListener('click', () =>{
  dialog.close();
})

const bookSubmit = document.getElementById("book-submit");
bookSubmit.addEventListener("click", function(event){
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  addBookToLibrary(author, title, pages, read);
  dialog.close();
  document.getElementById("form").reset();
});

