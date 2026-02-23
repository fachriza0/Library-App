const currentDiv = document.getElementById("books");
const form = document.getElementById("form");

const myLibrary = [
  {
    title: "hobbit",
    pages: 200,
    id: crypto.randomUUID(),
  },
  {
    title: "LOTR",
    pages: 220,
    id: crypto.randomUUID(),
  },
  {
    title: "Test",
    pages: 120,
    id: crypto.randomUUID(),
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
    newDiv.textContent = `${myLibrary[i].title}, ${myLibrary[i].pages} pages.`;
    currentDiv.appendChild(newDiv);
  }
}

book();

function addBookToLibrary() {}

function showForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
    newBook.innerHTML = "Cancel";
  } else {
    form.style.display = "none";
    newBook.innerHTML = "New Book";
  }
}

const newBook = document.getElementById("newBook");

newBook.addEventListener("click", showForm);

const name = document.getElementById("name");
const pages = document.getElementById("pages");
const submit = document.querySelector("#submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(name.value);
  console.log(pages.value);
  name.value = "";
  pages.value = "";
});
