//Funciones de ubicación en las paginas
function jugar() { window.location.href = "jugar.html"; }
function agregarPalabra() { window.location.href = "palabra.html"; }
function volver() { window.location.href = "index.html"; almacenarPalabras(); }

//selectores de los elementos del DOM
let palabra = document.getElementById("palabra");

//variables globales

let palabras = [];

function addpalabra() {
    let palabraTxt = document.getElementById("palabratxt").value;
    if (palabraTxt == "" || palabraTxt == null) {
        alert("No se puede agregar una palabra sin caracteres");
        document.getElementById("palabratxt").focus();
    } else {
        alert("Palabra a agregar: " + palabraTxt);
    }

    //asignar el valor de la palabra a un arreglo
    palabraTxt = palabraTxt.toLowerCase();
    palabras.push(palabraTxt);
    console.log(palabras);
    document.getElementById("palabratxt").value = "";
    document.getElementById("palabratxt").focus();

}


function almacenarPalabras() {
    //almacenado de las palabras agregadas
    localStorage.setItem("PalabrasAlmacenadas", JSON.stringify(palabras));
    
    alert("Palabra guardada");
    window.location.href = "index.html";
}
