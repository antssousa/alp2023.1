let nota2 = Number(prompt("Digite a 2ª nota"));
let nota1 = Number(prompt("Digite a 1ª nota"));

let media = (nota1 + nota2) / 2;

if (media == 10) {
    document.write(`Aluno aprovado com distinção`);
} else if (media >= 7){
    document.write(`Aluno aprovado`);
} else{
    document.write(`Aluno reprovado`);
}