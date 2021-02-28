function shoppingList(arrayOfItems) {

  let body = document.querySelector("body");
  // Creates h1 element inside body
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = "My Shopping List";
  // Adds h1Tag as first child
  body.prepend(h1Tag);

  // * You should use an unordered list: `<ul>`. Creates a ul tag.
  let ulTag = document.createElement("ul");

  // * Each item from the array should be in a `<li>` tag. Creates a li tag, adds each item in shopping list as an li element, adds the li elements as children of ul.
  for (let item of arrayOfItems) {
    let liTag = document.createElement("li");
    liTag.innerText = item;
    ulTag.appendChild(liTag);
  };

  // * All of your HTML should go inside the `<div>` with the id **"content"**. Adds ul element as a child of the div with id "content".
  content.appendChild(ulTag);
};

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);