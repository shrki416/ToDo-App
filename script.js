const todaysDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const date = (document.getElementById("date").innerHTML = todaysDate.toLocaleString(
  "en-US",
  options
));

let userInputValue = document.getElementById("addForm");

let todoList = document.getElementById("items");

// add item
userInputValue.addEventListener("submit", addItem);
// remove item
todoList.addEventListener("click", removeItem); 
// check-off item
todoList.addEventListener("click", checkOffItem);

function addItem(e) {
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
}

function removeItem(e) {
  if (e.target.classList.contains("fa-trash")) {
    let remove = e.target.parentElement;
    todoList.removeChild(remove);
  }
}

function checkOffItem(e) {
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.style.textDecoration = "line-through";
  }
}