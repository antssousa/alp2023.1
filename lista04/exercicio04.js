let nota1 = Number(prompt("Digite a 1ª nota"));
let nota2 = Number(prompt("Digite a 2ª nota"));
let nota3 = Number(prompt("Digite a 2ª nota"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    document.write(`Aluno aprovado ٩(｡•́‿•̀｡)۶`);
} else if (media >= 5){
    alert(`Aluno de recuperação ((╬◣﹏◢))`);
    let nota_ex = Number(prompt("Digite a nota do exame final"));
    let media_ex = (media + nota_ex) / 2;

    if (media_ex >= 5){
        document.write(`Parabéns, você conseguiu ser aprovado (❁´◡\`❁)`);
    } else {
        document.write(`Não desista fica para a próxima vez ≡(▔﹏▔)≡`);
    }
    
} else {
    document.write(`Aluno reprovado <(￣ ﹌ ￣)>`);
    
}
