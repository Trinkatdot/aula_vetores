/*Crie um algoritmo que leia 20 números inteiros e armazene-os num 
vetor. Armazene os números pares no vetor PAR e os números IMPARES 
no vetor impar. Deve-se no final mostrar os três vetores
*/
let numeros = [];
let mensagem = "";
let par = [];
let impar = [];

for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt("insira um numero:"));
    if (numero % 2 === 0) {
        par.push(numero);
    } else {
        impar.push(numero);
    }
    mensagem = ("Todos os numeros: " + numero) + ("Números pares: " + par) + ("Números ímpares: " + impar);
}
alert (mensagem);
