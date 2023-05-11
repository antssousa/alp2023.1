let n1 = Number(prompt("Digite o 1º nº"));
let n2 = Number(prompt("Digite o 2º nº"));

// const p = document.getElementById("saida");
if (n1 > n2){
    document.write(`O primeiro número é maior`);
    // p.innerText = "O primeiro número é maior";

} else if (n1 < n2) {
    document.write(`O segundo número é maior`);
} else {
    document.write(`Os números são iguais`);
}
