
const numeroInput = document.getElementById("numeroInput");
const aggiungiNumeroButton = document.getElementById("aggiungiNumero");
const result = document.getElementById("result");


function PariODispari (numero) {

    if ((parseInt(numero)) % 2 === 0) {
        return true ;
    }else{
        return false ;
    }

}



aggiungiNumeroButton.addEventListener("click",

 function() { if (PariODispari(numeroInput.value) === true ) {
    console.log(numeroInput.value + " è un numero pari!");
    result.innerHTML = numeroInput.value + " è un numero pari!"
} else {
    console.log(numeroInput.value + " non è un numero pari.");
    result.innerHTML = numeroInput.value + " non è un numero pari."
}


});



