function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  // Iterate through array of todos
  for (let todo of todos) {

    // Create list, span and button elements. Give the elements class names to style.
    let listEl = document.createElement("li");
    listEl.className = "list-group-item d-flex justify-content-between align-items-center";
    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    let completedBtn = document.createElement("i");
    completedBtn.className = "fa fa-check";
    let deleteBtn = document.createElement("i");
    deleteBtn.className = "fa fa-trash";

    // Add each task from array of todos. Append each list item (task) to list and buttons to span.
    listEl.innerText = todo.task;
    list.appendChild(listEl);
    listEl.appendChild(spanEl);
    spanEl.appendChild(completedBtn);
    spanEl.appendChild(deleteBtn);

    // Each button should have an event listener for when they are clicked.
    completedBtn.addEventListener("click", lineThrough);
    deleteBtn.addEventListener("click", deleteLi);

    function lineThrough() {
    // The completedBtn event listener should add the line-through style to the todo.
      if (listEl.style.textDecoration === "line-through") {
        listEl.style.textDecoration = "none";
        // The event listener should also remove the line-through style conditionally by checking if the style is already applied.
      } else {
        listEl.style.textDecoration = "line-through";
      }
    }

    function deleteLi() {
    // The deleteBtn event listener should remove the todo from the list.
      listEl.remove();
    }
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Checks if input is not blank then adds input value to new obj. 
  if (todoInput.value !== ""){
    let newTodoObj = {};
    let newTodoArr = [];
    newTodoObj.task = todoInput.value;
    newTodoObj.completed = false;
    newTodoArr.push(newTodoObj);
    populateTodoList(newTodoArr);
    // reset the input field to be blank after creating a todo!
    todoInput.value = "";
  }
}
// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

// Creates a delete all button with same styling as the add button
let deleteAllBtn = document.createElement("button");
let addDelEl = document.querySelector(".card-body");
addDelEl.appendChild(deleteAllBtn);
deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);
deleteAllBtn.className = "btn btn-primary mb-3";
deleteAllBtn.innerText = "Delete All Todos";

// Checks each listEl for "line-through" styling and deletes if true
function deleteAllCompletedTodos() {
  let listEl = document.getElementsByTagName("li");
  for (let i = 0; i < listEl.length ; i++) {
    if (listEl[i].style.textDecorationLine === "line-through") {
      listEl[i].remove();
      i--;
    }
  }
}