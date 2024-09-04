/*Crie um algoritmo que leia um vetor de 10 letras, e diga quantas 
consoantes foram lidas e mostre essas consoantes.
*/
let letras = [];
let vogal = [];
let cont = 0;
let mensagem = "";
for (let i = 0; i < 10; i += 1) {
    let val = prompt("informe uma letra");
    letras[i] = val;
}
for (j = 0; j < 10; j++) {
    let val = letras[j].toUpperCase();
    if (!(val == "A" || val == "E" || val == "I" || val == "O" || val == "U")) {
        cont ++;
        mensagem += val + "\n"
    }
} alert(mensagem + cont + " consoantes");