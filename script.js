let today = new Date();
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const date = (document.getElementById("date").innerHTML = today.toLocaleString(
  "en-US",
  options
));
// const day = today.toLocaleString('en-US', options)
// const date = document.getElementById('date').innerHTML = day;

let userInput = document.getElementById("addForm"); // input value

let list = document.getElementById("items"); // todo list

userInput.addEventListener("submit", addItem); // add item
list.addEventListener("click", removeItem); // remove item
list.addEventListener("click", checkOffItem); // check-off item

// add item
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
  list.appendChild(li);
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains("fa-trash")) {
    let remove = e.target.parentElement;
    list.removeChild(remove);
  }
}

// complete item
function checkOffItem(e) {
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.style.textDecoration = "line-through";
  }
}
