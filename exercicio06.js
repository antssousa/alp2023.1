let saque = Number(prompt("Digite o valor do saque"));
let valor = saque;

let n100 = Math.floor(valor / 100);
valor = valor % 100;
let n50 = Math.floor(valor/ 50);
valor = valor % 50;
let n20 = Math.floor(valor/ 20);
valor = valor % 20;
let n10 = Math.floor(valor/ 10);
valor = valor % 10;
let n5 = Math.floor(valor/ 5);
valor = valor % 5;
let n2 = Math.floor(valor/ 2);
valor = valor % 2;

document.write(`Saque de R$ ${saque}<br>`);
document.write(`Notas de 100 = ${n100}<br>`);
document.write(`Notas de 50 = ${n50}<br>`);
document.write(`Notas de 20 = ${n20}<br>`);
document.write(`Notas de 10 = ${n10}<br>`);
document.write(`Notas de 5 = ${n5}<br>`);
document.write(`Notas de 2 = ${n2}<br>`);