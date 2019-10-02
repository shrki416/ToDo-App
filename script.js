var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = document.getElementById('date').innerHTML = today.toLocaleString('en-US', options)
// const day = today.toLocaleString('en-US', options)
// const date = document.getElementById('date').innerHTML = day;

// get value of the input

var form = document.getElementById('addForm');
var todos = document.getElementById('items');

// Submit form event
form.addEventListener('submit', addItem);

// Add Item
function addItem(e){
    e.preventDefault(); 

    // get input value
    var newTodo = document.getElementById('addTodo').value;
    // create new element - list item
    var newItem = document.createElement('li');
    // add class name to li
    newItem.className = 'todoList';
    // add text node with input value
    newItem.appendChild(document.createTextNode(newTodo));
    // create the delete button element
    var deleteBtn = document.createElement('span');
    // add class to delete button
    deleteBtn.className = 'fas fa-trash-alt';
    // add delete button to li element
    newItem.appendChild(deleteBtn);
    // add newly created (user) li to list-items
    todos.appendChild(newItem);

}