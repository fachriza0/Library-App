const currentDiv = document.getElementById("books");

const myLibrary = [
  {
    title: "hobbit",
    pages: 200,
  },
  {
    title: "LOTR",
    pages: 220,
  },
  {
    title: "Test",
    pages: 120,
  },
];

function book() {
  // what kind of loop to use?
  // how to get each object in the array above?
  // How to display the book title and pages in a new div?
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title + " " + myLibrary[i].pages);
    const newDiv = document.createElement("div");
    newDiv.id = "book";
    newDiv.className = "book";
    newDiv.textContent = `${myLibrary[i].title}, ${myLibrary[i].pages} pages`;
    currentDiv.appendChild(newDiv);
  }
}

book();

function addBookToLibrary() {}
