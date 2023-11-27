
const parola = document.getElementById("parolaInput");
const aggiungiParolaButton = document.getElementById("aggiungiParola");
const result = document.getElementById("result");


function isPalindrome (parola) {

    for (var i = 0; i < parola.length; i++) {
       if (parola[i] !== parola[parola.length - 1 - i]) {
           return false; 
       }else{
           return true;
       }
   }
}



aggiungiParolaButton.addEventListener("click",

 function() { if (isPalindrome(parola.value) === true ) {
    console.log(parola.value + " è una parola palindroma!");
    result.innerHTML = parola.value + " è una parola palindroma!"
} else {
    console.log(parola.value + " non è una parola palindroma.");
    result.innerHTML = parola.value + " non è una parola palindroma."
}



});



