var inputName = document.getElementById('fname');
var inputBirthday = document.getElementById('bday');
var inputEmail = document.getElementById('email');
var inputNumber = document.getElementById('number');
var inputAddress = document.getElementById('autocomplete');
var next = document.querySelector('.next');

function checkInput(){
    if(inputName.value !== ""){
        next.style.backgroundColour = '#81C9EC';
    } else {
        next.style.backgroundColour = '#A1A9AD';
    }
}