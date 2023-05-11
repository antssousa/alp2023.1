let nota1 = Number(prompt("Digite a 1ª nota"));
let nota2 = Number(prompt("Digite a 2ª nota"));

let media = (nota1 + nota2) / 2;

if (media >= 7){
    document.write(`Parabéns, você está aprovado (❤ω❤)`);
} else {
    document.write(`Você não foi aprovado (μ_μ)`);
}