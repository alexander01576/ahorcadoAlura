//Funciones de ubicación en las paginas
function jugar() { window.location.href = "jugar.html"; }
function agregarPalabra() { window.location.href = "palabra.html"; }
function cancelar() { window.location.href = "index.html"; }

showWords();

//

//mostrar palabras almacenadas en pantalla
function showWords() {

    //mostrar palabras almacenadas en consola
    let palabrasNuevas = localStorage.getItem("PalabrasAlmacenadas");
    console.log(palabrasNuevas);
    var ini = document.getElementById('lista');


    var palabrax1 = JSON.parse(palabrasNuevas);
    var ini = document.getElementById('lista');

    if (palabrax1 == null) {
        document.getElementById("btnlimpiar").style.display = "none";
        document.getElementById("listaTitulo").innerHTML = "No hay palabras almacenadas";
    } else {
        //recorrer el arreglo de palabras
        for (let i = 0; i < palabrax1.length; i++) {
            console.log(palabrax1[i]);
            ini.innerHTML += '<p class="listWords">' + palabrax1[i] + '</p>';
        }
    }

}


function limpiar() {
    //implementar funcion clear
    localStorage.clear();
    console.log("limpiado");
    cancelar();
}