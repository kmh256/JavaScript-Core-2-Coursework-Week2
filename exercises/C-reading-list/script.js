function readingList(books) {

  // Creates h1 element inside body
  let body = document.querySelector("body");
  let h1Element = document.createElement("h1");
  h1Element.innerText = `My Reading List`;
  h1Element.style.paddingLeft = "70px";

  // Adds h1Tag as first child
  body.prepend(h1Element);

  // - Use a `<ul>` to display the books. Creates a ul element and appends to body.
  let ulElement = document.createElement("ul");
  body.appendChild(ulElement);
  ulElement.style.display = "flex";
  ulElement.style.flexDirection = "row";
  ulElement.style.listStyle = "none";

  // - Iterate through the list of books.
  for (book of books) {
    // - For each book, create a `<p>` element with the book title and author and append it to the page.
    let pElement = document.createElement("p");
    pElement.innerText = `Title: ${book.title} \n Author: ${book.author}`;
    // - Add an `<img>` to each book that links to a URL of the book cover.
    let imgElement = document.createElement("img");
    imgElement.src = book.image;
    let liElement = document.createElement("li");

    // Styling
    liElement.style.border = "2px solid black";
    liElement.style.margin = "20px";
    liElement.style.padding = "20px";
    liElement.style.width = "12%";
    imgElement.style.width = "50%";

    // Appending elements as children
    ulElement.appendChild(liElement);
    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);
    
    // - Change the style of the book depending on whether you have read it (green) or not (red).
    if (book.alreadyRead === true) {
      liElement.style.backgroundColor = "green";
    } else if (book.alreadyRead === false) {
      liElement.style.backgroundColor = "red";
    }
  }
  // - All of your HTML should go inside the `<div>` with the id **"content"**.
  content.appendChild(ulElement);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN2hAarOb06RWqIwgkQcw9SWYnB4xXSR3gGWrH8wGdz717zSayptuuWKOJg&usqp=CAc"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmYNyaoiaJn8PZ_CwMP58W_rIkFmvBmZz_4_4qQ4DtOmv2EA4MwEizMqfcuJa1EROicKOdGzNC24c3XTZ6Pc9DRdwYucJhhJRYZeQNoY5gMgOWXwuQiH6iUg&usqp=CAE"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP_IsHS9xeosjzrBMnkJBLAMMy5s_K2pK-Pq-cfecT8Zzg23N5BIZBfQpPg&usqp=CAc"
  }
];

readingList(books);