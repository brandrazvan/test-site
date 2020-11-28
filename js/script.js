// Java Script SOURCE CODE
console.log('script is working');

//let
//const
var name = document.getElementById('username').value;
var lastname =document.getElementById('surname').value;
document.getElementById('save-button').addEventListener('la click', addElement);
var addElement = function() {
console.log(name, lastname);
}
