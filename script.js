//DATOS CHALLENGE:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


/*
Parametro i(afecta may y min)g(afecta toda la oracion)m(afecta parrafo)
*/ 

//3 funciones de los 3 botones
function encrip(){

    var texto= document.getElementById("inputText").value.toLowerCase();
    var cifrar=texto.replace(/e/igm,"enter");
    var cifrar=cifrar.replace(/i/igm,"imes") ; 
    var cifrar=cifrar.replace(/a/igm,"ai");
    var cifrar=cifrar.replace(/o/igm,"ober") ;
    var cifrar=cifrar.replace(/u/igm,"ufat") ;

    document.getElementById("muñeco").style.display="none";
    document.getElementById("text").style.display="none";
    document.getElementById("text-area").innerHTML= cifrar;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";

}

function desencrip(){

}

function copiar(){

}