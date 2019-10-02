var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = document.getElementById('date').innerHTML = today.toLocaleString('en-US', options)
// const day = today.toLocaleString('en-US', options)
// const date = document.getElementById('date').innerHTML = day;







