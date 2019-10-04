let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = document.getElementById('date').innerHTML = today.toLocaleString('en-US', options)
// const day = today.toLocaleString('en-US', options)
// const date = document.getElementById('date').innerHTML = day;

// get value of the input
let form = document.getElementById('addForm');

let todos = document.getElementById('items');

// submit event
form.addEventListener('submit', addItem);
// delete event
todos.addEventListener('click', removeItem);
// complete event


// add item
function addItem(e){
    e.preventDefault(); 

        // get input value
    let newTodo = document.getElementById('addTodo').value;
        // create new element - list item
    let newItem = document.createElement('li');
        // add class name to li
    newItem.className = 'todoList';
        // add text node with input value
    newItem.appendChild(document.createTextNode(newTodo));
        // create the delete button element
    let deleteBtn = document.createElement('span');
        // add class to delete button
    deleteBtn.className = 'fas fa-trash';
        // add delete button to li element
    newItem.appendChild(deleteBtn);
        // create check mark
    let checkMark = document.createElement('span');
        // add class to check mark
    checkMark.className = 'fas fa-check';
        // add check mark to li element
    newItem.appendChild(checkMark);
        // add newly created (user) li to list-items
    todos.appendChild(newItem);
}

// remove item

function removeItem(e){
    if(e.target.classList.contains('fa-trash')){
        let li = e.target.parentElement;
        todos.removeChild(li);
    }
}

// complete item

