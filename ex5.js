/*Crie um algoritmo que leia 20 números inteiros e armazene-os num 
vetor. Armazene os números pares no vetor PAR e os números IMPARES 
no vetor impar. Deve-se no final mostrar os três vetores
*/
let listaNumeros = [];
let par = [];
let impar = [];

//lista de numeros inseridos no indice = lista de numeros
for (let i = 0; i < 10; i++) {
    let numeroString = prompt("informe um numero:");
    let numero = parseInt(numeroString);
    listaNumeros.push(numero);
}

//processar os pares e impares
for (let j = 0; j < listaNumeros.length; j++) {
    //Pega o valor corrente do vetor de números
    let numeroAgora = listaNumeros[j];
    //verifica se é par == true ou false
    let ehPar = ((numeroAgora % 2) == 0);

    if (ehPar) {
        par.push(numeroAgora);
    } else {
        impar.push(numeroAgora);
    }
}

//mostrar todos os numeros
let mensagemNumeros = "";
for (let k = 0; k < listaNumeros.length; k++) {
    let ultimaPosicao = (listaNumeros.length - 1);
    if (k == ultimaPosicao) {
        mensagemNumeros += listaNumeros[k] + ".";
    }
    else {
        mensagemNumeros += listaNumeros[k] + ", ";
    }
}

//mostar numeros pares
let mensagemPares = "";
for (let k = 0; k < par.length; k++) {
    let ultimaPosicao = (par.length - 1);
    if (k == ultimaPosicao) {
        mensagemPares += par[k] + ".";
    }
    else {
        mensagemPares += par[k] + ", ";
    }
}

//mostrar numeros impares
let mensagemImpares = "";
for (let k = 0; k < impar.length; k++) {
    let ultimaPosicao = (impar.length - 1);
    if (k == ultimaPosicao) {
        mensagemImpares += impar[k] + ".";
    }
    else {
        mensagemImpares += impar[k] + ", ";
    }
}

//mensagem
alert(`os numeros inseridos: ${mensagemNumeros}
        os numeros pares: ${mensagemPares}
        os numeros impares: ${mensagemImpares}`);
