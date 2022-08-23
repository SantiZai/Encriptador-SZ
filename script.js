var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var munieco = document.querySelector(".munieco");
var textoMunieco = document.querySelector(".texto-munieco");
var parrafoMunieco = document.querySelector(".parrafo-munieco");
var h3Resultado = document.querySelector(".h3");
var textoResultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".boton-copiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function ocultarSeccionMunieco() {


    // ? ocultar
    munieco.classList.add("ocultar");
    textoMunieco.classList.add("ocultar");
    parrafoMunieco.classList.add("ocultar");

    // ? mostrar
    h3Resultado.classList.remove("ocultar");
    botonCopiar.classList.remove("ocultar");
    textoResultado.classList.remove("ocultar");


}

function recuperarTexto() {

    var input = document.querySelector("#ingresado");
    return input.value;

}

function validation(e) {
    key = e.keyCode || e.which
    
    if(key == 8 || key == 32) {
        return true
    }

    pattern = /[a-z]/
    allow_key = String.fromCharCode(key)
    return pattern.test(allow_key)
}

function encriptacion(mensaje) {


    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {


        if (texto[i] == "a"){

            textoFinal += "ai"

        }
        else if (texto[i] == "e"){

            textoFinal += "enter"

        }
        else if (texto[i] == "i"){

            textoFinal += "imes"

        }
        else if (texto[i] == "o"){

            textoFinal += "ober"

        }
        else if (texto[i] == "u"){

            textoFinal += "ufat"

        }
        else{

            textoFinal += texto[i];

        }


    }

    return textoFinal;

}

function desencriptacion(mensaje) {


    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {


        if (texto[i] == "a") {

            textoFinal += "a";
            i++;

        }
        else if (texto[i] == "e") {

            textoFinal += "e";
            i += 4;

        }
        else if (texto[i] == "i") {

            textoFinal += "i";
            i += 3;

        }
        else if (texto[i] == "o") {

            textoFinal += "o";
            i += 3;

        }
        else if (texto[i] == "u") {

            textoFinal += "u";
            i += 3;

        }
        else {

            textoFinal += texto[i];

        }


    }

    return textoFinal;

}

function encriptar() {

    ocultarSeccionMunieco();

    textoResultado.textContent = encriptacion(recuperarTexto());

}

function desencriptar() {

    ocultarSeccionMunieco();

    textoResultado.textContent = desencriptacion(recuperarTexto());

}

function copiar() {

    var aux = document.createElement("input");
    aux.setAttribute("value", document.querySelector(".texto-resultado").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

}

/* otra forma de encriptar

function copiar() {

    var mensaje = document.querySelector("#ingresado");
    var texto = mensaje.replace(/e/igm, "enter");
    var texto = mensaje.replace(/o/igm, "ober");
    var texto = mensaje.replace(/i/igm, "imes");
    var texto = mensaje.replace(/a/igm, "ai");
    var texto = mensaje.replace(/u/igm, "ufat");

    document.querySelector(".texto-resultado").innerHTML = texto;


}
*/