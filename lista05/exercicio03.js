// Primeira solução
let inicio = Number(prompt("Digite o ínicio da repetição"));
let fim = Number(prompt("Digite o fim da repetição"));

// let i = inicio;

// while (i <= fim){
//     document.write(i + " ");
//     i++;
// }

// if (inicio < fim){
//     for (let i = inicio; i <= fim; i++) {
//         document.write(i + " ");
//     }
// } else {
//     // for (let i = fim; i <= inicio; i++) {
//     //     document.write(i + " ");
//     // }
//     for (let i = inicio; i >= fim; i--) {
//         document.write(i + " ");
//     }
// }

if (inicio > fim){
    let aux = inicio;
    inicio = fim;
    fim = aux;
    // [inicio, fim] = [fim, inicio];
} 

for (let i = inicio; i <= fim; i++) {
    document.write(i + " ");
}