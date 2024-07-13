let numerSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if(numeroUsuario === numerSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (numeroUsuario > numerSecreto) {
            asignarTextoElemento(`p`, `El número secreto es menor`);
        } else {
            asignarTextoElemento(`p`, `El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector(`#valorUsuario`);
    valorCaja.value = ``;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`, `Ya se sortearon todos los números posibles`);
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales() {
    asignarTextoElemento(`h1`,`Juego del número secreto`);
    asignarTextoElemento(`p`,`Escoge un número del 1 al ${numeroMaximo}` )
    numerSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    condicionesIniciales();

    //Deshabilitar botón
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);

}

condicionesIniciales();


