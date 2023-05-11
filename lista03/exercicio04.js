let n1 = Number(prompt("Digite o 1º nº"));
let n2 = Number(prompt("Digite o 2º nº"));
let n3 = Number(prompt("Digite o 3º nº"));

if (n1 >= n2 && n1 >= n3){
    document.write(`${n1} é o maior número<br>`);
} else if (n2 >= n1 && n2 >= n3) {
    document.write(`${n2} é o maior número<br>`);
} else {
    document.write(`${n3} é o maior número<br>`);
}

// let maior = n1;

// if (maior < n2){
//     maior = n2;
// } 
// if (maior < n3) {
//     maior = n3;
// }

// document.write(`${maior} é o maior número`);

