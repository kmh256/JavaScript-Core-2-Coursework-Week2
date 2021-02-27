function todoList(todos) {

  // Creates h1 element inside body
  let body = document.querySelector("body");
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = "Todo List";
  content.appendChild(h1Tag);
  // Creates ul element inside body
  let ulTag = document.createElement("ul");
  body.appendChild(ulTag);

  for (let job of todos){
    // Creates li tag for each job and adds as a child to ulTag
    let liTag = document.createElement("li");
    liTag.innerText = job.todo;
    ulTag.appendChild(liTag);

    // * Each todo should have an event listener for when they are clicked.
    liTag.addEventListener("click", lineThrough);

    function lineThrough() {
      // * The event listener should add the line-through style to the todo.
      if (liTag.style.textDecoration === "line-through") {
        liTag.style.textDecoration = "none";
        // The event listener should also remove the line-through style conditionally by checking if the style is already applied.
      } else {
        liTag.style.textDecoration = "line-through";
      }
    }
  }

  // * All of your HTML should go inside the `<div>` with the id **"content"**.
  content.appendChild("ulTag");
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);