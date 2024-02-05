let numeroSecreto = 0;
let intentos  = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es Menor')
        }else{asignarTextoElemento('p','El numero secreto es Mayor')}
        intentos++;
        limpiarCaja();
    }
    return;
}

//Limpia la caja de ingreso de numeros
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    //Genera numero aleatorio
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Valida si se llego al maximo de intentos posibles
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

//Funcion para generar las condiciones inicales de las variables
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero Secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

//Funcion para reiniciar el juego
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
