let nota1 = Number(prompt("Digite a 1ª nota"));
let nota2 = Number(prompt("Digite a 2ª nota"));
let nota3 = Number(prompt("Digite a 2ª nota"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    document.write(`Aluno aprovado ٩(｡•́‿•̀｡)۶`);
} else if (media >= 5){
    document.write(`Aluno de recuperação ((╬◣﹏◢))`);
} else {
    document.write(`Aluno reprovado <(￣ ﹌ ￣)>`);
    
}
