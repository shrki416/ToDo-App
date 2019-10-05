let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = document.getElementById('date').innerHTML = today.toLocaleString('en-US', options)
// const day = today.toLocaleString('en-US', options)
// const date = document.getElementById('date').innerHTML = day;


let userInput = document.getElementById('addForm');     // input value

let list = document.getElementById('items');    // todo list

userInput.addEventListener('submit', addItem);  // add item
list.addEventListener('click', removeItem);     // remove item
list.addEventListener('click', checkOffItem);   // check off item

// add item
function addItem(e){
    e.preventDefault();                                     // prevent default behaviour
    let newTodo = document.getElementById('addTodo').value; // get input value
    let newItem = document.createElement('li');             // create new element -> li
    newItem.id = 'newTodo';                                 // add class name to li
    newItem.appendChild(document.createTextNode(newTodo));  // add text node with input value
    let deleteBtn = document.createElement('span');         // create the delete button element
    deleteBtn.className = 'fas fa-trash';                   // add class to delete button
    newItem.appendChild(deleteBtn);                         // add delete button to li element
    let checkMark = document.createElement('span');         // create check mark
    checkMark.className = 'fas fa-check';                   // add class to check mark
    newItem.appendChild(checkMark);                         // add check mark to li element
    list.appendChild(newItem);                             // add newly created (user) li to list-items
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('fa-trash')){
        let remove = e.target.parentElement;
        list.removeChild(remove);
    }
}

// complete item
function checkOffItem(e){
    if(e.target.classList.contains('fa-check')){
        alert('clicked!'); // check off item
        
        let items = [];
        items.push(document.getElementById('newTodo'));

        console.log(items);
        
        for (i = 0; i < items.length; i++){
            document.getElementById('newTodo').style.textDecoration = 'line through';
        }
        
    }
}

// local storage