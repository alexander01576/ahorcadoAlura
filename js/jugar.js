//variables globales para el dibujo
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

function volver() { window.location.href = "index.html"; almacenarPalabras(); }

//variables globales para el juego
var palabras = [];
const espacioLetras = document.getElementById("letrasPalabra");

//llamado de las funciones
cargaJuego();
enfocar();


//funcion para cargar los elementos para el juego
function cargaJuego() {
    obtenerPalabras();
    let palabraSeleccionada = seleccionarPalabra();
    //console.log(palabraSeleccionada);
    mostrarEspacios();
}

//obtener palabras almacenadas en el local storage
function obtenerPalabras() {
    let palabrasNuevas = localStorage.getItem("PalabrasAlmacenadas");
    palabras = JSON.parse(palabrasNuevas);
    console.log(palabras);
}

//seleccion de palabra aleatoria
function seleccionarPalabra() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    return palabra;
}

//funcion para mostrar los espacios de las letras de la palabra
function mostrarEspacios() {
    let palabraSeleccionada = seleccionarPalabra();
    for (let i = 1; i <= palabraSeleccionada.length; i++) {
        //crear elemento input para las letras y mostrarlos en pantalla
        let espacioLetra = document.createElement("input");
        espacioLetra.setAttribute("type", "text");
        espacioLetra.setAttribute("class", "espacioLetra");
        espacioLetra.setAttribute("maxlength", "1");
        espacioLetras.appendChild(espacioLetra);
    }
    console.log(palabraSeleccionada);
}

