//variables globales para el dibujo
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

function volver() { window.location.href = "index.html"; almacenarPalabras(); }

//variables globales para el juego
var palabras = [];
const espacioLetras = document.getElementById("letrasPalabra");

//llamado de las funciones
cargaJuego();


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
        //agregar el elemento de onkeyup para validar la letra ingresada
        espacioLetra.setAttribute("onkeyup", "validarLetra('" + palabraSeleccionada + "',this.id ,this.value)");
        // //valor inicial del input
        // espacioLetra.setAttribute("value", "");
        //asignar el id de letra
        espacioLetra.setAttribute("id", "val"+i);
        espacioLetras.appendChild(espacioLetra);

    }
    console.log(palabraSeleccionada);
}



//funcion para validar si la letra ingresada es correcta
function validarLetra(palabraSeleccionada, idletra, valorEntrada) {
    // console.log(palabraSeleccionada);
    // console.log(idletra);
    console.log("Valor a evaluar: " + valorEntrada);
    //validar si la letra ingresada se encuetra en la palabra seleccionada
    if (palabraSeleccionada.includes(valorEntrada)) {
        console.log("si");
        //validada la letra ponerla en los espacios correspondientes
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            //leer la letra de la palabra seleccionada y compararla con la letra ingresada para rellenar los demas inputs con las mismas letras
            if (palabraSeleccionada[i] == valorEntrada) {
                //obtener el id del input
                let idInput = document.getElementById("val"+(i+1));
                //asignar el valor de la letra ingresada
                idInput.setAttribute("value", valorEntrada);
            }
        }
    } else {
        console.log("no");
    }


}