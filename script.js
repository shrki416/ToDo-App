const todaysDate = new Date();

const date = document.getElementById("date");
const userInputValue = document.getElementById("addForm");
const todoList = document.getElementById("items");

const savedTodos = [];
const getTodos = JSON.parse(localStorage.getItem("todos")) || [];

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

date.innerHTML = todaysDate.toLocaleString("en-US", options);

getTodos.forEach((todo) => {
  let li = document.createElement("li");
  li.id = "newTodo";
  li.appendChild(document.createTextNode(todo));

  let deleteBtn = document.createElement("span");
  deleteBtn.className = "fas fa-trash";
  li.appendChild(deleteBtn);

  let checkMark = document.createElement("span");
  checkMark.className = "fas fa-check";
  li.appendChild(checkMark);

  todoList.appendChild(li);
});

const addItem = (e) => {
  e.preventDefault();

  let newTodo = document.getElementById("addTodo").value;
  let li = document.createElement("li");
  li.id = "newTodo";
  li.appendChild(document.createTextNode(newTodo));

  let deleteBtn = document.createElement("span");
  deleteBtn.className = "fas fa-trash";
  li.appendChild(deleteBtn);

  let checkMark = document.createElement("span");
  checkMark.className = "fas fa-check";
  li.appendChild(checkMark);

  todoList.appendChild(li);
  savedTodos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  document.getElementById("addTodo").value = "";
  document.getElementById("addTodo").focus();
};

const removeItem = (e) => {
  if (e.target.classList.contains("fa-trash")) {
    let remove = e.target.parentElement;
    todoList.removeChild(remove);
  }
  localStorage.setItem("todos", JSON.stringify(savedTodos));
};

const checkOffItem = (e) => {
  const todoItem = e.target.parentElement;
  todoItem.classList.contains("checked")
    ? todoItem.classList.remove("checked")
    : todoItem.classList.add("checked");
};

userInputValue.addEventListener("submit", addItem);
todoList.addEventListener("click", removeItem);
todoList.addEventListener("click", checkOffItem);
