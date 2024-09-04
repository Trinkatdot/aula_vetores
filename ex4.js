/* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
mostre o salário líquido de todos, considerando 12% de INSS a descontar
*/
let salario = [];
let mensagem = "";
let desconto = 0.12;

//pedir salarios
for (let i = 0; i < 5; i ++) {
    let bruto = parseFloat(prompt("informe o seu salario bruto:"));
    salario[i] = bruto;
}
//calcular descontos
for (let j = 0; j < 5; j++) {
    let todosbrutos = salario[j];
    let todosliquidos = todosbrutos * (1 - desconto);
    mensagem += `o salario liquido de ${j + 1}é: R$ ${todosliquidos.toFixed(2)}\n`;
}
alert(mensagem);