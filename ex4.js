/* Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final, 
mostre o salário líquido de todos, considerando 12% de INSS a descontar
*/
let salario = [];
let mensagem = "";
let desconto = 0.12;
for (let i = 0; i < 4; i += 1) {
    let salario = prompt(parseFloat("informe o salario"));
    salario [i] = liquido;
}
for (j = 0; j < 4; j++) {
    let liquido = (salario) - (desconto);
    mensagem = `salario o salario liquido é R$${liquido.toFixed(2)}`
}
alert(mensagem);